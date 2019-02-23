# DIY NestJS Playbook

creating NestJS project and generate nest artifacts with-in monorepo.

> An Introduction to [NestJS](https://www.joshmorony.com/an-introduction-to-nestjs-for-ionic-developers/)

### Prerequisites

#### Install Global Packages

```bash
npm remove -g @nestjs/cli
npm install -g @nestjs/cli
```

### Scaffold Project

> adding code dependencies

```bash
ng g node-app api --framework=nestjs --unit-test-runner=jest --tags=api-module -d

# Add nestjs
npm i  @nestjs/{common,core,microservices,swagger,websockets,typeorm,passport,elasticsearch}

# fastify-* are optional. use only if you want to replace express with fastify
npm i fastify fastify-formbody fastify-swagger

npm i -D @nestjs/testing
npm i -D @nestjs/schematics
```

> check versions

```bash
# check of nest installed
nest info
```

#### Dependencies

> adding 3rd party modules/libs

```bash
npm i pg
npm i dotenv
npm i helmet
npm i web-push
npm i nest-router
npm i nodemailer pug
npm i class-validator
npm i class-transformer
npm i passport passport-jwt @xmlking/jwks-rsa

npm i -D rimraf nodemon tsconfig-paths ts-loader
npm i -D jest ts-jest @types/jest supertest @types/supertest
npm i -D @types/nodemailer
npm i -D @types/socket.io
npm i -D @types/passport@0.4.2 @types/passport-jwt
npm i -D @types/web-push
npm i -D @types/helmet
```

#### Generate Artifacts

```bash
# scaffold core module
nest g module app/core --dry-run
nest g guard auth app/core --dry-run


# scaffold shared module
nest g module app/shared --dry-run
nest g gateway eventbus app/shared --dry-run

# scaffold user module
nest g module app/user --dry-run
nest g controller profile app/user --dry-run
nest g service profile app/user --dry-run
nest g class profile/profile.entity app/user --no-spec --dry-run
nest g controller email app/user --dry-run

# scaffold email module
nest g module app/email --dry-run
nest g service email app/email --flat --dry-run

# scaffold auth module
nest g module app/auth  --dry-run
nest g controller auth app/auth --flat --dry-run
nest g service auth app/auth --flat --dry-run
nest g class user.entity app/auth --no-spec --dry-run
nest g class auth.exception app/auth --no-spec --dry-run

# scaffold chat module
nest g module app/chat  --dry-run
nest g controller chat app/chat --flat --dry-run
nest g service chat app/chat --flat --dry-run
nest g gateway chat app/chat --flat --dry-run

# scaffold external module
nest g module app/external  --dry-run
nest g controller weather app/external --dry-run
nest g service weather app/external --dry-run

# scaffold project module
nest g module app/project --dry-run
nest g controller kubernetes app/project --dry-run
nest g service kubernetes app/project --dry-run
nest g class cluster/cluster.entity app/project --no-spec --dry-run
nest g controller cluster app/project --dry-run
nest g service cluster app/project --dry-run
nest g class project.entity app/project --no-spec --dry-run
nest g controller project app --dry-run
nest g service project app --dry-run

# scaffold notifications module
nest g module app/notifications --dry-run
nest g controller notification app/notifications --dry-run
nest g service notification app/notifications --dry-run
nest g service  notification/push  app/notifications --flat --no-spec --dry-run
nest g class notification/notification.entity app/notifications --no-spec --dry-run
nest g controller subscription app/notifications  --dry-run
nest g service subscription app/notifications --dry-run
nest g class subscription/subscription.entity app/notifications --no-spec --dry-run

You could also use `ng g` if you `npm i -D @nestjs/schematics`
ng g @nestjs/schematics:module game --path app --source-root apps/api/src -d
ng g @nestjs/schematics:controller match --path app/game  --source-root apps/api/src -d
ng g @nestjs/schematics:service match --path app/game --source-root apps/api/src -d
ng g @nestjs/schematics:class match/match.entity --path app/game --source-root apps/api/src --spec -d
```

### Ref

- Awesome Nest
  - https://github.com/juliandavidmr/awesome-nest
- ChatBot
  - https://github.com/adrien2p/nestjs-dialogflow
- https://github.com/beeman/nest-angular-nx
- https://github.com/cgatian/customer-portal
- http://blog.exceptionfound.com/index.php/2018/06/07/nestjs-basic-auth-and-sessions/
