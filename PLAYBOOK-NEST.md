DIY NestJS Playbook
===================

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
nest new api
nest new api "my api" "0.1.0-SNAPSHOT" "Sumanth Chinthagunta <xmlking@gmail.com>" -d

npm i @nestjs/core @nestjs/common 
npm i @nestjs/microservices @nestjs/websockets @nestjs/testing @nestjs/typeorm typeorm  mongodb
npm i @nestjs/swagger 
npm i @nestjs/passport passport passport-jwt @xmlking/jwks-rsa
npm i nest-router
npm i nodemailer pug
# fastify-* are optional. use only if you want to replace express with fastify
npm i fastify fastify-formbody fastify-swagger  


npm i -D @nestjs/schematics
npm i -D rimraf nodemon tsconfig-paths ts-loader
npm i -D jest ts-jest @types/jest supertest @types/supertest
npm i -D webpack-cli webpack-node-externals
npm i -D @types/nodemailer
npm i -D @types/socket.io
npm i -D @types/passport@0.4.2 @types/passport-jwt

```
> check versions
```bash
# check of nest installed
nest info
```

#### Dependencies
> adding 3rd party modules/libs

```bash
npm i class-validator
npm i class-transformer
npm i dotenv
npm i helmet

npm i -D @types/dotenv
npm i -D @types/helmet
```
 
#### Generate Artifacts
```bash
cd apps/api

# scaffold core module
nest g module core --dry-run
nest g guard auth core --dry-run
nest g exception auth --dry-run

# scaffold shared module
nest g module shared --dry-run
nest g gateway eventbus shared --dry-run  #  /src/shared/eventbus/eventbus.gateway.ts to shared/eventbus.gateway.ts 

# scaffold project module
nest g module project --dry-run
nest g controller project --dry-run
nest g service project project --dry-run
nest g class project --dry-run

# scaffold user module
nest g module user --dry-run
nest g controller profile user --dry-run
nest g service profile user --dry-run
nest g class profile user --dry-run
nest g controller email user --dry-run

# scaffold email module
nest g module email --dry-run
nest g service email email --dry-run

# scaffold auth module
nest g module auth  --dry-run
nest g service auth auth --dry-run 
nest g controller auth  --dry-run 
nest g class user auth --dry-run # move ../ and rename as user.entity.ts

# scaffold chat module
nest g module chat  --dry-run
nest g service chat chat --dry-run 
nest g controller chat  --dry-run 
nest g gateway chat --dry-run 

# scaffold chat module
nest g module notifications --dry-run
nest g controller notifications --dry-run
nest g service notifications notifications --dry-run
nest g class notification notifications --dry-run
```


### Ref

* Awesome Nest
  * https://github.com/juliandavidmr/awesome-nest
* ChatBot
  * https://github.com/adrien2p/nestjs-dialogflow
* https://github.com/beeman/nest-angular-nx
* https://github.com/cgatian/customer-portal
* http://blog.exceptionfound.com/index.php/2018/06/07/nestjs-basic-auth-and-sessions/
