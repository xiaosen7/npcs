# npcs

Next.js practical cases.

## Apps

| Name                                          | Description                       |
| --------------------------------------------- | --------------------------------- |
| [Notes](http://18.138.71.40:3001)             | A Notes application               |
| [Stackoverflow](http://18.138.71.40:3002)     | Stackoverflow clone               |
| [large-file-upload](http://18.138.71.40:3003) | Large file upload, chunks enabled |

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

| Task                                                       | Complete | Developing |
| ---------------------------------------------------------- | -------- | ---------- |
| Deploy as changed                                          | 1        |            |
| Env refactor                                               | 1        |            |
| CI for check                                               | 1        |            |
| Development flow                                           | 1        |            |
| Webhook                                                    |          |            |
| Fix styles for `stackoverflow`                             | 1        |            |
| Dep check                                                  |          |            |
| Git message lint                                           |          |            |
| The flow of publish libraries                              | 1        |            |
| Research turbo generators                                  |          |            |
| Replace next config with `@npcs/next-config`               | 1        |            |
| Refactor all consoles                                      |          |            |
| Console env in development                                 |          |            |
| Extract shared next config to plugin                       |          |            |
| Extract eslint for libs                                    |          |            |
| Replace clerk.js key to production                         |          |            |
| Translate to English                                       |          |            |
| i18n                                                       |          |            |
| Prisma cache                                               |          |            |
| Deploy                                                     |          |            |
| App logo                                                   |          |            |
| App logo                                                   |          |            |
| Centralized management of authentication and Authorization |          | 1          |
| Index page                                                 |          |            |
| Enable Docker cache in CI                                  |          |            |
| Fix the `createUserIfNeeded`                               |          |            |

## References

- [examples-next-prisma-starter](https://github.com/trpc/examples-next-prisma-starter/blob/main/package.json)
