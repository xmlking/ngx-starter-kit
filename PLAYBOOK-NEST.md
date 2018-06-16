DIY NestJS Playbook
===================


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

cd ngx-starter-kit
npm i @nestjs/core @nestjs/common 
npm i @nestjs/microservices @nestjs/websockets @nestjs/testing @nestjs/typeorm typeorm
npm i -D @nestjs/schematics
npm i -D rimraf nodemon tsconfig-paths ts-loader
npm i -D jest ts-jest @types/jest supertest @types/supertest
npm i -D webpack-cli webpack-node-externals
```
> check versions
```bash
nest info
```

#### Dependencies
> adding 3rd party modules/libs

```bash
cd ngx-starter-kit

```
 
#### Generate Artifacts
```bash
nest generate service users
nest g s users
```


### Ref

* https://github.com/beeman/nest-angular-nx
* https://github.com/cgatian/customer-portal
