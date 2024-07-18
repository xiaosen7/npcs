#!/bin/bash

script_path=$(readlink -f "$0")
script_dir=$(dirname "$script_path")

docker network create stackoverflow-network > /dev/null 2>&1
docker compose -f "$script_dir/docker-compose.db.yml" up -d --build