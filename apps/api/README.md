# API

## Description

Backend API build with [Nest](https://github.com/nestjs/nest) Framework.

## Built with

| Component      | Using                                                                                            | Descrption |
| -------------- | ------------------------------------------------------------------------------------------------ | ---------- |
| Base           | [NestJS](https://nestjs.com)                                                                     |
| ORM            | [TypeORM](http://typeorm.io/)                                                                    |
| File Upload    | [Multer](https://github.com/expressjs/multer)                                                    |
| Validation     | [Class-Validator](https://github.com/typestack/class-validator)                                  |
| Documentation  | [Open API(Swagger)](https://swagger.io)                                                          |
| Authentication | [Passport.js](http://www.passportjs.org)                                                         |
| Testing        | [Jest](https://github.com/facebook/jest) & [SuperTest](https://github.com/visionmedia/supertest) |
| Code Style     | [Prettier](https://github.com/prettier/prettier) & [TS-Lint](https://palantir.github.io/tslint/) |

## Development

### Run

#### Postgres

> start Postgres

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

#### Run Dev Mode

```bash
# start in watch mode
ng serve api
# to turn on logging for `request`
NODE_DEBUG=request ng serve api
DEBUG=typeorm:* ng serve api
# optinally you can run with prod env(environment.prod.ts) for tesrting! use this for testing only.
ng serve api --prod
```

#### Run Prod Mode

```bash
# build first
ng build api --prod
# then run
npm run api:start:prod
```

**API URL:** http://localhost:3000

**Swagger Docs URL:** http://localhost:3000/docs

### Build

> build for production env

```bash
npm run api:build
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

- Awesome Nest
  - https://github.com/juliandavidmr/awesome-nest
- NestJS Samples
  - https://github.com/nestjs/nest/tree/master/sample
- TypeORL Samples
  - https://github.com/typeorm/typeorm/tree/master/sample
