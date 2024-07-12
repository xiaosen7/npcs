#!/bin/bash

script_path=$(readlink -f "$0")
script_dir=$(dirname "$script_path")

bash $script_dir/setup-database.sh
docker compose -f $script_dir/docker-compose.yml up -d --build