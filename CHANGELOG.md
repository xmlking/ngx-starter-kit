# [1.4.0](https://github.com/xmlking/ngx-starter-kit/compare/v1.3.0...v1.4.0) (2019-01-20)


### Bug Fixes

* **animations:** making hierarchical route animations default ([800153a](https://github.com/xmlking/ngx-starter-kit/commit/800153a))
* **api:** using timestamptz type for Dates in Entities ([a528864](https://github.com/xmlking/ngx-starter-kit/commit/a528864))
* **chat-box:** changed chat-box input style to outline ([a252f4e](https://github.com/xmlking/ngx-starter-kit/commit/a252f4e))
* **chat-box:** fix chatbox input appearance ([1653547](https://github.com/xmlking/ngx-starter-kit/commit/1653547))
* **dependencies:** removing more moment dependencies ([a22cbf2](https://github.com/xmlking/ngx-starter-kit/commit/a22cbf2))
* **dependencies:** removing more moment dependencies ([8a5492e](https://github.com/xmlking/ngx-starter-kit/commit/8a5492e))
* **dependencies:** updated dependencies ([c97573a](https://github.com/xmlking/ngx-starter-kit/commit/c97573a))
* **ngx-utils:** fix date-fns formatTimeInWords pipe's change detection ([7c5c240](https://github.com/xmlking/ngx-starter-kit/commit/7c5c240))
* **notifications:** implement mock data for notifications PUT, POST actions ([45cfbe6](https://github.com/xmlking/ngx-starter-kit/commit/45cfbe6))
* **notifications:** polish notifications ([d64f64b](https://github.com/xmlking/ngx-starter-kit/commit/d64f64b))
* **notifications:** refactored notifications module ([fa7c98c](https://github.com/xmlking/ngx-starter-kit/commit/fa7c98c))


### Features

* **admin:** adding admin module to manage notifications ([db85e50](https://github.com/xmlking/ngx-starter-kit/commit/db85e50))
* **admin:** adding admin module to manage notifications ([56cdcf8](https://github.com/xmlking/ngx-starter-kit/commit/56cdcf8))
* **api:**  kubernetes ([ffdab6c](https://github.com/xmlking/ngx-starter-kit/commit/ffdab6c))
* **api:**  kubernetes ([dc5922a](https://github.com/xmlking/ngx-starter-kit/commit/dc5922a))
* **api:** added kubernetes api ([28f6a50](https://github.com/xmlking/ngx-starter-kit/commit/28f6a50))
* **api:** dynamically load entities using webpack require.context ([57dfd96](https://github.com/xmlking/ngx-starter-kit/commit/57dfd96))
* **auth:** fix sso: removed initialNavigation ([7e0114d](https://github.com/xmlking/ngx-starter-kit/commit/7e0114d))
* **auth:** using  [@xmlking](https://github.com/xmlking)/angular-oauth2-oidc-all ([dd02035](https://github.com/xmlking/ngx-starter-kit/commit/dd02035))
* **core:** lib modules published to NPM ([4a3540a](https://github.com/xmlking/ngx-starter-kit/commit/4a3540a))
* **docs:** added FAQ for removing NgZone ([f25ec6a](https://github.com/xmlking/ngx-starter-kit/commit/f25ec6a))
* **docs:** added FAQ for removing NgZone ([0d4bb09](https://github.com/xmlking/ngx-starter-kit/commit/0d4bb09))
* **docs:** added FAQ for removing NgZone ([cced6fd](https://github.com/xmlking/ngx-starter-kit/commit/cced6fd))
* **docs:** added FAQ for removing NgZone ([04ef04f](https://github.com/xmlking/ngx-starter-kit/commit/04ef04f))
* **entity:** added column templates and sticky column options ([92d4cb7](https://github.com/xmlking/ngx-starter-kit/commit/92d4cb7))
* **ngx-utils:** replaced Moment lib with date-fns ([0dc4e2e](https://github.com/xmlking/ngx-starter-kit/commit/0dc4e2e))
* **ngx-utils:** updated formatTimeInWords Pipe to reflect new date-fns changes in 2.0.0-alpha.27 ([2b79d8e](https://github.com/xmlking/ngx-starter-kit/commit/2b79d8e))
* **notifications:** refactored notifications module ([1599ab7](https://github.com/xmlking/ngx-starter-kit/commit/1599ab7))
* **socketio-plugin:** WebSocketConnected event now carry socketId ([48b61f1](https://github.com/xmlking/ngx-starter-kit/commit/48b61f1))
* **socketio-plugin:** WebSocketConnected event now carry socketId ([fe61005](https://github.com/xmlking/ngx-starter-kit/commit/fe61005))
* **viewport:** added new Viewport module ([7b47023](https://github.com/xmlking/ngx-starter-kit/commit/7b47023))


### Performance Improvements

* **core:** upgrade to es2018 ([ac6c1a9](https://github.com/xmlking/ngx-starter-kit/commit/ac6c1a9))
* **notifications:** using 'immer' to patch ngxs state ([5e5e255](https://github.com/xmlking/ngx-starter-kit/commit/5e5e255))

# [1.3.0](https://github.com/xmlking/ngx-starter-kit/compare/v1.2.0...v1.3.0) (2018-11-23)


### Bug Fixes

* **api:** fix auth config ([67f8c57](https://github.com/xmlking/ngx-starter-kit/commit/67f8c57))
* **api:** make typeorm work with 'ng serve api' ([e549023](https://github.com/xmlking/ngx-starter-kit/commit/e549023))
* **auth:** fix redirection to dashboard after login via ImplicitFLow ([6685ce9](https://github.com/xmlking/ngx-starter-kit/commit/6685ce9))
* **chat-box:** fix voice box for safari ([5068a72](https://github.com/xmlking/ngx-starter-kit/commit/5068a72))
* **core:** adding es7/array polyfill to support old browsers ([7340567](https://github.com/xmlking/ngx-starter-kit/commit/7340567))
* **core:** removed ng-package.prod.json as it is no longer needed by nx ([f51f0f5](https://github.com/xmlking/ngx-starter-kit/commit/f51f0f5))
* **eventbus:** workaround for ngxs router plugin issue ([78a41a2](https://github.com/xmlking/ngx-starter-kit/commit/78a41a2))
* **eventbus:** workaround for ngxs router plugin issue ([9fb3ab0](https://github.com/xmlking/ngx-starter-kit/commit/9fb3ab0))
* **experiments:** update ngx-knob, lock d3 version ([1b26e5b](https://github.com/xmlking/ngx-starter-kit/commit/1b26e5b))
* **grid:** fix drag: changed cdkDragRootElement from .mat-dialog-container .cdk-overlay-pane ([92153e6](https://github.com/xmlking/ngx-starter-kit/commit/92153e6))
* **material:** mat-placeholde -> mat-label ([95b3141](https://github.com/xmlking/ngx-starter-kit/commit/95b3141))
* **ThemePicker:** ThemePicker now using PreferenceState for storage ([d448bf8](https://github.com/xmlking/ngx-starter-kit/commit/d448bf8))


### Features

* **analytics:** added google analytics service ([f52e75f](https://github.com/xmlking/ngx-starter-kit/commit/f52e75f))
* **api:** added push API module to save PushSubscriptions ([945034c](https://github.com/xmlking/ngx-starter-kit/commit/945034c))
* **core:** using Inject(WINDOW) and new ServiceWorker ([2bfc467](https://github.com/xmlking/ngx-starter-kit/commit/2bfc467))
* **dashboard:** added profile and settings pages ([848d51e](https://github.com/xmlking/ngx-starter-kit/commit/848d51e))
* **dashboard:** added profile and settings pages ([1a77689](https://github.com/xmlking/ngx-starter-kit/commit/1a77689))
* **notifications:** added field: native to  Notification model ([12fa080](https://github.com/xmlking/ngx-starter-kit/commit/12fa080))
* **notifications:** added notify, notifyAll API ([3600c99](https://github.com/xmlking/ngx-starter-kit/commit/3600c99))
* **push:** PushNotifications subscription backend API ([4b65131](https://github.com/xmlking/ngx-starter-kit/commit/4b65131))


### Performance Improvements

* **polish:** removed console.log ([12bde29](https://github.com/xmlking/ngx-starter-kit/commit/12bde29))


### Reverts

* **test:** test ([348c307](https://github.com/xmlking/ngx-starter-kit/commit/348c307))

# [1.2.0](https://github.com/xmlking/ngx-starter-kit.git/compare/v1.1.0...v1.2.0) (2018-10-28)


### Bug Fixes

* **features:** using proper flex layout grid to render tiles ([8d68bdc](https://github.com/xmlking/ngx-starter-kit.git/commit/8d68bdc))
* **ngx-utils:** using  ngx-utils ([a3dddab](https://github.com/xmlking/ngx-starter-kit.git/commit/a3dddab))


### Features

* **animations:** added new hierarchical Route Animation ([a799175](https://github.com/xmlking/ngx-starter-kit.git/commit/a799175))
* **api:** added 2nd node-app 'backend' to showcase file upload ([7ab7c5d](https://github.com/xmlking/ngx-starter-kit.git/commit/7ab7c5d))
* **api:** migrated database from mongodb to postgres ([a1ad294](https://github.com/xmlking/ngx-starter-kit.git/commit/a1ad294))
* **app:** Automatically set pageTitle from route data ([6f337c5](https://github.com/xmlking/ngx-starter-kit.git/commit/6f337c5))
* **dependencies:** nrwl/nx -> 6.4.0 , rebuild apps/api module with nx node-apps ([779b596](https://github.com/xmlking/ngx-starter-kit.git/commit/779b596))
* **experiments:** added new example to showcase flex-layout with grid ([5034b6e](https://github.com/xmlking/ngx-starter-kit.git/commit/5034b6e))
* **ngx-utils:** ngx-utils module replace ngx-pipes ([8f4e7ec](https://github.com/xmlking/ngx-starter-kit.git/commit/8f4e7ec))
* **ngx-utils:** using new untilDestroy ([1e569e8](https://github.com/xmlking/ngx-starter-kit.git/commit/1e569e8))

# [1.1.0](https://github.com/xmlking/ngx-starter-kit/compare/v1.0.4...v1.1.0) (2018-10-06)


### Bug Fixes

* **docs:** excluded some folders for compodoc builds ([013710c](https://github.com/xmlking/ngx-starter-kit/commit/013710c))
* **docs:** fix compodoc build ([5ff3107](https://github.com/xmlking/ngx-starter-kit/commit/5ff3107))
* **draggable:** replaced DraggableModule in favor of CDK DragDropModule ([41f729a](https://github.com/xmlking/ngx-starter-kit/commit/41f729a))
* **schematics:** added Store workspace schematics ([c8bba51](https://github.com/xmlking/ngx-starter-kit/commit/c8bba51))
* **tools:** fix workspace-schematic ngxs ([1603246](https://github.com/xmlking/ngx-starter-kit/commit/1603246))


### Features

* **components:** added image comparison component ([4454e1d](https://github.com/xmlking/ngx-starter-kit/commit/4454e1d))

## [1.0.4](https://github.com/xmlking/ngx-starter-kit/compare/v1.0.3...v1.0.4) (2018-09-24)


### Performance Improvements

* **led:** using Attribute for data binding ([5bce243](https://github.com/xmlking/ngx-starter-kit/commit/5bce243))

## [1.0.3](https://github.com/xmlking/ngx-starter-kit/compare/v1.0.2...v1.0.3) (2018-09-23)


### Performance Improvements

* **login:** enhanced login UX ([f2f4865](https://github.com/xmlking/ngx-starter-kit/commit/f2f4865))

## [1.0.2](https://github.com/xmlking/ngx-starter-kit/compare/v1.0.1...v1.0.2) (2018-09-22)


### Bug Fixes

* **nestjs:** fix typescript types ([97f855a](https://github.com/xmlking/ngx-starter-kit/commit/97f855a))
* **test:** nrwl/nx -> 6.4.0-beta.1 ([b032276](https://github.com/xmlking/ngx-starter-kit/commit/b032276))

## [1.0.1](https://github.com/xmlking/ngx-starter-kit/compare/v1.0.0...v1.0.1) (2018-09-09)


### Bug Fixes

* **build:** now updating version ([2d913ea](https://github.com/xmlking/ngx-starter-kit/commit/2d913ea))

# 1.0.0 (2018-09-09)


### Bug Fixes

* [@types](https://github.com/types)/jasmine vs [@types](https://github.com/types)/jest conflict ([902a4f8](https://github.com/xmlking/ngx-starter-kit/commit/902a4f8))
* build ([deac7a9](https://github.com/xmlking/ngx-starter-kit/commit/deac7a9))
* build ([ed91ffc](https://github.com/xmlking/ngx-starter-kit/commit/ed91ffc))
* sticky header ([faf80ad](https://github.com/xmlking/ngx-starter-kit/commit/faf80ad))
* fix format:write -- --uncommitted ([3b0eb49](https://github.com/xmlking/ngx-starter-kit/commit/3b0eb49))


### Features

* context-menu example ([745a0bd](https://github.com/xmlking/ngx-starter-kit/commit/745a0bd))
* **deps:** latest angular and nx ([80918df](https://github.com/xmlking/ngx-starter-kit/commit/80918df))
