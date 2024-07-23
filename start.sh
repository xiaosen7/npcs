# 检查必要的环境变量
if [ -z "$PORT" ] || [ -z "$DATABASE_URL" ] || [ -z "$IMAGE_NAME" ]; then
    echo "Error: One or more required environment variables are not set."
    echo "Please ensure PORT, DATABASE_URL, and IMAGE_NAME are set."
    exit 1
fi

docker run -p $PORT:$PORT -e PORT=$PORT -e DATABASE_URL=$DATABASE_URL $IMAGE_NAME