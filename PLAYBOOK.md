# DIY Playbook

Do-it-yourself step-by-step instructions to create this project structure from scratch.

### Prerequisites

> you need following tools. versions listed here are minimal versions tested.

| Software             | Version  | Optional |
| -------------------- | -------- | -------- |
| Node                 | v11.10.0 |          |
| NPM                  | v6.8.0   |          |
| Angular CLI          | v7.3.0   |          |
| @nrwl/schematics     | v7.5.0   |          |
| @nestjs/cli          | v5.7.1   |          |
| semantic-release-cli | v4.1.0   |          |
| commitizen           | v3.0.5   |          |

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
# set scss as default styleext for ngx-formly
ng config -g schematics@ngx-formly/schematics:component.styleext scss
# check your global defaults
more cat ~/.angular-config.json
# show dependency tree for specified package.
npm ls jasmine-marbles
```

### Scaffold Project

> steps below are for setting up a new project from the scratch.

for nx help `npm run help`

> Explicitly Passing Arguments to Angular CLI

`nx/ng` commands now accept a delimiter to distinguish the end of options for `Nx` and the beginning of options to `Angular CLI` with a (like npm run) according to Guideline 10 of `POSIX.2 utility syntax guidelines`.

`npm run affected -- --target lint --uncommitted --parallel -- --fix`

#### Create Workspace

```bash
# create workspace Ref: https://nrwl.io/nx/guide-nx-workspace
create-nx-workspace  ngx-starter-kit --npm-scope=ngx-starter-kit --package-manager=npm
# or
ng new ngx-starter-kit --collection=@nrwl/schematics --npm-scope=ngx-starter-kit --package-manager=npm --verbose
# or if you want *bazel* builds instead of *webpack*
ng new ngx-starter-kit --collection=@nrwl/schematics --npm-scope=ngx-starter-kit --package-manager=npm --bazel  --verbose
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
ng g app webapp --routing --style=scss --prefix=ngx --unit-test-runner=jest --e2e-test-runner=cypress --tags=app-module -d
# or with ivy renderer
ng g app webapp --routing --style=scss --prefix=ngx --unit-test-runner=jest --e2e-test-runner=cypress --tags=app-module -d -- --experimental-ivy

# NOTE: Remove `"types": []` from apps/webapp/tsconfig.app.json to allow global types.

# generate micro-app `chat-box`
ng g app chatApp --routing --style=scss --prefix=ngx --unit-test-runner=jest --e2e-test-runner=cypress --tags=micro-app-module   -d
ng add ngx-build-plus --project chat-box
ng add @angular/elements --project chat-box ?
npm i @webcomponents/custom-elements ?

# generate api app with nestjs
ng g node-app api --framework=nestjs --unit-test-runner=jest --tags=api-module -d
# generate backend app with express
ng g node-app backend --framework=express --unit-test-runner=jest --tags=api-module -d
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
npm i date-fns@next

# Add Flex-Layout
npm i @angular/flex-layout
# Add in-memory-web-api
npm i angular-in-memory-web-api
# Add oauth2-oidc
~npm i angular-oauth2-oidc~
npm i @xmlking/angular-oauth2-oidc-all

# Add NGXS
ng add @ngxs/schematics # makesure "defaultCollection" is set back to "@nrwl/schematics" in angular.json
# or add NGXS manually
npm i @ngxs/devtools-plugin @ngxs/{store,router-plugin,form-plugin,storage-plugin,devtools-plugin}
npm i -D @ngxs/schematics

npm i @ngxs-labs/immer-adapter
npm i immer

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

# add lite-server to test PWA locally
npm i -D lite-server

# Add miscellaneous
npm i ngx-perfect-scrollbar smooth-scrollbar ngx-page-scroll screenfull

# Add Dev Tools
npm i -D standard-version
npm i -D angular-cli-ghpages
npm i -D @compodoc/compodoc

npm i -D loaders.css
npm i -D api-ai-javascript

# install without saving
npm install trianglify --no-save --no-lock

# Do you want to use tslint and prettier without conflicts?
npm i -D tslint-config-prettier
# to check any conflects
npx tslint-config-prettier-check ./tslint.json

# install cypress for e2e testing and remove protractor
npm i -D cypress @types/jquery

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
ng update
# ng update --next
ng update @angular/core --next
ng update @angular/cli --next
ng update @angular/material --force
ng update @angular/pwa --next
ng update @ngx-formly/schematics --ui-theme=material
ng update @nrwl/schematics --force
```

#### Generate Artifacts

> Add `--dry-run` or `-d` option to following commands to see which artifacts will be created, without actually creating them.

```bash

# generate `Lazy-loaded Feature Modules`
ng g lib home           --routing --lazy --prefix=ngx --parent-module=apps/webapp/src/app/app.module.ts             --unit-test-runner=jest  --tags=layout,entry-module
ng g lib dashboard      --routing --lazy --prefix=ngx --parent-module=apps/webapp/src/app/app.module.ts             --unit-test-runner=jest  --tags=layout,entry-module
ng g lib admin          --routing --lazy --prefix=ngx --parent-module=apps/webapp/src/app/app.module.ts             --unit-test-runner=jest  --tags=layout,entry-module
ng g lib NotFound       --routing --lazy --prefix=ngx --parent-module=apps/webapp/src/app/app.module.ts             --unit-test-runner=jest --tags=entry-module
ng g lib experiments    --routing --lazy --prefix=ngx --parent-module=libs/dashboard/src/lib/dashboard.module.ts    --unit-test-runner=jest --tags=child-module
ng g lib widgets        --routing --lazy --prefix=ngx --parent-module=libs/dashboard/src/lib/dashboard.module.ts    --unit-test-runner=jest --tags=child-module
ng g lib grid           --routing --lazy --prefix=ngx --parent-module=libs/dashboard/src/lib/dashboard.module.ts    --unit-test-runner=jest --tags=child-module

ng g lib animations --module false -tags=utils --unit-test-runner=jest -d
ng g lib Tree --module false  --publishable=true --tags=utils --unit-test-runner=jest -d
ng g lib utils --module false --publishable=true --tags=utils --unit-test-runner=jest -d
# system wide `models` module
ng g lib models --module false --tags=utils --unit-test-runner=jest -d
ng g interface User  --project=models --type=model -d
ng g interface Profile  --project=models --type=model -d
ng g interface Image  --project=models --type=model -d
ng g enum ImageType --project=models --type=enum -d
ng g enum Gender --project=models --type=enum -d
ng g enum AccountSourceType --project=models --type=enum -d


# add `core` module which will be only inported into root/app module.
ng g lib core --tags=core-module --unit-test-runner=jest -d
# add  global services for `core` Module
ng g service services/InMemoryData   --project=core   --skip-tests -d
ng g service services/PageTitle      --project=core   -d
ng g service services/ServiceWorker  --project=core   -d
ng g service services/MediaQuery     --project=core   -d
ng g service services/DeepLink       --project=core   -d
ng g service services/Feature        --project=core   -d
ng g service services/GoogleAnalytics --project=core  -d
ng g service  PushNotification        --project=core  -d
ng g service  services/Profile        --project=core  --skip-tests -d
ng g @ngxs/schematics:state --name=preference --spec=false --project=core --sourceRoot=libs/core/src/lib -d
ng g @ngxs/schematics:state --name=profile --spec=false --project=core --sourceRoot=libs/core/src/lib -d

# add `shared` module which will encapsulate angular and 3rd party modules, needed for all `Lazy-loaded Feature Modules`
ng g lib shared --prefix=ngx --tags=shared-module --unit-test-runner=jest
# generate containers, components for `shared` Module
ng g service containers/entity/entity --project=shared
ng g component components/entityTable --project=shared  --export=true
ng g component containers/entity --project=shared  --skip-import
ng g component containers/entityForm  --project=shared  --skip-import

# generate containers for `NotFound` Module
ng g component containers/NotFound --project=not-found -d


### generate `Reusable lib Modules`

# generate components for `AppConfirm` Module
ng g lib AppConfirm --tags=public-module --publishable=true --unit-test-runner=jest -d
ng g component AppConfirm --project=app-confirm  --flat  -d
ng g service AppConfirm --project=app-confirm --skip-tests -d

# generate components for `Draggable` Module
ng g lib Draggable --tags=public-module --publishable=true --unit-test-runner=jest
ng g directive directives/Draggable --project=draggable --export=true -d

# generate components for `Breadcrumbs` Module
ng g lib Breadcrumbs --tags=public-module --publishable=true --unit-test-runner=jest
ng g component breadcrumbs --project=breadcrumbs --flat -d
ng g service  breadcrumbs --project=breadcrumbs -d

# generate components for `ScrollToTop` Module
ng g lib ScrollToTop --tags=public-module --publishable=true --unit-test-runner=jest
ng g component ScrollToTop --project=scroll-to-top --flat -d

ng g lib scrollbar --tags=public-module --publishable=true

# generate components for `ContextMenu` Module
ng g lib ContextMenu --tags=public-module --publishable=true --unit-test-runner=jest
ng g component ContextMenu --project=context-menu --flat -d
ng g directive ContextMenuTrigger --project=context-menu --flat -d

# generate components, services for `ThemePicker` Module
ng g lib ThemePicker --tags=public-module --publishable=true --unit-test-runner=jest
ng g component ThemePicker --project=theme-picker --flat -d
ng g service  ThemeStorage --project=theme-picker -d
ng g service  StyleManager --project=theme-picker -d
ng g module ThemePickerService --project=theme-picker --flat -d

# generate components for `Notifications` Module
ng g lib Notifications --tags=public-module --publishable=true --unit-test-runner=jest -d
ng g component notifications --project=notifications --flat -d
ng g class    notification --type=model --project=notifications -d
ng g service  notifications --project=notifications -d

# generate components for `Quickpanel` Module
ng g lib Quickpanel --prefix=ngx --tags=private-module --unit-test-runner=jest
ng g component Quickpanel --project=quickpanel --flat -d

# generate components for `LoadingOverlay` Module
ng g lib LoadingOverlay --tags=public-module --publishable=true --unit-test-runner=jest
ng g component LoadingOverlay --project=loading-overlay --flat -d

# generate components for `svgViewer` Module
ng g lib svgViewer --tags=public-module --publishable=true --unit-test-runner=jest
ng g component svgViewer --project=svg-viewer --flat -d

# generate components for `led` Module
ng g lib led --tags=public-module --publishable=true
ng g component led --project=led --flat -d

# generate components for `chatBox` Module
ng g lib chatBox --tags=public-module --publishable=true --unit-test-runner=jest -d
ng g component chatBox --project=chat-box --flat -d
ng g component components/typingIndicator --project=chat-box -d
ng g component components/chatCard --project=chat-box -d
ng g component components/TextToSpeechPreferences  --project=chat-box -d
ng g service services/nlp --project=chat-box -d
ng g service services/SpeechToText --project=chat-box -d
ng g service services/TextToSpeech --project=chat-box -d
ng g service services/chat --project=chat-box -d

# generate components for `socketioPlugin` Module
ng g lib socketioPlugin --tags=public-module --publishable=true --spec=false --unit-test-runner=jest -d
ng g service socketioSubject --project=socketio-plugin -d

# generate components for `openTracing` Module
ng g lib openTracing --tags=public-module  --publishable=true --spec=false --unit-test-runner=jest -d
ng g service services/ZipkinTracing --project=open-tracing -d
ng g interceptor interceptors/tracing  --project=open-tracing -d

# generate components for `jsonDiff` Module
ng g lib jsonDiff --tags=public-module --publishable=true --unit-test-runner=jest
ng g component jsonDiff --project=json-diff --flat -d
ng g component jsonDiffTree --project=json-diff --flat -d

# generate components for `clap` Module
ng g lib clap --tags=public-module --skip-tests --publishable=true --unit-test-runner=jest
ng g component clap --project=clap  -s  -t --skip-tests --export --flat -d
ng g component components/counterBubble --project=clap  -s  -t --skip-tests --flat  -d
ng g component components/totalCounter --project=clap  -s  -t --skip-tests --flat  -d
ng g component components/fab --project=clap  -s  -t --skip-tests --flat  -d

# generate components for `ngx-utils` Module
ng g lib ngxUtils --tags=public-module,utils --module false --publishable=true --unit-test-runner=jest
ng g module pipes/truncate --project=ngx-utils --skip-tests -d
ng g pipe pipes/truncate/Characters --project=ngx-utils --module=truncate --export -d
ng g pipe pipes/truncate/Words --project=ngx-utils --module=truncate --export -d
ng g module pipes/helper --project=ngx-utils --skip-tests -d
ng g pipe pipes/helper/filter --project=ngx-utils --module=helper --export -d
ng g pipe pipes/helper/groupBy --project=ngx-utils --module=helper --export -d
ng g pipe pipes/helper/safeHtml --project=ngx-utils --module=helper --export -d
ng g module directives/ngLet --project=ngx-utils --skip-tests -d
ng g directive directives/ng-let/ngLet  --selector=ngLet --project=ngx-utils --module=ng-let --export -d
ng g module directives/routerLinkMatch --project=ngx-utils --skip-tests -d
ng g directive directives/router-link-match/RouterLinkMatch  --selector=routerLinkMatch --project=ngx-utils --module=router-link-match --export -d
ng g module pipes/dateFns --project=ngx-utils --skip-tests -d
ng g service pipes/date-fns/DateFnsConfiguration --project=ngx-utils --module=date-fns --skip-tests -d
ng g pipe pipes/date-fns/FormatTimeInWords --project=ngx-utils --module=date-fns --export -d
ng g module directives/inViewport --project=ngx-utils --skip-tests -d
ng g directive directives/in-viewport/inViewport  --selector=inViewport --project=ngx-utils --module=in-viewport --export -d
ng g service directives/in-viewport/Viewport --project=ngx-utils --module=in-viewport -d
ng g module directives/clickOutside --project=ngx-utils --skip-tests -d
ng g directive directives/click-outside/clickOutside  --selector=ngxClickOutside --project=ngx-utils --module=click-outside --export -d
ng g module directives/min --project=ngx-utils --skip-tests -d
ng g directive directives/min/MinValidator  --selector=appMin --project=ngx-utils --module=min --export -d
ng g module directives/mask --project=ngx-utils --skip-tests -d
ng g directive directives/mask/mask  --selector=ngxMask --project=ngx-utils --module=mask --export -d

# generate components for `toolbar` Module
ng g lib toolbar --tags=private-module --unit-test-runner=jest -d
ng g component toolbar                        --project=toolbar --flat -d
ng g component components/search              --project=toolbar -d
ng g component components/searchBar           --project=toolbar -d
ng g component components/UserMenu            --project=toolbar -d
ng g component components/FullscreenToggle    --project=toolbar -d
ng g component components/SidenavMobileToggle --project=toolbar -d
ng g component components/QuickpanelToggle    --project=toolbar -d

# generate components for `sidenav` Module
ng g lib sidenav --tags=private-module --unit-test-runner=jest -d
ng g component sidenav                --project=sidenav --flat -d
ng g component components/sidenavItem --project=sidenav -d
ng g directive  IconSidenav           --project=sidenav -d

# generate components for `auth` Module
ng g lib auth --tags=private-module,core-module --prefix=ngx --style=scss --unit-test-runner=jest -d
ng g component components/login --project=auth -d
ng g guard admin --project=auth --implements CanActivate -d
ng g @ngxs/schematics:store --name=auth --spec --project=auth --sourceRoot=libs/auth/src/lib -d

# generate components for `oidc` Module
ng g lib oidc --tags=public-module --prefix=ngx --style=scss --unit-test-runner=jest --spec=false --publishable=true -d
ng g service services/Auth  --project=oidc -d
ng g service services/Keycloak  --project=oidc -d
ng g service services/Generic  --project=oidc -d
ng g service services/Ping  --project=oidc -d
ng g guard BaseAuth --project=oidc --implements CanActivate -d
ng g interceptor DefaultOidc --project=oidc  -d
ng g @ngxs/schematics:store --name=auth --spec --project=oidc  --sourceRoot=libs/oidc/src/lib -d
ng g i interfaces/OidcModule config --project=oidc -d
ng g i interfaces/OidcProvider config --project=oidc -d
ng g i interfaces/OidcInit config --project=oidc -d
ng g i interfaces/OidcResourceInterceptor config --project=oidc -d

# generate components for `navigator` Module
ng g lib navigator --prefix=ngx --tags=private-module,core-module --unit-test-runner=jest -d
ng g service services/menu  --project=navigator -d
ng g class models/menuItem  --project=navigator --type=model  -d
ng g class state/menu       --project=navigator --type=state  -d

# generate containers, components for `home` Module
ng g component components/header      --project=home
ng g component containers/homeLayout  --project=home
ng g component containers/landing     --project=home
ng g component containers/blog        --project=home
ng g component containers/about       --project=home

# generate containers, components for `dashboard` Module
ng g component components/rainbow         --project=dashboard -d
ng g component components/OidcProfile         --project=dashboard -d
ng g component containers/dashboardLayout --project=dashboard -d
ng g component containers/overview        --project=dashboard -d
ng g component containers/profile         --project=dashboard -d
ng g component containers/settings        --project=dashboard -d

# generate containers, components for `widgets` Module
ng g component containers/wizdash --project=widgets -d

# generate containers, components for `grid` Module
ng g component  containers/AccountsTable    --project=grid -d
ng g component  components/AccountDetail    --project=grid  -d
ng g component  components/AccountEdit      --project=grid  -d
ng g class      models/account              --project=grid --type=model -d
ng g service    services/account            --project=grid  -d
ng g component  containers/AccountsGridList --project=grid  -d

# generate containers, components for `experiments` Module
ng g component containers/animations            --project=experiments -d
ng g component components/hammerCard            --project=experiments -d
ng g directive components/Hammertime/Hammertime --project=experiments -d
ng g component containers/ContextMenu           --project=experiments -d
ng g component containers/FileUpload            --project=experiments -d
ng g component containers/virtualScroll         --project=experiments -d
ng g component containers/StickyTable           --project=experiments -d
ng g component containers/clapButton            --project=experiments -s  -t --skip-tests  -d
ng g component containers/knobDemo              --project=experiments -d
ng g component containers/ledDemo               --project=experiments  -d
ng g component containers/ImageComp             --project=experiments  -d
ng g component containers/layout                --project=experiments -d
ng g component containers/dashing               --project=experiments -d
ng g component components/card                  --project=experiments -d
ng g component containers/viewport              --project=experiments --skip-tests -d

# generate components for `ImageComparison` Module
ng g lib ImageComparison --tags=public-module --spec=false --publishable=true -d
ng g component ImageComparison --project=image-comparison --export --flat -d


# generate containers, components for `admin` Module
ng g component containers/overview            --project=admin -d
ng g component containers/adminLayout         --project=admin -d

ng g component containers/notifications       --project=admin -d
ng g component components/notificationDetail  --project=admin  -d
ng g component components/notificationEdit    --project=admin  -d
ng g service   services/notification          --project=admin  -d

ng g component containers/subscriptions       --project=admin -d
ng g component components/subscriptionDetail  --project=admin  -d
ng g class     models/subscription            --project=admin --type=model -d
ng g service   services/subscription          --project=admin  -d
```

#### Workspace Schematics

```bash
# generate workspace-schematic `store`
ng g workspace-schematic store
# run workspace-schematic `store`
# *** always delete ./dist folder when you change schematic implementation ***
npm run workspace-schematic store models/sumoDemo -- --project=grid  -d
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

### Build

```bash
# Create a translation source file
ng xi18n --output-path apps/webapp/src/local
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

### Uint Test
```bash
ng test <module>
```

### E2E Test
```bash
ng e2e webapp-e2e
# headless tests (CI)
ng e2e webapp-e2e --headless
# Production target
ng e2e webapp-e2e --prod
# Watching for changes
ng e2e webapp-e2e --watch
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
npm run build:mock
# maybe compress
gzip -k -r dist/apps/webapp/*.js
# push gh-pages
npx ngh --dir dist/apps/webapp
```

### Release

```bash
npm whoami
npx standard-version
"release": "standard-version && git push — follow-tags origin master && npm publish"
```

#### build library

```bash
ng build socketio-plugin
```

#### publish library

> from workspace root

```bash
export NPM_TOKEN="00000000-0000-0000-0000-000000000000"
# check who-am-i
npm whoami
npm publish dist/libs/socketio-plugin --access public
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
nest info
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

### Reference

- Nx and Angular CLI
  - https://github.com/nrwl/nx/wiki/Nx-and-Angular-CLI
