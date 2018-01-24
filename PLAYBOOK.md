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
# set scss as default css processor
ng set defaults.styleExt scss
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
# add flat `material` module in `shared` module dir
# ng g lib material 
ng g module material --app=shared --module=shared --flat
ng g service services/entity/entity --app=shared --module=shared
ng g directive directives/min  --app=shared --module=shared --export=true
ng g component components/entityTable --app=shared --module=shared --export=true
ng g component containers/entity --app=shared --module=shared --skip-import
ng g component containers/entityForm  --app=shared --module=shared --skip-import

# generate `Lazy-loaded Feature Modules`
ng g lib home      --routing --lazy --parent-module=apps/default/src/app/app.module.ts
ng g lib dashboard --routing --lazy --parent-module=apps/default/src/app/app.module.ts
ng g lib PageNotFound --routing --lazy --parent-module=apps/default/src/app/app.module.ts
ng g lib ThemePicker 

# generate PageNotFoundComponents for `PageNotFound` Module
ng g component containers/PageNotFound --app=page-not-found

# generate containers, components for `dashboard` Module
ng g component components/header --app=home
ng g component components/footer --app=home
ng g component containers/landing --app=home

# generate containers, components, services for `dashboard` Module
ng g component components/header --app=dashboard 
ng g component components/footer --app=dashboard
ng g component containers/accounts --app=dashboard
ng g service services/account/account --app=dashboard --module=dashboard

# generate artifacts 
ng g component components/ThemePicker --app=theme-picker --dry-run
# ng g service services/ThemeStorage/ThemeStorage --app=theme-picker --module=theme-picker  --dry-run
ng g service services/ThemeStorage/ThemeStorage --app=theme-picker   --dry-run
ng g service services/styleManager/StyleManager --app=theme-picker   --dry-run

# scaffolding ngrx for root module i.e., app.module.ts
ng g ngrx app --app=default --module=apps/default/src/app/app.module.ts  --only-empty-root
# add `account` state for `dashboard` Feature Module
ng g ngrx account --directory=state/account --app=dashboard --module=libs/dashboard/src/dashboard.module.ts
```

### Build
```bash
# build themes
npx webpack --config tools/webpack.config.js
npm run build-themes
# build project 
ng build
```
### Run
```bash
ng serve --e=demo
```
