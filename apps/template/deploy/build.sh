#!/bin/bash

# 设置变量
PROJECT_NAME="nextjs-practical-cases"
CONTAINER_NAME="template"
CONTEXT_PATH="../../../"
DOCKERFILE_PATH="./apps/template/deploy/Dockerfile"
APP_DIR="apps/template"
APP_PACKAGE_NAME="@npc/template"

# 检查环境变量
if [ -z "$TURBO_TEAM" ] || [ -z "$TURBO_TOKEN" ]; then
    echo "Error: TURBO_TEAM or TURBO_TOKEN environment variables are not set."
    exit 1
fi

# 执行 Docker 构建
echo "Starting Docker build for $PROJECT_NAME"

docker build \
    --build-arg TURBO_TEAM=$TURBO_TEAM \
    --build-arg TURBO_TOKEN=$TURBO_TOKEN \
    --build-arg APP_DIR=$APP_DIR \
    --build-arg APP_PACKAGE_NAME=$APP_PACKAGE_NAME \
    -t $CONTAINER_NAME \
    -f $DOCKERFILE_PATH \
    $CONTEXT_PATH

# 检查构建是否成功
if [ $? -eq 0 ]; then
    echo "Docker build completed successfully."
    
    # 可选：运行容器
    # echo "Starting container..."
    # docker run -d --name $CONTAINER_NAME $CONTAINER_NAME
else
    echo "Docker build failed."
    exit 1
fi