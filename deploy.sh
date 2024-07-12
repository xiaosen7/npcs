docker compose -f ./apps/large-file-upload/docker-compose.yml up -d --build
docker compose -f ./apps/stackoverflow/docker-compose.db.yml up -d --build
docker compose -f ./apps/stackoverflow/docker-compose.yml up -d --build