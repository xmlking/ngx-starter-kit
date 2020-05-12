# DIY Playbook

Do-it-yourself step-by-step instructions to create this project structure from scratch.

## Setup

### Prerequisites

> you need following tools. versions listed here are minimal versions tested.

| Software        | Version | Optional |
| --------------- | ------- | -------- |
| Node            | v13.5.0 |          |
| Yarn            | v1.21.1 |          |
| Lerna           | v3.20.2 |          |
| Angular CLI     | v9.0.0  |          |
| @nrwl/workspace | v9.0.0  |          |
| @nestjs/cli     | v6.13.2 |          |
| commitizen      | v4.0.3  |          |

### Install Prerequisites

```bash
# install or Update Node and Yarn with brew
brew update
brew install node
#brew upgrade node
brew install yarn
#brew upgrade yarn
yarn config set workspaces-experimental true
yarn global add lerna
brew cleanup
```

#### Editor Configuration

Codelyzer should work out of the box with Atom but for VSCode you will have to open `Code > Preferences > User Settings`, and enter the following config:

```json
{
  "tslint.rulesDirectory": "./node_modules/codelyzer",
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

Install [redux-devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) for Chrome (optional)

#### Install Kubernetes (optional)

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
yarn global remove lerna
yarn global remove @angular/cli
yarn global remove @nrwl/cli
yarn global remove @nestjs/cli
yarn global remove bloomrpc-mock
yarn global remove gitbook-cli

yarn global add lerna
yarn global add @angular/cli@next
yarn global add @nrwl/cli@next
yarn global add @nestjs/cli
yarn global add bloomrpc-mock
yarn global add gitbook-cli

# verify globally installed packages
yarn global list
# find out which packages need to be updated. Options: `--latest`
yarn global upgrade-interactive
# set scss as default css processor
ng config -g defaults.styleExt=scss
ng config -g schematics.@schematics/angular:component.style scss
ng config -g cli.packageManager yarn
# set scss as default styleext for ngx-formly
ng config -g schematics@ngx-formly/schematics:component.styleext scss
# check your global defaults
ng config -g
# find reverse dependencies for a package
yarn why jasmine-marbles
```

#### Install Chrome Extensions

1. [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
2. [Angular Tracer for View Updates](https://chrome.google.com/webstore/detail/angular-tracer-for-view-u/bdneljfoigfojeenmmgahnkjnkpbellg)

### Scaffold Project

> steps below are for setting up a new project from the scratch.

for nx help `yarn run help`

> Explicitly Passing Arguments to Angular CLI

`nx/ng` commands now accept a delimiter to distinguish the end of options for `Nx` and the beginning of options to `Angular CLI` with a (like npm run) according to Guideline 10 of `POSIX.2 utility syntax guidelines`.

`yarn affected -- --target lint --uncommitted --parallel -- --fix`

#### Create Workspace

```bash
# create workspace Ref: https://nx.dev/tutorial/01-create-application
# Options: --bazel  --verbose --strict
ng new ngx-starter-kit --collection=@nrwl/workspace --npm-scope=ngx-starter-kit --preset=empty \
--style=scss --package-manager=yarn --strict --verbose --skipInstall
cd ngx-starter-kit

# Set workspace defaults
ng config cli.packageManager yarn
ng config schematics.@schematics/angular:component.style scss
ng config schematics.@schematics/angular:component.prefix yeti
ng config schematics.@schematics/angular:component.changeDetection OnPush

# make sure we are up-to-date
ng update --next

# and update as suggested. e.g.,
ng update @angular/cli --next
ng update @nrwl/workspace --next
# or update all
ng update --all

# also run `yarn outdated` and update versions in package.json then run `yarn install`
yarn add --dev @nrwl/angular@next --defaults
yarn add --dev @nrwl/nest@next


# generate webapp app
ng g @nrwl/angular:app webapp --routing --style=scss  --tags=app-module

# NOTE: Remove `"types": []` from apps/webapp/tsconfig.app.json to allow global types.

# generate micro-app `chat-box` (optional)
ng g @nrwl/web:app chatApp --routing --style=scss  --tags=micro-app-module -d
ng add ngx-build-plus --project chat-box
ng add @angular/elements --project chat-box ?
yarn add @webcomponents/custom-elements ?

# generate api app with nestjs
ng g @nrwl/nest:app api --frontendProject=webapp --tags=api-module
```

#### Add nx plugins

Below are some nx plugins which you can add to your workspace:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

#### Dependencies

> adding 3rd party modules/libs

```bash
cd ngx-starter-kit

# Add i18n
ng add @angular/localize
# Add PWA
ng add @angular/pwa@next --project webapp

# `ng deploy`
# Add architect for deploying webapp
# ng add [provider] [angular-cli-ghpages, @angular/fire, @zeit/ng-deploy, @azure/ng-deploy, @netlify-builder/deploy]
# gh-pages deployment
# ng add angular-cli-ghpages
# firebase deploy
ng add @angular/fire
# Add architect for npm release
ng add ngx-deploy-npm
# Add ngx-semantic-version (http://d-koppenhagen.de/blog/2019-11-ngx-semantic-version)
ng add ngx-semantic-version
#---------------------------
# Add nebular
ng add @nebular/theme@next
yarn add @nebular/auth@next
yarn add @nebular/security@next
yarn add -D @fortawesome/fontawesome-free
#---------------------------------
# Add scullyio for SSG(Static Site Generator) and Content Management
ng add @scullyio/init
yarn add prismjs
# Add universal for SSR
ng add @nguniversal/express-engine@next
#---------------------------

# Use either above nebular or below Material
#  Add Material
# Ref: https://material.angular.io/guide/schematics
# Ref: https://material.angular.io/guide/getting-started
#---------------------------------
ng add @angular/material
yarn add date-fns
# Add Flex-Layout
yarn add @angular/flex-layout
# Add in-memory-web-api
yarn add angular-in-memory-web-api
#---------------------------------
ng add @twittwer/compodoc
# adds a `compodoc` target to the specified project in your `angular.json`
ng g @twittwer/compodoc:config <project> [options]
ng g @twittwer/compodoc:config tools --workspaceDocs
# Generate your docs:
ng run <project>:compodoc
ng run webapp:compodoc
#---------------------------------
# Add NGXS manually (prefered)
yarn add @ngxs/devtools-plugin @ngxs/{store,router-plugin,form-plugin,storage-plugin,devtools-plugin}
# Or Add NGXS Automatically
ng add @ngxs/schematics # makesure "defaultCollection" is set back to "@nrwl/schematics" in angular.json

yarn add @ngxs-labs/immer-adapter
yarn add @ngxs-labs/select-snapshot
yarn add immer
#---------------------------------

# Add formly
ng add @ngx-formly/schematics --ui-theme=material

#---------------------------------
# Add Filepond
yarn add ngx-filepond \
filepond-plugin-file-encode \
filepond-plugin-file-validate-size \
filepond-plugin-file-validate-type \
filepond-plugin-image-crop \
filepond-plugin-image-preview
#---------------------------------

# Add @UntilDestroy() to auto unsubscribe rxjs
yarn add @ngneat/until-destroy

#---------------------------------
# Add gRPC
yarn add google-protobuf
yarn add -D @types/google-protobuf
yarn add grpc-web

# to generate TS interfaces from proto
yarn add -O ts-proto
#---------------------------------

# Add Socket.io
yarn add socket.io-client
yarn add -D @types/socket.io-client

# add lite-server to test PWA locally
yarn add -D lite-server

# Add miscellaneous
yarn add ngx-perfect-scrollbar smooth-scrollbar ngx-page-scroll screenfull

# Add Dev Tools
# tools you needed in CI/CD inv
yarn add -D loaders.css
yarn add -D api-ai-javascript
yarn add -D codecov
yarn add -D rimraf

# install without saving
yarn add trianglify --no-save --no-lock

# Add Optional Tools
# tools you only needed on Dev laptop
yarn add -O lint-staged
yarn add -O webpack-bundle-analyzer
yarn add -O prettier
# alternative builder for nestjs (optional)
yarn add -D ts-node-builder

yarn workspace @yeti/api add  @xmlking/jwks-rsa @nestjsx/crud nest-router @nestjs/{terminus,cqrs,passport,swagger}
yarn workspace @yeti/api add nodemon supertest  -O
yarn workspace @yeti/api add @types/{helmet,passport,passport-jwt,supertest,nodemailer} -D

yarn workspace @yeti/api add @grpc/proto-loader

yarn workspace @yeti/tools add cpx --dev
```

> update 3rd party modules/schematics

> use `--allow-dirty` `--next` --force` flags as needed

```bash
ng update
# ng update --next
ng update @angular/core --next
ng update @angular/cli --next
ng update @angular/material --force
ng update @angular/pwa --next
ng update @ngx-formly/schematics --ui-theme=material
ng update @nrwl/workspace --next --force
ng update @nrwl/angular --allow-dirty
ng update @nrwl/nest --next
ng update @scullyio/init --next
ng update @nguniversal/express-engine —-next
```

#### Generate Artifacts

> Add `--dry-run` or `-d` option to following commands to see which artifacts will be created, without actually creating them.

##### generate Lazy-loaded Feature Modules

> with angular schematics (a.k.a. @nrwl/angular which is default in `angular.json`)

```bash
# ng g @nrwl/angular:lib ...
ng g lib home           --routing --lazy --parent-module=apps/webapp/src/app/app.module.ts             --defaults --tags=layout,entry-module
ng g lib dashboard      --routing --lazy  --parent-module=apps/webapp/src/app/app.module.ts             --defaults --tags=layout,entry-module
ng g lib admin          --routing --lazy  --parent-module=apps/webapp/src/app/app.module.ts             --defaults --tags=layout,entry-module
ng g lib NotFound       --routing --lazy  --parent-module=apps/webapp/src/app/app.module.ts             --defaults --tags=entry-module
ng g lib experiments    --routing --lazy  --parent-module=libs/dashboard/src/lib/dashboard.module.ts    --defaults --tags=child-module
ng g lib widgets        --routing --lazy  --parent-module=libs/dashboard/src/lib/dashboard.module.ts    --defaults --tags=child-module
ng g lib grid           --routing --lazy  --parent-module=libs/dashboard/src/lib/dashboard.module.ts    --defaults --tags=child-module

# ng g worker app --project=webapp -d # TODO
```

##### generate shared neutral libs

> with no-framework (a.k.a. @nrwl/workspace schematics)

```bash
ng g @nrwl/workspace:lib gen        --tags=utils --defaults -d
ng g @nrwl/workspace:lib tree       --tags=utils --defaults -d
ng g @nrwl/workspace:lib utils      --tags=utils --defaults -d
ng g @nrwl/workspace:lib animations --tags=utils --defaults -d

# system wide `models` module
ng g @nrwl/workspace:lib models     --tags=utils --defaults -d
ng g interface User  --project=models --type=model -d
ng g interface JwtToken  --project=models --type=model -d
ng g interface Profile  --project=models --type=model -d
ng g interface Image  --project=models --type=model -d
ng g enum ImageType --project=models -d
ng g enum Gender --project=models -d
ng g enum AccountSourceType --project=models -d
ng g enum ZoneType --project=models -d
ng g enum EnvironmentType --project=models -d
ng g interface Labels  --project=models --type=model -d
ng g interface Membership  --project=models --type=model -d
ng g interface ResourceQuota  --project=models --type=model -d
ng g interface Project  --project=models --type=model -d
ng g interface Cluster  --project=models --type=model -d
```

##### generate shared angular libs

> with angular schematics (a.k.a. @nrwl/angular which is default in `angular.json`)

```bash
# add `core` angular module which will be only inported into root/app module.
ng g lib core --tags=core-module --defaults -d
# add  global services for `core` Module


ng g service services/Layout          --project=core   -d
ng g service services/PageTitle       --project=core   -d
ng g service services/ServiceWorker   --project=core   -d
ng g service services/MediaQuery      --project=core   -d
ng g service services/DeepLink        --project=core   -d
ng g service services/Feature         --project=core   -d
ng g service services/Analytics       --project=core   -d
ng g service services/PushNotification --project=core  -d
ng g service services/InMemoryData    --project=core   --skip-tests -d
ng g service services/Profile         --project=core   --skip-tests -d
ng g service services/hammer          --project=core   --skip-tests --type=config -d
ng g service services/AppConfig       --project=core   --skip-tests -d
ng g service services/Auth            --project=core   --skip-tests -d
ng g @ngxs/schematics:state state/auth --spec=false --sourceRoot=libs/core/src/lib --project=core -d
ng g @ngxs/schematics:state state/preference --spec=false --sourceRoot=libs/core/src/lib --project=core -d
ng g @ngxs/schematics:state profile --path=state --spec=false --sourceRoot=libs/core/src/lib --project=core -d
ng g guard guard/auth --project=core --implements CanActivate -d
ng g guard guard/admin --project=core --implements CanActivate -d
ng g @ngxs/schematics:store --name=auth --spec --project=core --sourceRoot=libs/core/src/lib -d
ng g i interfaces/RouterStateData --project=core -d
ng g i interfaces/UserInfo --project=core -d

# add `shared` module which will encapsulate angular and 3rd party modules, needed for all `Lazy-loaded Feature Modules`
ng g lib shared  --tags=shared-module --defaults -d
# generate containers, components for `shared` Module
ng g service containers/entity/entity --project=shared
ng g component components/entityTable --project=shared  --export=true
ng g component containers/entity --project=shared  --skip-import
ng g component containers/entityForm  --project=shared  --skip-import

# generate containers for `NotFound` Module
ng g component containers/NotFound --project=not-found -d


### generate `Reusable lib Modules`

# generate components for `AppConfirm` Module
ng g lib AppConfirm --tags=public-module --publishable=true --defaults -d
ng g component AppConfirm --project=app-confirm  --flat  -d
ng g service AppConfirm --project=app-confirm --skip-tests -d

# generate components for `Draggable` Module
ng g lib Draggable --tags=public-module --publishable=true --defaults -d
ng g directive directives/Draggable --project=draggable --export=true -d

# generate components for `Breadcrumbs` Module
ng g lib Breadcrumbs --tags=public-module --publishable=true --defaults -d
ng g component breadcrumbs --project=breadcrumbs --flat -d
ng g service  breadcrumbs --project=breadcrumbs -d

# generate components for `ScrollToTop` Module
ng g lib ScrollToTop --tags=public-module --publishable=true --defaults -d
ng g component ScrollToTop --project=scroll-to-top --flat -d

ng g lib scrollbar --tags=public-module --publishable=true --defaults -d

# generate components for `ContextMenu` Module
ng g lib ContextMenu --tags=public-module --publishable=true --defaults -d
ng g component ContextMenu --project=context-menu --flat -d
ng g directive ContextMenuTrigger --project=context-menu --flat -d

# generate components, services for `ThemePicker` Module
ng g lib ThemePicker --tags=public-module --publishable=true --defaults -d
ng g component ThemePicker --project=theme-picker --flat -d
ng g service  ThemeStorage --project=theme-picker -d
ng g service  StyleManager --project=theme-picker -d
ng g module ThemePickerService --project=theme-picker --flat -d

# generate components for `Notifications` Module
ng g lib Notifications --tags=public-module --publishable=true --defaults -d
ng g component notifications --project=notifications --flat -d
ng g class    notification --type=model --project=notifications --defaults -d
ng g service  notifications --project=notifications -d

# generate components for `Quickpanel` Module
ng g lib Quickpanel  --tags=private-module --defaults -d
ng g component Quickpanel --project=quickpanel --flat -d

# generate components for `LoadingOverlay` Module
ng g lib LoadingOverlay --tags=public-module --publishable=true --defaults -d
ng g component LoadingOverlay --project=loading-overlay --flat -d

# generate components for `svgViewer` Module
ng g lib svgViewer --tags=public-module --publishable=true --defaults -d
ng g component svgViewer --project=svg-viewer --flat -d

# generate components for `led` Module
ng g lib led --tags=public-module --publishable=true --defaults -d
ng g component led --project=led --flat -d

# generate components for `chatBox` Module
ng g lib chatBox --tags=public-module --publishable=true --defaults -d
ng g component chatBox --project=chat-box --flat -d
ng g component components/typingIndicator --project=chat-box -d
ng g component components/chatCard --project=chat-box -d
ng g component components/TextToSpeechPreferences  --project=chat-box -d
ng g service services/nlp --project=chat-box -d
ng g service services/SpeechToText --project=chat-box -d
ng g service services/TextToSpeech --project=chat-box -d
ng g service services/chat --project=chat-box -d

# generate components for `socketioPlugin` Module
ng g lib socketioPlugin --tags=public-module --publishable=true --spec=false --defaults -d
ng g service socketioSubject --project=socketio-plugin -d

# generate components for `openTracing` Module
ng g lib openTracing --tags=public-module  --publishable=true --spec=false --defaults -d
ng g service services/ZipkinTracing --project=open-tracing -d
ng g interceptor interceptors/tracing  --project=open-tracing -d

# generate components for `jsonDiff` Module
ng g lib jsonDiff --tags=public-module --publishable=true --defaults -d
ng g component jsonDiff --project=json-diff --flat -d
ng g component jsonDiffTree --project=json-diff --flat -d

# generate components for `clap` Module
ng g lib clap --tags=public-module --skip-tests --publishable=true --defaults -d
ng g component clap --project=clap  -s  -t --skip-tests --export --flat -d
ng g component components/counterBubble --project=clap  -s  -t --skip-tests --flat  -d
ng g component components/totalCounter --project=clap  -s  -t --skip-tests --flat  -d
ng g component components/fab --project=clap  -s  -t --skip-tests --flat  -d

# generate components for `ngx-utils` Module
ng g lib ngxUtils --tags=public-module,utils --framework=none --publishable=true --defaults -d
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
ng g directive directives/click-outside/clickOutside  --selector=clickOutside --project=ngx-utils --module=click-outside --export -d
ng g module directives/min --project=ngx-utils --skip-tests -d
ng g directive directives/min/MinValidator  --selector=appMin --project=ngx-utils --module=min --export -d
ng g module directives/mask --project=ngx-utils --skip-tests -d
ng g directive directives/mask/mask  --selector=ngxMask --project=ngx-utils --module=mask --export -d

# generate components for `blog` Module
ng g lib blog --routing --lazy --parent-module=libs/home/src/lib/home.module.ts --tags=private-module --defaults -d
ng g component containers/BlogOverview    --project=blog -d
ng g component components/BlogPreview     --project=blog -d
ng g component containers/BlogPost        --project=blog -d
ng g service services/highlight           --project=blog --skip-tests -d

# generate components for `toolbar` Module
ng g lib toolbar --tags=private-module --defaults -d
ng g component toolbar                        --project=toolbar --flat -d
ng g component components/search              --project=toolbar -d
ng g component components/searchBar           --project=toolbar -d
ng g component components/UserMenu            --project=toolbar -d
ng g component components/FullscreenToggle    --project=toolbar -d
ng g component components/SidenavMobileToggle --project=toolbar -d
ng g component components/QuickpanelToggle    --project=toolbar -d

# generate components for `sidenav` Module
ng g lib sidenav --tags=private-module --defaults -d
ng g component sidenav                --project=sidenav --flat -d
ng g component components/sidenavItem --project=sidenav -d
ng g directive  IconSidenav           --project=sidenav -d

# generate components for `auth` Module
ng g lib auth --tags=private-module,core-module  --defaults -d
ng g component components/login --project=auth -d
ng g guard admin --project=auth --implements CanActivate -d
ng g @ngxs/schematics:store --name=auth --spec --project=auth --sourceRoot=libs/auth/src/lib -d

# generate components for `oidc` Module
ng g lib oidc --tags=public-module  --spec=false --publishable=true --defaults -d
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
ng g lib navigator  --tags=private-module,core-module --defaults -d
ng g service services/menu  --project=navigator -d
ng g class models/menuItem  --project=navigator --type=model  -d
ng g class state/menu       --project=navigator --type=state  -d

# generate containers, components for `home` Module
ng g component components/header      --project=home
ng g component components/footer      --project=home
ng g component components/login       --project=home
ng g component components/callback    --project=home
ng g component containers/homeLayout  --project=home
ng g component containers/landing     --project=home
ng g component containers/blog        --project=home
ng g component containers/about       --project=home

# generate containers, components for `dashboard` Module
ng g component components/rainbow         --project=dashboard
ng g component components/OidcProfile     --project=dashboard
ng g component components/header          --project=dashboard
ng g component components/footer          --project=dashboard
ng g component containers/dashboardLayout --project=dashboard
ng g component containers/overview        --project=dashboard
ng g component containers/profile         --project=dashboard
ng g component containers/settings        --project=dashboard

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
ng g component containers/ledDemo               --project=experiments -d
ng g component containers/ImageComp             --project=experiments -d
ng g component containers/layout                --project=experiments -d
ng g component containers/dashing               --project=experiments -d
ng g component components/card                  --project=experiments -d
ng g component containers/viewport              --project=experiments --skip-tests -d

# generate components for `ImageComparison` Module
ng g lib ImageComparison --tags=public-module --spec=false --publishable=true --defaults -d
ng g component ImageComparison --project=image-comparison --export --flat -d


# generate containers, components for `admin` Module
ng g component components/header              --project=admin -d
ng g component components/footer              --project=admin -d
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
yarn workspace-schematic store models/sumoDemo -- --project=grid  -d
# build workspace tools
yarn workspace @ngx-starter-kit/tools build
```

### Install

```bash
yarn
```

### Update

```bash
ng update
ng update @angular/cli
ng update @angular/core
ng update --all
# interactively update non-ng modules, with `--latest`
# this will also update package.json file with information of the new versions of the updated packages
yarn upgrade-interactive --latest
```

### Build

```bash
# Create a translation source file
ng xi18n --output-path apps/webapp/src/local

ng build api
# start with hugh memory if ndded
NODE_OPTIONS=--max-old-space-size=4096 ng build api --prod
NODE_OPTIONS=--max-old-space-size=4096 ng build webapp --prod
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
ng e2e webapp
# headless tests (CI)
ng e2e webapp --headless
# Production target
ng e2e webapp --prod
# Watching for changes
ng e2e webapp --watch
```

### Serve from dist

> use this to test service-workers

```bash
# 1st terminal - Start the build in (optional) watch mode
ng build --prod --watch
# 2nd in terminal - Start the static web server. this will use config from bs-config.json
npx lite-server
```

### Scullyio

```bash
# First time blog CMS setup
ng g @scullyio/init:markdown --name=blog --slug=id -d
# Generate new blog post
ng g @scullyio/init:post --name="blog 1" -d
# build
# scully-routes.json is generated when you run `yarn run scully`
ng build && yarn run scully
# run static server. use either scully CLI or lite-server
yarn run lite-server
yarn run scully serve
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

#### deploy this app with mock config to gh-pages

```bash
# ng deploy --dry-run
ng deploy --base-href=/ngx-starter-kit/ --configuration=mock # to gh-pages
ng deploy --buildTarget=project:browser:staging # to firebase
# deploy all affected apps
nx affected --target deploy
# deploy `dist/apps/webapp` manually to firebase
firebase deploy
```

#### Continuous Delivery

> You may need to set an environment variable called GH_TOKEN in our CI/CD environment

```bash
ng deploy --base-href=/ngx-starter-kit/ --configuration=mock \
--repo=https://github.com/<username>/<repositoryname>.git --name="Your Git Username" --email=your.mail@example.org
```

### Release

`"release": "standard-version && git push — follow-tags origin master && yarn publish"`

```bash
npm whoami
# create the initial release and create the `CHANGELOG.md`
npx release -- --first-release
# This will tag a release without bumping the version in package.json (et al.).
# Cut a Release
npx release -- --dry-run
npx release
# create a pre-release instead of a regular one
npx release -- --prereleas
# cut a new alpha release version
npx release -- --prerelease alpha
# fource a version
npx release -- --release-as 1.1.0
```

standard-version will now do the following:

1. "Bump" the version in package.json
2. Update the CHANGELOG.md file
3. Commit the package.json and CHANGELOG.md files
4. Tag a new release in the git history

#### Build Library

```bash
ng build socketio-plugin
```

#### Publish Library

> bump `version` in `libs/ngx-utils/package.json` e.g., `0.0.6-alpha` for _alpha_ release or `0.0.6` for _latest_ release.
> Set your _NPM_TOKEN_

```bash
# Check who-am-i
npm whoami

export TAG=alpha
export NPM_TOKEN="00000000-0000-0000-0000-000000000000"
# Alpha Release
ng deploy ngx-utils --tag $TAG --otp $NPM_TOKEN --dry-run
# Latest Release
ng deploy ngx-utils --otp $NPM_TOKEN
# old style
yarn publish dist/libs/ngx-utils --tag $TAG --access public
```

#### Publish Code Coverage

```bash
export CODECOV_TOKEN="my token"
yarn codecov -t $CODECOV_TOKEN \
--branch=develop --file=coverage/libs/ngx-utils/coverage-final.json
```

### Analyze

> Analyzing bundle size

```bash
yarn bundle-report
```

### Check

> check if you on current versions.

```bash
node -v
yarn -v
lerna -v
ng -v
npx nx --version
nest info
# list workspaces
yarn workspaces info
```

### Production build and deployment

The prod image serves the minified app (sources compiles with a minimal set of dependencies), via an Nginx server.
It is self-contained, and can therefore be pushed to a Docker registry to be deployed somewhere else easily.

To start the container, use:

```bash
docker-compose up web   # optional: --build, see below
```

Now open your browser at `http://localhost:80`

### IntelliJ/WebStorm

Right click on `apps/webapp/src/styles` in project vie --> Make Directory as --> Resources Root.
Right click on `apps/webapp/src` in project vie --> Make Directory as --> Resources Root.
Right click on `docs` in project view --> Make Directory as --> Excluded.
Right click on `dist` in project view --> Make Directory as --> Excluded.
Right click on `coverage` in project view --> Make Directory as --> Excluded.

### Reference

- [Nx and Angular CLI](https://github.com/nrwl/nx/wiki/Nx-and-Angular-CLI)
- [NPM vs Yarn Cheat Sheet](https://shift.infinite.red/npm-vs-yarn-cheat-sheet-8755b092e5cc)
