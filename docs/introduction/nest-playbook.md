# DIY NestJS Playbook

creating NestJS project and generate nest artifacts with-in monorepo.

> An Introduction to [NestJS](https://www.joshmorony.com/an-introduction-to-nestjs-for-ionic-developers/)

## Workspace

[monorepo mode](https://docs.nestjs.com/cli/monorepo#monorepo-mode)

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
cd apps/api
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
# scaffold echo module
nest g module     app/echo -p api --dry-run
nest g controller app/echo -p api --dry-run

# scaffold core module
nest g module app/core -d
nest g guard auth app/core -d

# scaffold shared module
nest g module app/shared -d
nest g gateway eventbus app/shared -d

# scaffold user module
nest g module app/user -d
nest g class user.entity app/user --no-spec -d
nest g controller user app -d
nest g service user app -d
nest g controller profile app/user -d
nest g service profile app/user -d
nest g class profile/profile.entity app/user --no-spec -d
nest g controller email app/user -d

# scaffold email module
nest g module app/email -d
nest g service email app/email --flat -d

# scaffold auth module
nest g module app/auth  -d
nest g class auth.exception app/auth --no-spec -d

# scaffold chat module
nest g module app/chat  -d
nest g controller chat app/chat --flat -d
nest g service chat app/chat --flat -d
nest g gateway chat app/chat --flat -d

# scaffold external module
nest g module app/external  -d
nest g controller weather app/external -d
nest g service weather app/external -d

# scaffold project module
nest g module app/project -d
nest g controller kubernetes app/project -d
nest g service kubernetes app/project -d
nest g class cluster/cluster.entity app/project --no-spec -d
nest g controller cluster app/project -d
nest g service cluster app/project -d
nest g class project.entity app/project --no-spec -d
nest g controller project app -d
nest g service project app -d

# scaffold notifications module
nest g module app/notifications -d
nest g controller notification app/notifications -d
nest g service notification app/notifications -d
nest g service  notification/push  app/notifications --flat --no-spec -d
nest g class notification/notification.entity app/notifications --no-spec -d
nest g controller subscription app/notifications  -d
nest g service subscription app/notifications -d
nest g class subscription/subscription.entity app/notifications --no-spec -d

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
- https://github.com/TorinAsakura/etl-api
