API
===

## Description

Backend API build with [Nest](https://github.com/nestjs/nest) Framework.

 
## Run

```bash
# development
npm run api:start

# watch mode
npm run api:start:dev

# incremental rebuild (webpack)
npm run api:webpack
npm run api:start:hmr

# production mode
npm run api:prestart:prod
npm run api:start:prod
```

## Build
```bash
# build for production env 
npm run api:prestart:prod
```

## Test
> coverage will be generate in dist/api/coverage
```bash
# unit tests
npm run api:test
# for api project
npx jest --projects=apps/api --roots=src


# e2e tests
npm run api:test:e2e
# for api project
npx jest --projects=apps/api --roots=e2e

# test coverage
npm run api:test:cov
# for api project
npx jest --projects=apps/api --coverage
```
