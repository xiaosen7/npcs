# npcs

Next.js practical cases.

## Develop application

1. Setup database

```bash
docker compose -f ./db.docker-compose.yml up
```

2. Compile libs

```bash
pnpm turbo compile
```

3. Start dev server

```bash
pnpm dev
# or run pnpm -w dev-app in any folder
```

## Develop libraries

```bash
pnpm turbo compile:watch
```

## Todo list

| Task                                         | Complete | Developing |
| -------------------------------------------- | -------- | ---------- |
| Deploy as changed                            | 1        |            |
| Env refactor                                 | 1        |            |
| CI for check                                 | 1        |            |
| Development flow                             |          |            |
| Webhook                                      |          |            |
| Fix styles for `stackoverflow`               | 1        |            |
| Dep check                                    |          |            |
| Git message lint                             |          |            |
| The flow of publish libraries                |          | 1          |
| Research turbo generators                    |          |            |
| Replace next config with `@npcs/next-config` | 1        |            |
| Refactor all consoles                        |          |            |
| Console env in development                   |          |            |
| Extract shared next config to plugin         |          |            |
| Extract eslint for libs                      |          |            |
| Replace clerk.js key to production           |          |            |
| Translate to English                         |          |            |
| i18n                                         |          |            |
| Prisma cache                                 |          |            |
| Deploy                                       |          | 1          |
| App logo                                     |          |            |
