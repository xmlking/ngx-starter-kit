DIY Playbook
============

Do-it-yourself step-by-step instructions to create this project structure from scratch.


### Prerequisites  
| Software                      | Version  | Optional |  
|-------------------------------|----------|----------| 
| Node                          | v9.9.0   |          | 
| NPM                           | v5.8.0   |          | 
| Angular CLI                   | v6.0.0   |          | 
| @nrwl/schematics              | v0.9.1   |          | 


### Install Prerequisites
```bash
# install or Update Node with brew or NVM
brew update
brew install node
#brew upgrade node
```

#### Install Global Packages
```bash
npm remove -g @nrwl/schematics
npm install -g @nrwl/schematics
npm install -g @angular/cli

# verify globally installed packages
npm list -g --depth=0
# find out which packages need to be updated
npm outdated -g --depth=0
# set scss as default css processor
ng set defaults.styleExt scss
```

### Scaffold Project
> steps below are for setting up a new project from the scratch.

#### Create Workspace
```bash
create-nx-workspace nx-starter-kit
cd nx-starter-kit
npm install
```

#### Dependencies
> adding 3rd party modules/libs
```bash
cd nx-starter-kit
npm i @angular/flex-layout @angular/material @angular/cdk @angular/material-moment-adapter hammerjs web-animations-js  \
ngx-perfect-scrollbar screenfull angular2-moment \
@swimlane/ngx-datatable @swimlane/ngx-charts angular-in-memory-web-api angular-oauth2-oidc 

# install without saving
npm install trianglify --no-save --no-lock

npm i -D loaders.css @types/hammerjs standard-version

#  temp workaround
npm i -D @angular/http

npm i -D ng-packagr
npm i d3
npm i nvd3
npm i -D @types/nvd3
npm i -D @types/d3
```

#### Generate Artifacts
> Add  `--dry-run` option to following commands to see which artifacts will be created, without actually creating them.
```bash
# generate default app
ng g app default --routing --style=scss --service-worker

# add `core` module to `default` app
ng g module core --app=default --module=app
# add shared services for `core` Module
ng g service core/services/InMemoryData --app=default --module=core --spec=false
ng g service core/services/PageTitle/PageTitle --app=default --module=core
ng g service core/services/serviceWorker/serviceWorker --app=default --module=core --dry-run

# generate `Lazy-loaded Feature Modules`
ng g lib home           --routing --lazy --parent-module=apps/default/src/app/app.module.ts       --tags=layout,entry-module
ng g lib dashboard      --routing --lazy --parent-module=apps/default/src/app/app.module.ts       --tags=layout,entry-module
ng g lib NotFound       --routing --lazy --parent-module=apps/default/src/app/app.module.ts       --tags=entry-module
ng g lib experiments    --routing --lazy --parent-module=libs/dashboard/src/dashboard.module.ts   --tags=child-module
ng g lib widgets        --routing --lazy --parent-module=libs/dashboard/src/dashboard.module.ts   --tags=child-module
ng g lib crud           --routing --lazy --parent-module=libs/dashboard/src/dashboard.module.ts   --tags=child-module


ng g lib material --spec=false --tags=shared-module --dry-run
ng g lib animations --nomodule -tags=utils --dry-run 
ng g lib Tree --nomodule --tags=utils --dry-run

ng g lib shared --tags=shared-module # add `shared` module which will encapsulate angular and 3rd party modules, needed for all `Lazy-loaded Feature Modules`  

# generate containers, components for `shared` Module
ng g service services/entity/entity --app=shared --module=shared
ng g directive directives/min  --app=shared --module=shared --export=true
ng g component components/entityTable --app=shared --module=shared --export=true
ng g component containers/entity --app=shared --module=shared --skip-import
ng g component containers/entityForm  --app=shared --module=shared --skip-import

# generate containers for `NotFound` Module
ng g component containers/NotFound --app=not-found


### generate `Reusable lib Modules`

# generate components for `AppConfirm` Module
ng g lib AppConfirm  --tags=public-module --dry-run
ng g component AppConfirm --app=app-confirm  --flat  --dry-run
ng g service AppConfirm --app=app-confirm --module=app-confirm --spec=false --dry-run

# generate components for `fullscreen` Module
ng g lib Fullscreen --tags=public-module --dry-run
ng g component fullscreen --app=fullscreen --flat --dry-run

# generate components for `Breadcrumbs` Module
ng g lib Breadcrumbs --tags=public-module
ng g component breadcrumbs --app=breadcrumbs --flat --dry-run
ng g service  breadcrumbs --app=breadcrumbs --module=breadcrumbs --dry-run

# generate components for `ScrollToTop` Module
ng g lib ScrollToTop --tags=public-module
ng g component ScrollToTop --app=scroll-to-top --flat --dry-run

ng g lib scrollbar --tags=public-module


# generate components for `ContextMenu` Module
ng g lib ContextMenu --tags=public-module
ng g component ContextMenu --app=context-menu --flat --dry-run
ng g directive ContextMenuTrigger --app=context-menu --flat --dry-run


# generate components, services for `ThemePicker` Module
ng g lib ThemePicker --tags=public-module  
ng g component ThemePicker --app=theme-picker --flat --dry-run
ng g service  ThemeStorage --app=theme-picker --module=theme-picker --dry-run
ng g service  StyleManager --app=theme-picker --module=theme-picker --dry-run

# generate components for `Quickpanel` Module
ng g lib Quickpanel --tags=private-module
ng g component Quickpanel --app=quickpanel --flat --dry-run

# generate components for `NxPipes` Module
ng g lib NxPipes --tags=public-module
ng g pipe truncate/Characters --app=nx-pipes   --dry-run
ng g pipe truncate/Words --app=nx-pipes   --dry-run

# generate components for `LoadingOverlay` Module
ng g lib LoadingOverlay --tags=public-module
ng g component LoadingOverlay --app=loading-overlay --flat --dry-run

# generate components for `svgViewer` Module
ng g lib svgViewer --tags=public-module
ng g component svgViewer --app=svg-viewer --flat --dry-run 

# generate components for `jsonDiff` Module
ng g lib jsonDiff --tags=public-module
ng g component jsonDiff --app=json-diff --flat --dry-run 
ng g component jsonDiffTree --app=json-diff --flat --dry-run 

# generate components for `toolbar` Module
ng g lib toolbar --tags=private-module --dry-run 
ng g component toolbar --app=toolbar --flat --dry-run 
ng g component components/search --app=toolbar  --dry-run 
ng g component components/searchBar --app=toolbar
ng g component components/Notifications --app=toolbar
ng g component components/UserMenu --app=toolbar
ng g directive components/ClickOutside/ClickOutside  --app=toolbar --dry-run 

# generate components for `sidenav` Module
ng g lib sidenav --tags=private-module --dry-run 
ng g component sidenav --app=sidenav --flat --dry-run 
ng g component components/sidenavItem --app=sidenav  --dry-run 
ng g directive  IconSidenav --app=sidenav --module=sidenav --dry-run 

# generate components for `auth` Module
ng g lib auth --tags=private-module,core-module --dry-run 
ng g component components/login --app=auth

# generate components for `auth` Module
ng g lib navigator --tags=private-module,core-module --dry-run 
ng g service services/menu --app=navigator --module=navigator --dry-run 
ng g class models/menuItem --app=navigator --type=model  --dry-run
ng g class state/menu --app=navigator --type=state  --dry-run

# generate containers, components for `home` Module
ng g component components/header --app=home
ng g component containers/homeLayout --app=home
ng g component containers/landing --app=home
ng g component containers/blog --app=home
ng g component containers/about --app=home

# generate containers, components for `dashboard` Module
ng g component components/rainbow --app=dashboard --dry-run
ng g component containers/dashboardLayout --app=dashboard --dry-run
ng g component containers/overview --app=dashboard --dry-run


# generate containers, components for `widgets` Module
ng g component containers/wizdash --app=widgets --dry-run

# generate containers, components for `crud` Module
ng g component containers/accounts --app=crud --module=crud --dry-run

# generate containers, components for `experiments` Module
ng g component containers/experimentsLayout --app=experiments --dry-run
ng g component containers/experiments --app=experiments --dry-run
ng g component components/hammerCard --app=experiments --dry-run
ng g directive components/Hammertime/Hammertime --app=experiments --dry-run



# scaffolding ngrx for root module i.e., app.module.ts
ng g ngrx app --app=default --module=apps/default/src/app/app.module.ts  --only-empty-root
# add `account` state for `dashboard` Feature Module
ng g ngrx account --directory=state/account --app=dashboard --module=libs/dashboard/src/dashboard.module.ts
```

### Install
```bash
npm install
cp .env.example .env
```
### Test
```bash
ng test --browser=ChromeHeadless
```

### Build
```bash
# build project 
ng build --app=default --prod -oh=media
```
### Run
```bash
# dev run
ng s --extract-css --preserve-symlinks  -o
# run mock mode
ng s -e mock --extract-css --preserve-symlinks
# use proxy (if you have CORS disabled backend API)
ng s -e mock --extract-css --preserve-symlinks --proxy-config proxy.conf.js
# to bind to host IP, to demo from laptop
ng s --host 
# ES2015 support: Set tsconfig.json target value as "es2015" and  use --aot 
ng s -e mock --extract-css --preserve-symlinks --aot -o
# run prod mode
ng s -e prod

# build and run web
docker-compose up --build web
# run web
docker-compose up web
```

### Serve from dist
> use this to test service-workers
```bash
# 1st terminal - Start the build
ng build --app=default -oh=media --watch
# 2nd terminal - Start the web server (start server on port 4200)
npx lite-server --baseDir="dist/apps/default"
```

### Docs
> generate docs
```bash
# generate docs
npx compodoc -p tsconfig.json -d docs
# serve docs
npx compodoc -s -d docs
```

### Deploy
> deploy demo to gh-pages
```bash
# build for gh-pages
ng build --app=default --prod -oh=media -e mock --base-href /is360-nx/
# push gh-pages
npx ngh --dir dist/apps/default
```

### Release
```bash
npx standard-version
"release": "standard-version && git push — follow-tags origin master && npm publish"
```

### Production build and deployment
The prod image serves the minified app (sources compiles with a minimal set of dependencies), via an Nginx server. 
It is self-contained, and can therefore be pushed to a Docker registry to be deployed somewhere else easily.

To start the container, use:
```bash
$ docker-compose up web   # optional: --build, see below
```

Now open your browser at http://localhost:80
