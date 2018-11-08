DIY Playbook
============

Do-it-yourself step-by-step instructions to create this project structure from scratch.


### Prerequisites  
> you need following tools. versions listed here are minimal versions tested.

| Software                      | Version  | Optional |  
|-------------------------------|----------|----------| 
| Node                          | v10.11.0 |          | 
| NPM                           | v6.4.0   |          |
| Angular CLI                   | v7.0.0   |          |
| @nrwl/schematics              | v7.0.0   |          |
| @nestjs/cli                   | v5.5.0   |          |

### Install Prerequisites
```bash
# install or Update Node with brew or NVM
brew update
brew install node
#brew upgrade node
# upgrade npm to at least 6.x.x
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
npm remove -g @angular/cli
npm remove -g @nrwl/schematics
npm remove -g @nestjs/cli
npm remove -g semantic-release-cli
npm remove -g commitizen

npm install -g @angular/cli
npm install -g @nrwl/schematics
npm install -g @nestjs/cli
npm install -g semantic-release-cli
npm install -g commitizen

# verify globally installed packages
npm list -g --depth=0
# find out which packages need to be updated
npm outdated -g --depth=0
# set scss as default css processor
ng config -g schematics.@nrwl/schematics:component.styleext scss
ng config -g cli.packageManager npm
# set jest as default TestRunner
ng config -g schematics.@nrwl/schematics:library.unitTestRunner jest
# check your global defaults
more cat ~/.angular-config.json
# show dependency tree for specified package.
npm ls jasmine-marbles
```

### Scaffold Project
> steps below are for setting up a new project from the scratch.

for nx help `npm run help`

#### Create Workspace
```bash
# create workspace Ref: https://nrwl.io/nx/guide-nx-workspace
create-nx-workspace  ngx-starter-kit --prefix=ngx --npm-scope=xmlking --package-manager=npm
# or
ng new ngx-starter-kit --collection=@nrwl/schematics --prefix=ngx --npm-scope=xmlking --package-manager=npm --verbose
# or if you want *bazel* builds instead of *webpack*
ng new ngx-starter-kit --collection=@nrwl/schematics --prefix=ngx --npm-scope=xmlking --package-manager=npm --bazel  --verbose
cd ngx-starter-kit

> remove all ngrx NPM pagages from package.json

# setup your workspace to run tests with jest.
ng generate jest
# Ref: https://nrwl.io/nx/unit-testing-with-jest
# you may have to manually remove karma files (karma.conf.js) and dependencies from package.json

# make sure we are up-to-date
ng update
# and update as suggested. e.g., 
ng update @nrwl/schematics
ng update --all
# also run `npm outdated` and update versions in package.json then run `npm install`

# generate webapp app
ng g app webapp --routing --style=scss --prefix=ngx --unit-test-runner=jest --e2e-test-runner=cypress --tags=app-module --dry-run
# or with ivy renderer
ng g app webapp --routing --style=scss --prefix=ngx --unit-test-runner=jest --e2e-test-runner=cypress --tags=app-module --experimental-ivy --dry-run

# generate api app with nestjs
ng g node-app api --framework=express --unit-test-runner=jest --tags=api-module --dry-run
# generate backend app with express
ng g node-app backend --framework=express --unit-test-runner=jest --tags=api-module --dry-run
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

# Add NGXS
ng add @ngxs/schematics
# or add NGXS manually 
npm i @ngxs/devtools-plugin @ngxs/{store,router-plugin,form-plugin,devtools-plugin}
npm i -D @ngxs/schematics

# Add formly
ng add @ngx-formly/schematics --ui-theme=material

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

# Add nestjs 
npm i  @nestjs/{common,core,microservices,swagger,websockets,typeorm,passport,elasticsearch}
# tslint rules
npm i -D @nestjs/testing

# add lite-server to test PWA locally
npm i -D lite-server

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

# Do you want to use tslint and prettier without conflicts?
npm i -D tslint-config-prettier
# to check any conflects
npx tslint-config-prettier-check ./tslint.json

# install testCafe for e2e testing and remove protractor
npm i -D testcafe testcafe-angular-selectors testcafe-live

# for CI/CD automation and release
# first time semantic-release setup
semantic-release-cli setup

npm i -D semantic-release @semantic-release/{changelog,git,github,npm}
npm i -D commitizen cz-conventional-changelog 
npm i -D @commitlint/{config-conventional,cli} 
npm i -D husky 
npm i -D lint-staged
```

> update 3rd party modules/schematics
```bash
ng update @angular/core
ng update @angular/cli
ng update @angular/core
ng update @angular/material --force
ng update @angular/pwa
ng update @ngx-formly/schematics --ui-theme=material
ng update @nrwl/schematics --force
```

#### Generate Artifacts
> Add  `--dry-run` option to following commands to see which artifacts will be created, without actually creating them.
```bash

# generate `Lazy-loaded Feature Modules`
ng g lib home           --routing --lazy --prefix=ngx --parent-module=apps/webapp/src/app/app.module.ts             --unit-test-runner=jest  --tags=layout,entry-module
ng g lib dashboard      --routing --lazy --prefix=ngx --parent-module=apps/webapp/src/app/app.module.ts             --unit-test-runner=jest  --tags=layout,entry-module
ng g lib NotFound       --routing --lazy --prefix=ngx --parent-module=apps/webapp/src/app/app.module.ts             --unit-test-runner=jest --tags=entry-module
ng g lib experiments    --routing --lazy --prefix=ngx --parent-module=libs/dashboard/src/lib/dashboard.module.ts    --unit-test-runner=jest --tags=child-module
ng g lib widgets        --routing --lazy --prefix=ngx --parent-module=libs/dashboard/src/lib/dashboard.module.ts    --unit-test-runner=jest --tags=child-module
ng g lib grid           --routing --lazy --prefix=ngx --parent-module=libs/dashboard/src/lib/dashboard.module.ts    --unit-test-runner=jest --tags=child-module

ng g lib animations --module false -tags=utils --unit-test-runner=jest --dry-run 
ng g lib Tree --module false  --publishable=true --tags=utils --unit-test-runner=jest --dry-run
ng g lib utils --module false --tags=utils --unit-test-runner=jest --dry-run
# system wide models
ng g lib models --module false --tags=utils --unit-test-runner=jest --dry-run

# add `core` module which will be only inported into root/app module.
ng g lib core --prefix=ngx --tags=core-module --unit-test-runner=jest --dry-run
# add  global services for `core` Module
ng g service services/InMemoryData   --project=core   --spec=false --dry-run
ng g service services/PageTitle      --project=core   --dry-run
ng g service services/ServiceWorker  --project=core   --dry-run
ng g service services/MediaQuery     --project=core   --dry-run
ng g service services/DeepLink       --project=core   --dry-run
ng g service services/Feature        --project=core   --dry-run

# `material` module to encapulate material libs which is impoted into any `Lazy-loaded Feature Modules` that need material components 
ng g lib material --spec=false --tags=shared-module --unit-test-runner=jest --dry-run

# add `shared` module which will encapsulate angular and 3rd party modules, needed for all `Lazy-loaded Feature Modules`  
ng g lib shared --prefix=ngx --tags=shared-module --unit-test-runner=jest 
# generate containers, components for `shared` Module
ng g service containers/entity/entity --project=shared
ng g directive directives/min  --project=shared  --export=true
ng g directive components/ClickOutside  --project=shared  --export=true
ng g component components/entityTable --project=shared  --export=true
ng g component containers/entity --project=shared  --skip-import
ng g component containers/entityForm  --project=shared  --skip-import

# generate containers for `NotFound` Module
ng g component containers/NotFound --project=not-found --dry-run


### generate `Reusable lib Modules`

# generate components for `AppConfirm` Module
ng g lib AppConfirm  --prefix=ngx --tags=public-module --publishable=true --unit-test-runner=jest --dry-run
ng g component AppConfirm --project=app-confirm  --flat  --dry-run
ng g service AppConfirm --project=app-confirm --spec=false --dry-run

# generate components for `Draggable` Module
ng g lib Draggable --prefix=ngx --tags=public-module --publishable=true --unit-test-runner=jest
ng g directive directives/Draggable --project=draggable --export=true --dry-run

# generate components for `Breadcrumbs` Module
ng g lib Breadcrumbs --prefix=ngx --tags=public-module --publishable=true --unit-test-runner=jest
ng g component breadcrumbs --project=breadcrumbs --flat --dry-run
ng g service  breadcrumbs --project=breadcrumbs --dry-run

# generate components for `ScrollToTop` Module
ng g lib ScrollToTop --prefix=ngx --tags=public-module --publishable=true --unit-test-runner=jest
ng g component ScrollToTop --project=scroll-to-top --flat --dry-run

ng g lib scrollbar --prefix=ngx --tags=public-module --publishable=true


# generate components for `ContextMenu` Module
ng g lib ContextMenu --prefix=ngx --tags=public-module --publishable=true --unit-test-runner=jest
ng g component ContextMenu --project=context-menu --flat --dry-run
ng g directive ContextMenuTrigger --project=context-menu --flat --dry-run

# generate components, services for `ThemePicker` Module
ng g lib ThemePicker --prefix=ngx --tags=public-module --publishable=true --unit-test-runner=jest
ng g component ThemePicker --project=theme-picker --flat --dry-run
ng g service  ThemeStorage --project=theme-picker --dry-run
ng g service  StyleManager --project=theme-picker --dry-run

# generate components for `Notifications` Module
ng g lib Notifications --prefix=ngx --tags=public-module --publishable=true --unit-test-runner=jest --dry-run
ng g component notifications --project=notifications --flat --dry-run
ng g class    notification --type=model --project=notifications --dry-run
ng g service  notifications --project=notifications --dry-run

# generate components for `Quickpanel` Module
ng g lib Quickpanel1 --prefix=ngx --tags=private-module --unit-test-runner=jest
ng g component Quickpanel --project=quickpanel --flat --dry-run

# generate components for `LoadingOverlay` Module
ng g lib LoadingOverlay --prefix=ngx --tags=public-module --publishable=true --unit-test-runner=jest
ng g component LoadingOverlay --project=loading-overlay --flat --dry-run

# generate components for `svgViewer` Module
ng g lib svgViewer --prefix=ngx --tags=public-module --publishable=true --unit-test-runner=jest
ng g component svgViewer --project=svg-viewer --flat --dry-run 

# generate components for `led` Module
ng g lib led --prefix=ngx --tags=public-module --publishable=true
ng g component led --project=led --flat --dry-run 

# generate components for `chatBox` Module
ng g lib chatBox --prefix=ngx --tags=public-module --publishable=true --unit-test-runner=jest --dry-run 
ng g component chatBox --project=chat-box --flat --dry-run 
ng g component components/typingIndicator --project=chat-box --dry-run 
ng g component components/chatCard --project=chat-box --dry-run 
ng g component components/TextToSpeechPreferences  --project=chat-box --dry-run
ng g service services/nlp --project=chat-box --dry-run 
ng g service services/SpeechToText --project=chat-box --dry-run 
ng g service services/TextToSpeech --project=chat-box --dry-run 
ng g service services/chat --project=chat-box --dry-run 

# generate components for `socketioPlugin` Module
ng g lib socketioPlugin --prefix=ngx --tags=public-module  --publishable=true --spec=false --unit-test-runner=jest --dry-run
ng g service socketioSubject --project=socketio-plugin --dry-run 

# generate components for `openTracing` Module
ng g lib openTracing --prefix=ngx --tags=public-module  --publishable=true --spec=false --unit-test-runner=jest --dry-run
ng g service services/ZipkinTracing --project=open-tracing --dry-run
ng g interceptor interceptors/tracing  --project=open-tracing --dry-run

# generate components for `jsonDiff` Module
ng g lib jsonDiff --prefix=ngx --tags=public-module --publishable=true --unit-test-runner=jest
ng g component jsonDiff --project=json-diff --flat --dry-run 
ng g component jsonDiffTree --project=json-diff --flat --dry-run 

# generate components for `clap` Module
ng g lib clap  --prefix=ngx --tags=public-module --spec=false --publishable=true --unit-test-runner=jest
ng g component clap --project=clap  -s  -t --spec=false --export --flat --dry-run 
ng g component components/counterBubble --project=clap  -s  -t --spec=false --flat  --dry-run 
ng g component components/totalCounter --project=clap  -s  -t --spec=false --flat  --dry-run 
ng g component components/fab --project=clap  -s  -t --spec=false --flat  --dry-run 

# generate components for `ngx-utils` Module
ng g lib ngxUtils  --prefix=ngx --tags=public-module,utils --module false --publishable=true --unit-test-runner=jest
ng g module pipes/truncate --project=ngx-utils --spec=false --dry-run
ng g pipe pipes/truncate/Characters --project=ngx-utils --module=truncate --export --dry-run
ng g pipe pipes/truncate/Words --project=ngx-utils --module=truncate --export --dry-run
ng g module pipes/helper --project=ngx-utils --spec=false --dry-run
ng g pipe pipes/helper/filter --project=ngx-utils --module=helper --export --dry-run
ng g pipe pipes/helper/groupBy --project=ngx-utils --module=helper --export --dry-run
ng g pipe pipes/helper/safeHtml --project=ngx-utils --module=helper --export --dry-run
ng g module directives/ngLet --project=ngx-utils --spec=false --dry-run
ng g directive directives/ng-let/ngLet  --selector=ngLet --project=ngx-utils --module=ng-let --export --dry-run
ng g module directives/routerLinkMatch --project=ngx-utils --spec=false --dry-run
ng g directive directives/router-link-match/RouterLinkMatch  --selector=routerLinkMatch --project=ngx-utils --module=router-link-match --export --dry-run


# generate components for `toolbar` Module
ng g lib toolbar --prefix=ngx --tags=private-module --unit-test-runner=jest --dry-run 
ng g component toolbar --project=toolbar --flat --dry-run 
ng g component components/search --project=toolbar  --dry-run 
ng g component components/searchBar --project=toolbar
ng g component components/UserMenu --project=toolbar
ng g component components/FullscreenToggle --project=toolbar --dry-run
ng g component components/SidenavMobileToggle --project=toolbar --dry-run
ng g component components/QuickpanelToggle --project=toolbar --dry-run

# generate components for `sidenav` Module
ng g lib sidenav --prefix=ngx --tags=private-module --unit-test-runner=jest --dry-run 
ng g component sidenav --project=sidenav --flat --dry-run 
ng g component components/sidenavItem --project=sidenav  --dry-run 
ng g directive  IconSidenav --project=sidenav --dry-run 

# generate components for `auth` Module
ng g lib auth --prefix=ngx --tags=private-module,core-module --prefix=ngx --style=scss --unit-test-runner=jest --dry-run 
ng g component components/login --project=auth --dry-run
ng g @ngxs/schematics:store --name=auth --spec --project=auth --dry-run

# generate components for `navigator` Module
ng g lib navigator --prefix=ngx --tags=private-module,core-module --unit-test-runner=jest --dry-run 
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
ng g component  containers/AccountsTable --project=grid --dry-run
ng g component  components/AccountDetail --project=grid  --dry-run
ng g component  components/AccountEdit --project=grid  --dry-run
ng g class      models/account --type=model --project=grid  --dry-run
ng g service    services/account --project=grid  --dry-run
ng g component  containers/AccountsGridList --project=grid  --dry-run

# generate containers, components for `experiments` Module
ng g component containers/animations --project=experiments --dry-run
ng g component components/hammerCard --project=experiments --dry-run
ng g directive components/Hammertime/Hammertime --project=experiments --dry-run
ng g component containers/ContextMenu --project=experiments --dry-run
ng g component containers/FileUpload --project=experiments --dry-run
ng g component containers/virtualScroll --project=experiments --dry-run
ng g component containers/StickyTable --project=experiments --dry-run
ng g component containers/clapButton --project=experiments  -s  -t --spec=false  --dry-run
ng g component containers/knobDemo --project=experiments --dry-run
ng g component containers/ledDemo --project=experiments  --dry-run
ng g component containers/ImageComp --project=experiments  --dry-run
ng g component containers/layout --project=experiments --dry-run
ng g component components/card --project=experiments --dry-run


# generate components for `ImageComparison` Module
ng g lib ImageComparison  --prefix=ngx --tags=public-module --spec=false --publishable=true --dry-run
ng g component ImageComparison --project=image-comparison --export --flat --dry-run 
```

#### Workspace Schematics
```bash
# generate workspace-schematic `store`
ng g workspace-schematic store
# run workspace-schematic `store`
# *** always delete ./dist folder when you change schematic implementation ***
npm run workspace-schematic store models/sumoDemo -- --project=grid  --dry-run
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
# 1st terminal - Start the build in (optional) watch mode 
ng build --prod --watch
# 2nd in terminal - Start the static web server. this will use config from bs-config.json
npx lite-server
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


### IntelliJ/WebStorm

Right click on `apps/webapp/src/styles` in project vie --> Make Directory as --> Resources Root.
Right click on `apps/webapp/src` in project vie --> Make Directory as --> Resources Root.
Right click on `docs` in project view --> Make Directory as --> Excluded.
Right click on `dist` in project view --> Make Directory as --> Excluded.
Right click on `coverage` in project view --> Make Directory as --> Excluded.

###  Reference 

* Nx and Angular CLI
  * https://github.com/nrwl/nx/wiki/Nx-and-Angular-CLI
