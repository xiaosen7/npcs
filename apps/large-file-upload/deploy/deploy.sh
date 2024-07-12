#!/bin/bash

script_path=$(readlink -f "$0")
script_dir=$(dirname "$script_path")

docker compose -f $script_dir/docker-compose.yml up -d --build