#!/bin/bash

# 设置变量
CONTEXT_PATH="."
DOCKERFILE_PATH="./Dockerfile"

if [ -z "$TURBO_TEAM" ] || [ -z "$TURBO_TOKEN" ]; then
    echo "Warn: TURBO_TEAM or TURBO_TOKEN environment variables are not set."
fi

# 检查必要的环境变量
if [ -z "$APP_DIR" ] || [ -z "$APP_PACKAGE_NAME" ] || [ -z "$IMAGE_NAME" ]; then
    echo "Error: One or more required environment variables are not set."
    echo "Please ensure APP_DIR, IMAGE_NAME and APP_PACKAGE_NAME are set."
    exit 1
fi

# 获取最新的 git commit hash
GIT_COMMIT_HASH=$(git rev-parse --short HEAD)
if [ $? -ne 0 ]; then
    echo "Error: Failed to get git commit hash. Are you in a git repository?"
    exit 1
fi

# 获取当前时间戳（精确到秒）
CURRENT_TIMESTAMP=$(date +"%Y%m%d%H%M%S")

echo "Building Docker image: $IMAGE_NAME"

# 执行 Docker 构建
docker build \
    --build-arg TURBO_TEAM=$TURBO_TEAM \
    --build-arg TURBO_TOKEN=$TURBO_TOKEN \
    --build-arg APP_DIR=$APP_DIR \
    --build-arg APP_PACKAGE_NAME=$APP_PACKAGE_NAME \
    -t $IMAGE_NAME \
    -f $DOCKERFILE_PATH \
    $CONTEXT_PATH

# 检查构建是否成功
if [ $? -eq 0 ]; then
    echo "Docker build completed successfully."
    echo "Image built: $IMAGE_NAME"
    
    # 可选：运行容器
    # echo "Starting container..."
    # docker run -d --name ${APP_PACKAGE_NAME#@}-container $IMAGE_NAME
else
    echo "Docker build failed."
    exit 1
fi