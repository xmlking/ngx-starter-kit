DIY NestJS Playbook
===================

creating NestJS project and generate nest artifacts with-in monorepo.

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

cd api
npm i @nestjs/core @nestjs/common 
npm i @nestjs/microservices @nestjs/websockets @nestjs/testing @nestjs/typeorm typeorm  mongodb
npm i @nestjs/swagger 
npm i fastify fastify-formbody

npm i -D @nestjs/schematics
npm i -D rimraf nodemon tsconfig-paths ts-loader
npm i -D jest ts-jest @types/jest supertest @types/supertest
npm i -D webpack-cli webpack-node-externals
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
cd apps/api/src
# scaffold tenant module
nest generate module account --dry-run
nest generate controller account --dry-run
nest generate service account account --dry-run
nest generate class account --dry-run

# scaffold shared module
nest g module shared --dry-run
nest g guard auth shared --dry-run
nest g exception auth --dry-run
```


### Ref

* https://github.com/beeman/nest-angular-nx
* https://github.com/cgatian/customer-portal
