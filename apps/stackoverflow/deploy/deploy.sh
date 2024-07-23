#!/bin/bash

script_path=$(readlink -f "$0")
script_dir=$(dirname "$script_path")

bash $script_dir/setup-database.sh
bash $script_dir/wait-for.sh 127.0.0.1:5432 -t 60
docker compose -f $script_dir/docker-compose.yml up -d --build --force-recreate