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
# start local postgres
docker-compose up postgres
docker-compose up -V postgres #remove volumes

# stop local postgres before restart again
docker-compose down
docker-compose down -v #remove volumes
```
> if error `The container name "/postgres" is already in use by container`, remove orphan container.
```bash
docker ps -a
docker rm 82be5234c94a
```

> make sure to delete **dist/apps/api**  before running any of the following commands.
> other wish old .js **entity** classes my conflict and cause unexpected bugs.

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
> coverage will be generate in coverage/apps/api
```bash
# unit tests
ng test api

# e2e tests
ng test api-e2e
```


### Reference
* Awesome Nest
  * https://github.com/juliandavidmr/awesome-nest
* NestJS Samples
  * https://github.com/nestjs/nest/tree/master/sample
* TypeORL Samples
  * https://github.com/typeorm/typeorm/tree/master/sample
