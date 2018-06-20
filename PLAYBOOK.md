DIY Playbook
============

Do-it-yourself step-by-step instructions to create this project structure from scratch.


### Prerequisites  
> you need following tools. versions listed here are minimal versions tested.

| Software                      | Version  | Optional |  
|-------------------------------|----------|----------| 
| Node                          | v10.4.0  |          | 
| NPM                           | v6.1.0   |          |
| Angular CLI                   | v6.0.8   |          |
| @nrwl/schematics              | v6.1.0   |          |


### Install Prerequisites
```bash
# install or Update Node with brew or NVM
brew update
brew install node
#brew upgrade node
# upgrade npm to at least 6.1.0
npm install -g npm
```

Install [redux-devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) for Chrome (optional)

### Install Kubernetes (optional)
follow instructions [here](https://gist.github.com/xmlking/62ab53753c0f0f5247d0e174b31dab21) to install kubernetes toolchain:
1. Docker for Mac (edge version)
2. Helm (optional)
3. kubectx (optional)

#### Install Bazel (optional)
For Mac, install via Brew. [Instructions](https://docs.bazel.build/versions/master/install-os-x.html#install-on-mac-os-x-homebrew)
```bash
brew install bazel
bazel version
# you can upgrade to a newer version of Bazel with:
brew upgrade bazel

# if needed 
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
sudo xcodebuild -license
bazel clean --expunge
```

#### Install Global Packages
```bash
npm remove -g @nrwl/schematics
npm remove -g @angular/cli
npm remove -g @nestjs/cli
# you need at least 6.0.4
npm install -g @nrwl/schematics
npm install -g @angular/cli
npm install -g @nestjs/cli

# verify globally installed packages
npm list -g --depth=0
# find out which packages need to be updated
npm outdated -g --depth=0
# set scss as default css processor
ng config -g defaults.styleExt=scss
# show dependency tree for specified package.
npm ls jasmine-marbles
```

### Scaffold Project
> steps below are for setting up a new project from the scratch.

for nx help `npm run help`

#### Create Workspace
```bash
# create workspace Ref: https://nrwl.io/nx/guide-nx-workspace
create-nx-workspace  ngx-starter-kit --prefix=ngx
# or
ng new ngx-starter-kit --collection=@nrwl/schematics --prefix=ngx --verbose
# or if you want *bazel* builds instead of *webpack*
ng new ngx-starter-kit --collection=@nrwl/schematics --prefix=ngx --bazel  --verbose
cd ngx-starter-kit

> remove all ngrx NPM pagages from package.json

# make sure we are up-to-date
ng update
# and update as suggested. e.g., 
ng update @nrwl/schematics
ng update --all
# also run `npm outdated` and update versions in package.json then run `npm install`

# generate webapp app
ng g app webapp --routing --style=scss --prefix=ngx --tags=app-module
```

#### Dependencies
> adding 3rd party modules/libs
```bash
cd ngx-starter-kit

# Add PWA
ng add @angular/pwa --project webapp

# Add Material 
# Ref: https://material.angular.io/guide/schematics
# Ref: https://material.angular.io/guide/getting-started
ng add @angular/material
npm i hammerjs
npm i -D @types/hammerjs
npm i moment ngx-moment
npm i @angular/material-moment-adapter 

# Add Flex-Layout 
npm i @angular/flex-layout@next
# Add in-memory-web-api
npm i angular-in-memory-web-api
# Add oauth2-oidc 
npm i angular-oauth2-oidc 

# Add ngxs
npm i @ngxs/devtools-plugin @ngxs/store @ngxs/router-plugin
    
# Add Filepond
npm i ngx-filepond \
filepond-plugin-file-encode \
filepond-plugin-file-validate-size \
filepond-plugin-file-validate-type \
filepond-plugin-image-crop \
filepond-plugin-image-preview

# Add Socket.io
npm i socket.io-client 
npm i -D @types/socket.io-client

# tslint rules
npm i -D rxjs-tslint-rules

# Add miscellaneous
npm i ngx-perfect-scrollbar smooth-scrollbar ngx-page-scroll screenfull immutable



# Add Dev Tools
npm i -D standard-version
npm i -D angular-cli-ghpages
npm i -D @compodoc/compodoc

npm i -D loaders.css
npm i -D api-ai-javascript

#  temp workaround
npm i -D @angular/http

# install without saving
npm install trianglify --no-save --no-lock
```

#### Generate Artifacts
> Add  `--dry-run` option to following commands to see which artifacts will be created, without actually creating them.
```bash
# add `core` module to `webapp` app
ng g module core --app=webapp --module=app --spec=false  --dry-run
# add shared services for `core` Module
ng g service core/services/InMemoryData --app=webapp --module=core --spec=false --dry-run
ng g service core/services/PageTitle --app=webapp --module=core --dry-run
ng g service core/services/ServiceWorker --app=webapp --module=core --dry-run
ng g service core/services/MediaQuery --app=webapp --module=core --dry-run

# generate `Lazy-loaded Feature Modules`
ng g lib home           --routing --lazy --prefix=ngx --parent-module=apps/webapp/src/app/app.module.ts       --tags=layout,entry-module
ng g lib dashboard      --routing --lazy --prefix=ngx --parent-module=apps/webapp/src/app/app.module.ts       --tags=layout,entry-module
ng g lib NotFound       --routing --lazy --prefix=ngx --parent-module=apps/webapp/src/app/app.module.ts       --tags=entry-module
ng g lib experiments    --routing --lazy --prefix=ngx --parent-module=libs/dashboard/src/lib/dashboard.module.ts   --tags=child-module
ng g lib widgets        --routing --lazy --prefix=ngx --parent-module=libs/dashboard/src/lib/dashboard.module.ts   --tags=child-module
ng g lib grid           --routing --lazy --prefix=ngx --parent-module=libs/dashboard/src/lib/dashboard.module.ts   --tags=child-module


ng g lib material --spec=false --tags=shared-module --dry-run
ng g lib animations --nomodule -tags=utils --dry-run 
ng g lib Tree --nomodule  --publishable=true --tags=utils --dry-run
ng g lib utils --nomodule --tags=utils --dry-run

# add `shared` module which will encapsulate angular and 3rd party modules, needed for all `Lazy-loaded Feature Modules`  
ng g lib shared --prefix=ngx --tags=shared-module 

# generate containers, components for `shared` Module
ng g service containers/entity/entity --project=shared --module=shared
ng g directive directives/min  --project=shared --module=shared --export=true
ng g component components/entityTable --project=shared --module=shared --export=true
ng g component containers/entity --project=shared --module=shared --skip-import
ng g component containers/entityForm  --project=shared --module=shared --skip-import

# generate containers for `NotFound` Module
ng g component containers/NotFound --project=not-found --dry-run


### generate `Reusable lib Modules`

# generate components for `AppConfirm` Module
ng g lib AppConfirm  --prefix=ngx --tags=public-module --publishable=true --dry-run
ng g component AppConfirm --project=app-confirm  --flat  --dry-run
ng g service AppConfirm --project=app-confirm --module=app-confirm --spec=false --dry-run

# generate components for `Draggable` Module
ng g lib Draggable --prefix=ngx --tags=public-module --publishable=true
ng g directive directives/Draggable --project=draggable --module=draggable --export=true --dry-run

# generate components for `Breadcrumbs` Module
ng g lib Breadcrumbs --prefix=ngx --tags=public-module --publishable=true
ng g component breadcrumbs --project=breadcrumbs --flat --dry-run
ng g service  breadcrumbs --project=breadcrumbs --module=breadcrumbs --dry-run

# generate components for `ScrollToTop` Module
ng g lib ScrollToTop --prefix=ngx --tags=public-module --publishable=true
ng g component ScrollToTop --project=scroll-to-top --flat --dry-run

ng g lib scrollbar --prefix=ngx --tags=public-module --publishable=true


# generate components for `ContextMenu` Module
ng g lib ContextMenu --prefix=ngx --tags=public-module --publishable=true
ng g component ContextMenu --project=context-menu --flat --dry-run
ng g directive ContextMenuTrigger --project=context-menu --flat --dry-run

# generate components, services for `ThemePicker` Module
ng g lib ThemePicker --prefix=ngx --tags=public-module --publishable=true
ng g component ThemePicker --project=theme-picker --flat --dry-run
ng g service  ThemeStorage --project=theme-picker --module=theme-picker --dry-run
ng g service  StyleManager --project=theme-picker --module=theme-picker --dry-run

# generate components for `Quickpanel` Module
ng g lib Quickpanel --prefix=ngx --tags=private-module
ng g component Quickpanel --project=quickpanel --flat --dry-run

# generate components for `NgxPipes` Module
ng g lib NgxPipes --prefix=ngx --tags=public-module --publishable=true
ng g pipe truncate/Characters --project=ngx-pipes   --dry-run
ng g pipe truncate/Words --project=ngx-pipes   --dry-run

# generate components for `LoadingOverlay` Module
ng g lib LoadingOverlay --prefix=ngx --tags=public-module --publishable=true
ng g component LoadingOverlay --project=loading-overlay --flat --dry-run

# generate components for `svgViewer` Module
ng g lib svgViewer --prefix=ngx --tags=public-module --publishable=true
ng g component svgViewer --project=svg-viewer --flat --dry-run 

# generate components for `led` Module
ng g lib led --prefix=ngx --tags=public-module --publishable=true
ng g component led --project=led --flat --dry-run 

# generate components for `deferLoad` Module
ng g lib deferLoad --prefix=ngx --tags=public-module --publishable=true --dry-run 
ng g directive DeferLoad --project=defer-load  --dry-run 

# generate components for `chatBot` Module
ng g lib chatBot --prefix=ngx --tags=public-module --publishable=true --dry-run 
ng g component chatBot --project=chat-bot --flat --dry-run 
ng g component components/typingIndicator --project=chat-bot --dry-run 
ng g component components/chatCard --project=chat-bot --dry-run 

# generate components for `socketioPlugin` Module
ng g lib socketioPlugin --prefix=ngx --tags=public-module  --publishable=true --spec=false --dry-run
ng g service socketioSubject --project=socketio-plugin --dry-run 

# generate components for `openTracing` Module
ng g lib openTracing --prefix=ngx --tags=public-module  --publishable=true --spec=false --dry-run
ng g service services/ZipkinTracing --project=open-tracing --dry-run
ng g interceptor interceptors/tracing  --project=open-tracing --dry-run

# generate components for `jsonDiff` Module
ng g lib jsonDiff --prefix=ngx --tags=public-module --publishable=true
ng g component jsonDiff --project=json-diff --flat --dry-run 
ng g component jsonDiffTree --project=json-diff --flat --dry-run 

# generate components for `toolbar` Module
ng g lib toolbar --prefix=ngx --tags=private-module --dry-run 
ng g component toolbar --project=toolbar --flat --dry-run 
ng g component components/search --project=toolbar  --dry-run 
ng g component components/searchBar --project=toolbar
ng g component components/Notifications --project=toolbar
ng g component components/UserMenu --project=toolbar
ng g directive components/ClickOutside  --project=toolbar --dry-run 
ng g component components/FullscreenToggle --project=toolbar --dry-run
ng g component components/SidenavMobileToggle --project=toolbar --dry-run
ng g component components/QuickpanelToggle --project=toolbar --dry-run

# generate components for `sidenav` Module
ng g lib sidenav --prefix=ngx --tags=private-module --dry-run 
ng g component sidenav --project=sidenav --flat --dry-run 
ng g component components/sidenavItem --project=sidenav  --dry-run 
ng g directive  IconSidenav --project=sidenav --module=sidenav --dry-run 

# generate components for `auth` Module
ng g lib auth --prefix=ngx --tags=private-module,core-module --prefix=ngx --style=scss --dry-run 
ng g component components/login --project=auth --dry-run 

# generate components for `navigator` Module
ng g lib navigator --prefix=ngx --tags=private-module,core-module --dry-run 
ng g service services/menu --project=navigator --dry-run
ng g class models/menuItem --project=navigator --type=model  --dry-run
ng g class state/menu --project=navigator --type=state  --dry-run

# generate containers, components for `home` Module
ng g component components/header --project=home
ng g component containers/homeLayout --project=home
ng g component containers/landing --project=home
ng g component containers/blog --project=home
ng g component containers/about --project=home

# generate containers, components for `dashboard` Module
ng g component components/rainbow --project=dashboard --dry-run
ng g component containers/dashboardLayout --project=dashboard --dry-run
ng g component containers/overview --project=dashboard --dry-run


# generate containers, components for `widgets` Module
ng g component containers/wizdash --project=widgets --dry-run

# generate containers, components for `grid` Module
ng g component  containers/AccountsTable --project=grid --module=grid --dry-run
ng g component  components/Account --project=grid --module=grid --dry-run
ng g class      models/account --type=model --project=grid --module=grid --dry-run
ng g service    services/account --project=grid --module=grid --dry-run
ng g component  containers/AccountsGridList --project=grid --module=grid --dry-run

# generate containers, components for `experiments` Module
ng g component containers/animations --project=experiments --dry-run
ng g component containers/ContextMenu --project=experiments --dry-run
ng g component containers/FileUpload --project=experiments --dry-run
ng g component components/hammerCard --project=experiments --dry-run
ng g directive components/Hammertime/Hammertime --project=experiments --dry-run
ng g component containers/virtualScroll --project=experiments --dry-run
ng g component containers/StickyTable --project=experiments --module=experiments --dry-run
```

### Install
```bash
npm install
cp .env.example .env
```

### Update
```bash
ng update 
ng update @angular/cli
ng update @angular/core
ng update --all 
```

### Run
```bash
# dev run
ng serve
# run mock mode
ng serve -c=mock
# use proxy (if you have CORS disabled backend API)
ng serve -c=mock --proxy-config proxy.conf.js
# to bind to host IP, to demo from laptop
ng s --host 
# ES2015 support: Set tsconfig.json target value as "es2015" and  use --aot 
ng serve -c=mock --aot -o
# run prod mode
ng serve -c=prod

# build and run web
docker-compose up --build web
# run web
docker-compose up web
```

### Serve from dist
> use this to test service-workers
```bash
# 1st terminal - Start the build
ng build --app=webapp -oh=media --watch
# 2nd terminal - Start the web server (start server on port 4200)
npx lite-server --baseDir="dist/apps/webapp"
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
build:mock --base-href /ngx-starter-kit/
# push gh-pages
npx ngh --dir dist/apps/webapp
```

### Release
```bash
npm whoami
npx standard-version
"release": "standard-version && git push — follow-tags origin master && npm publish"
```

### Analyze
> Analyzing bundle size
```bash
npm run bundle-report
 ```

### Check
> check if you on current versions.
```bash
node -v 
npm -v
ng -v
npx nx --version
```

### Production build and deployment
The prod image serves the minified app (sources compiles with a minimal set of dependencies), via an Nginx server. 
It is self-contained, and can therefore be pushed to a Docker registry to be deployed somewhere else easily.

To start the container, use:
```bash
$ docker-compose up web   # optional: --build, see below
```

Now open your browser at http://localhost:80


### IntelliJ

Right click on `apps/webapp/src/styles` in project vie --> Make Directory as --> Resources Root.
Right click on `apps/webapp/src` in project vie --> Make Directory as --> Resources Root.

###  Reference 

* Nx and Angular CLI
  * https://github.com/nrwl/nx/wiki/Nx-and-Angular-CLI
