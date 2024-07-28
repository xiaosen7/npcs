#!/bin/bash

DOCKER_COMPOSE_FILE="docker-compose.yml"

set -e

# 加载 .env 文件
if [ -f ~/.env.local ]; then
    export $(grep -v '^#' ~/.env.local | xargs)
fi

# 检查必要的环境变量
required_vars=(
    "POSTGRES_PASSWORD"
    "CLERK_SECRET_KEY"
    "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY"
    "DOCKER_PASSWORD"
    "DOCKER_REGISTRY"
    "DOCKER_USER"
)

# 未设置的变量列表
unset_vars=()

# 检查每个变量是否为空
for var in "${required_vars[@]}"; do
    if [ -z "${!var}" ]; then
        unset_vars+=("$var")
    fi
done

# 输出未设置的变量
if [ ${#unset_vars[@]} -ne 0 ]; then
    echo "The following required variables are not set:"
    for unset_var in "${unset_vars[@]}"; do
        echo "  - $unset_var"
    done
    exit 1
else
    echo "All required variables are set."
fi

echo "$DOCKER_PASSWORD" | docker login "$DOCKER_REGISTRY" -u "$DOCKER_USER" --password-stdin

# 检查yq工具是否安装
if ! command -v yq &>/dev/null; then
    echo "Cann't find yq, please install."
    echo "For linux: sudo wget https://github.com/mikefarah/yq/releases/download/v4.9.8/yq_linux_amd64 -O /usr/bin/yq && sudo chmod +x /usr/bin/yq"
    exit 1
fi

# 拉取最新的镜像
docker compose pull
docker compose up -d --no-recreate # 首次启动

services=$(yq e '.services | keys | .[]' "$DOCKER_COMPOSE_FILE")
echo "Services to be processed: $services"

# 更新
for service in $services; do
    echo "Processing service: $service"

    # 获取当前运行的镜像ID
    CURRENT_IMAGE_ID=$(docker inspect --format='{{.Image}}' "$service" 2>/dev/null || true)

    echo "Current Image ID $CURRENT_IMAGE_ID"

    # 获取最新镜像的ID
    LATEST_IMAGE=$(yq e ".services.$service.image" "$DOCKER_COMPOSE_FILE")

    # 获取最新镜像的ID
    LATEST_IMAGE_ID=$(docker inspect --format='{{.Id}}' "$LATEST_IMAGE" 2>/dev/null || true)

    echo "Last Image ID $LATEST_IMAGE_ID"

    # 比较镜像ID
    if [ "$CURRENT_IMAGE_ID" != "$LATEST_IMAGE_ID" ]; then
        # 如果镜像ID不同，重建并启动服务
        docker compose up -d --force-recreate --no-deps "$service"
    else
        echo "$service service is already up-to-date."
    fi
done

# 删除悬空镜像
docker image prune -f
