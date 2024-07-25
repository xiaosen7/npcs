#!/bin/bash

set -e # 启用错误立即退出模式

# 设置变量
CONTEXT_PATH="."
DOCKERFILE_PATH="./Dockerfile"

if [ -z "$TURBO_TEAM" ] || [ -z "$TURBO_TOKEN" ]; then
    echo "Warn: TURBO_TEAM or TURBO_TOKEN environment variables are not set."
fi

if [ -z "$NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY" ] || [ -z "$CLERK_SECRET_KEY" ] || [ -z "$REGISTRY" ] || [ -z "$IMAGE_NAMESPACE" ]; then
    echo "Error: Ensure NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY, CLERK_SECRET_KEY, REGISTRY, IMAGE_NAMESPACE environment variables are set."
    exit 1
fi

# 获取最新的 git commit hash
GIT_COMMIT_HASH=$(git rev-parse --short HEAD)
if [ $? -ne 0 ]; then
    echo "Error: Failed to get git commit hash. Are you in a git repository?"
    exit 1
fi

# 函数：清理包名以适用于 Docker 镜像名称
clean_package_name() {
    echo "$1" | sed -e 's/[^a-zA-Z0-9.]/-/g' -e 's/^[-.]//g' -e 's/[-.]$//g' | tr '[:upper:]' '[:lower:]'
}

# 遍历 apps 目录下的所有文件夹
for APP_DIR in apps/*/; do
    # 移除路径末尾的斜杠
    APP_DIR=${APP_DIR%/}

    # 获取应用名称（文件夹名）
    APP_NAME=$(basename "$APP_DIR")

    # 从 package.json 中获取 APP_PACKAGE_NAME
    APP_PACKAGE_NAME=$(jq -r '.name' "$APP_DIR/package.json")

    if [ -z "$APP_PACKAGE_NAME" ]; then
        echo "Error: Unable to get package name from $APP_DIR/package.json"
        exit 1
    fi

    # 清理 APP_PACKAGE_NAME 以用于 Docker 镜像名称
    CLEAN_PACKAGE_NAME=$(clean_package_name "$APP_PACKAGE_NAME")

    # 构建 IMAGE_NAME
    IMAGE_NAME="$IMAGE_NAMESPACE/$CLEAN_PACKAGE_NAME"

    echo "Building Docker image for $APP_NAME ($APP_PACKAGE_NAME)"
    echo "Using image name: $IMAGE_NAME"

    # 获取 turbo build hash
    APP_TURBO_HASH=$(npx turbo build --filter="$APP_PACKAGE_NAME" --dry=json | jq -r --arg PACKAGE_NAME "$APP_PACKAGE_NAME" '.tasks[] | select(.package==$PACKAGE_NAME) | .hash')
    echo "turbo build hash for $APP_PACKAGE_NAME: $APP_TURBO_HASH"

    if [ -z "$APP_TURBO_HASH" ]; then
        echo "Error: Unable to get turbo build hash for $APP_PACKAGE_NAME"
        exit 1
    fi

    # 检查远程镜像是否存在
    if docker manifest inspect "${IMAGE_NAME}:turbo_${APP_TURBO_HASH}" >/dev/null 2>&1; then
        echo "Image ${IMAGE_NAME}:turbo_${APP_TURBO_HASH} already exists. Skipping build and push."
        continue
    fi

    # 执行 Docker 构建
    docker build \
        --build-arg TURBO_TEAM="$TURBO_TEAM" \
        --build-arg TURBO_TOKEN="$TURBO_TOKEN" \
        --build-arg APP_DIR="$APP_DIR" \
        --build-arg APP_PACKAGE_NAME="$APP_PACKAGE_NAME" \
        --build-arg NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="$NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY" \
        --build-arg CLERK_SECRET_KEY="$CLERK_SECRET_KEY" \
        -t "${IMAGE_NAME}":latest \
        -t "${IMAGE_NAME}":"${GIT_COMMIT_HASH}" \
        -t "${IMAGE_NAME}":turbo_"${APP_TURBO_HASH}" \
        -f $DOCKERFILE_PATH \
        $CONTEXT_PATH

    echo "Docker build completed successfully for $APP_NAME."
    echo "Image built: ${IMAGE_NAME}:latest, ${IMAGE_NAME}:${GIT_COMMIT_HASH}, and ${IMAGE_NAME}:turbo_${APP_TURBO_HASH}"

    # 推送镜像到 Docker 仓库
    echo "Preparing to push images to Docker registry..."
    echo "Docker registry: $DOCKER_REGISTRY"

    echo "Pushing image: ${IMAGE_NAME}:${GIT_COMMIT_HASH}"
    docker push "${IMAGE_NAME}":"${GIT_COMMIT_HASH}"

    echo "Pushing image: ${IMAGE_NAME}:latest"
    docker push "${IMAGE_NAME}":latest

    echo "Pushing image: ${IMAGE_NAME}:turbo_${APP_TURBO_HASH}"
    docker push "${IMAGE_NAME}":turbo_"${APP_TURBO_HASH}"

    echo "Images pushed successfully for $APP_NAME."
    echo "----------------------------------------"
done

echo "All builds and pushes completed successfully."
