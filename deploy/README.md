# next.js-practical-cases - deploy

## Deploy by hand

Requirements to run `start.sh`: docker, docker compose, yq, and some environment variables.

Add your env vars to `~/.env.local`, see `.env.local.example` to get the detail. `start.sh` will auto load them.

```bash
bash ./start.sh
```

To kill all containers in current machine.

```bash
docker kill $(docker ps -q) && docker rm $(docker ps -a -q)
```
