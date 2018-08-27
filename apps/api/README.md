API
===

## Description

Backend API build with [Nest](https://github.com/nestjs/nest) Framework.

## Built with

 Component        |                      Using                      | Descrption
------------------| ----------------------------------------------- | ----------
Base              | [NestJS](https://nestjs.com)                    |
ORM               | [TypeORM](http://typeorm.io/)                   |
File Upload       | [Multer](https://github.com/expressjs/multer)   |
Validation        | [Class-Validator](https://github.com/typestack/class-validator)|
Documentation     | [Open API(Swagger)](https://swagger.io)         |
Configuration     | [Dotenv](https://github.com/motdotla/dotenv)    | 
Authentication    | [Passport.js](http://www.passportjs.org)        |
Testing           | [Jest](https://github.com/facebook/jest) & [SuperTest](https://github.com/visionmedia/supertest)|
Code Style        | [Prettier](https://github.com/prettier/prettier) & [TS-Lint](https://palantir.github.io/tslint/)|


## Development
### Run

#### MongoDB
> start mongodb 
```bash
# or start local mongodb
docker-compose up mongodb
# stop local mongodb before restart again
docker-compose down
```


#### Run Dev Mode
```bash
# start in watch mode
npm run api:start:dev

# start
npm run api:start
# if you want run with `development` config
NODE_ENV=development npm run api:start
```

#### Run HMR Mode
> run both commands in two terminals 
```bash
# incremental rebuild (webpack)
npm run api:webpack
# incremental load (HMR)
npm run api:start:hmr
``` 

#### Run Prod Mode
> run both commands
```bash
# build first
npm run api:prestart:prod
# then run
npm run api:start:prod
# if you want run with `production` config
NODE_ENV=production npm run api:start:prod
```

### Build
> build for production env 
```bash
# with TSC (recommended) 
NODE_ENV=production npm run api:prestart:prod
# with webpack
npm run api:webpack -- -p
```

### Generate
> scaffolding nest artifacts <br/>
> For more details checkout [playbook](../../PLAYBOOK-NEST.md)    

```bash
# check of nest installed
nest info

cd apps/api
# scaffold project module
nest generate module project --dry-run
nest generate controller project --dry-run
nest generate service project project --dry-run
nest generate class project --dry-run

# scaffold core module
nest g module core --dry-run
nest g guard auth core --dry-run
nest g exception auth --dry-run
```

### Test
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


### Reference
* Awesome Nest
  * https://github.com/juliandavidmr/awesome-nest
* NestJS Samples
  * https://github.com/nestjs/nest/tree/master/sample
* TypeORL Samples
  * https://github.com/typeorm/typeorm/tree/master/sample
