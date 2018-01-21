DIY Playbook
============

Do-it-yourself step-by-step instructions to create this project structure from scratch.


### Prerequisites  
| Software                      | Version  | Optional |  
|-------------------------------|----------|----------| 
| Node                          | v9.4.0   |          | 
| Angular CLI                   | v1.6.5   |          | 
| @nrwl/schematics              | v0.6.15  |          | 


### Install Prerequisites
```bash
# install or Update Node with brew or NVM
brew update
brew install node
#brew upgrade node
```

#### Install Global Packages
```bash
npm install -g @nrwl/schematics
npm install -g @angular/cli
# temp workaround
npm un -g @angular-devkit/core @angular-devkit/schematics @schematics/angular @nrwl/schematics @angular/cli
npm i -g @angular-devkit/core
npm i -g @angular-devkit/schematics
npm i -g @schematics/angular
npm i -g @nrwl/schematics
npm i -g @angular/cli

# verify globally installed packages
npm list -g --depth=0
```

### Scaffold Project
> steps below are for setting up a new project from the scratch.

#### Create Workspace
```bash
# create-nx-workspace nx-starter-kit
ng new nx-starter-kit --collection=@nrwl/schematics
# temp workaround
cd nx-starter-kit
npm i -D @angular-devkit/core
```

#### Dependencies
> adding 3rd party modules/libs
```bash
cd nx-starter-kit
npm i @angular/flex-layout
npm i @angular/material @angular/cdk
npm i hammerjs
npm i web-animations-js
npm i @swimlane/ngx-charts
npm i @swimlane/ngx-datatable

npm i -D loaders.css

npm i angular-in-memory-web-api
#  temp workaround
npm i -D @angular/http
```

#### Generate Artifacts
> Add  `--dry-run` option to following commands to see which artifacts will be created, without actually creating them.
```bash
# generate default app
ng g app default --routing --style=scss
# add `core` module to `default` app
ng g module core --app=default --module=app
# add `InMemoryDataService` in `core` module
ng g service core/services/InMemoryData --app=default --module=core --spec=false

# add `shared` module under that will encapsulate angular and 3rd party modules, needed for all `Lazy-loaded Feature Modules`  
ng g lib shared
# ng g lib material 
# add flat `material` module in `shared` module dir
ng g module material --app=shared --module=shared --flat

# generate `Lazy-loaded Feature Modules`
ng g lib home      --routing --lazy --parent-module=apps/default/src/app/app.module.ts
ng g lib dashboard --routing --lazy --parent-module=apps/default/src/app/app.module.ts


ng g component components/header --app=home
ng g component components/footer --app=home
ng g component containers/landing --app=home


ng g component components/header --app=dashboard 
ng g component components/footer --app=dashboard
ng g component containers/accounts --app=dashboard
```
