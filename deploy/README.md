# next.js-practical-cases - deploy

## Deploy by hand

Add your env vars to `~/.env.local`, see `.env.local.example` to get the detail.

### Cheat sheet

```bash
# Load env vars
export $(grep -v '^#' ~/.env.local | xargs)
# Pull the latest image
docker compose pull <app>
# Restart container
docker compose up -d <app>
# Clear unused images
docker image prune -f
```

To kill all containers in current machine.

```bash
docker kill $(docker ps -q) && docker rm $(docker ps -a -q)
```
