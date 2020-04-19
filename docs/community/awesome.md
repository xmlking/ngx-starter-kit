# Awesome Links

A curated list of awesome Angular resources

- How do I use this template projects?

  > Add your own app along with `default` app and use shared modules in `libs`.
  > once you are conferable , then you can delete demo `default` app

- How structure code into modules for better organize and maintain code?

  > Use `Core`, `Shared` and lazy-loaded `Feature` modules
  > More [here](https://medium.com/@tomastrajan/6-best-practices-pro-tips-for-angular-cli-better-developer-experience-7b328bc9db81)

- How do I mock test?

> Refer [here](https://medium.com/@amcdnl/custom-environments-for-angular-cli-4ce0b82da83b)

- Differential Loading

  Find what browsers are supported? `cd apps/webapp`, `npx browserslist`

- How do I design Landing page?

- How to Profile Change Detection?

> Refer [here](https://angular-guru.com/blog/angular-unknown-features)
> type `ng.profiler.timeChangeDetection();` in console.

- How do I theme SPA App?

  > Refer [here](https://blog.thoughtram.io/angular/2017/05/23/custom-themes-with-angular-material.html)
  > Refer [here](https://medium.com/@tomastrajan/the-complete-guide-to-angular-material-themes-4d165a9d24d1) > [Multiple Themes Without Killing Bundle Size](https://medium.com/better-programming/angular-multiple-themes-without-killing-bundle-size-with-material-or-not-5a80849b6b34)

- How do I Make Site Responsive?

  > Refer [here](https://github.com/angular/flex-layout/wiki/Responsive-API)
  > Refer [here](https://medium.com/@nima_ap/creating-a-responsive-dashboard-in-angular-5-from-scratch-147f6a493d9e)

- How to use flex grid?

  > Refer [Flexbox and Grid Layout for Angular Component](https://blog.angularindepth.com/angular-flex-layout-flexbox-and-grid-layout-for-angular-component-6e7c24457b63)

- How implement Progressive Web Applications (PWA) with Service Workers?

  > Refer [here](https://medium.com/codingthesmartway-com-blog/angular-5-service-worker-b722e571e306)
  > Read [Building a Search-Engine Optimized PWA with Angular](https://blog.bitsrc.io/building-an-search-engine-optimized-pwa-with-angular-part-2-4473aed90c14)
  > Refer [webmax](https://slides.com/webmax/ngsw-workbox)
  > Node: you cannot cache external urls (images etc) unless they are CORS enabled.
  > Creating [App-Shell](https://github.com/angular/angular-cli/wiki/stories-app-shell)

- How to keep footers at the bottom of the page?

  > Refer [here](http://matthewjamestaylor.com/blog/keeping-footers-at-the-bottom-of-the-page)

- Organizing Styles

  > Global SCSS and per component specific SCSS (modular!)

  1. Global styles
  2. Component styles
  3. Theme styles

- WTF is monorepo?

  **Monorepo != Monolith**

  > When you have all your codebase within the same repository it’s tempting to fall into the trap of creating a monolith (a gigantic application where all parts are intertwined with each other) so we need to ensure that modularity is a first class citizen within these repositories.

  > Each package has clearly defined boundaries and ownership.

  - [Angular Enterprise Monorepo Patterns](https://go.nrwl.io/angular-enterprise-monorepo-patterns-new-book)
  - [Advantages of monorepos](https://danluu.com/monorepo/)
  - [Getting Started with Nx: The Nrwl Extensions for Angular](http://blog.ng-book.com/getting-started-with-nx-the-nrwl-extensions-for-angular/)
  - [From Zero to However Far We Can Get With Nx](https://www.youtube.com/watch?v=0N589xX2ZQw)
  - [nx-examples](https://github.com/nrwl/nx-examples)
  - [Nx monorepo with Ionic4](https://github.com/TeamHive/app-starter)
  - [Create Your First Custom Angular CLI Schematic with Nx](https://auth0.com/blog/create-custom-schematics-with-nx/)
  - [Why Angular Teams Fail at Code Sharing and How This Monorepo Approach Will Fix It](https://christianlydemann.com/why-angular-teams-fail-at-code-sharing-and-how-this-mono-repo-approach-will-fix-it/)
  - [Harmony with Angular, Lerna and Yarn Workspaces](https://medium.com/@zachary.n.feldman/harmony-with-angular-lerna-and-yarn-workspaces-6a7394f08da)
  - [NestJS mono-repo starter](https://github.com/BrunnerLivio/nestjs-monorepo-starter)
  - [Sustainable Angular Architectures With Strategic Design And Monorepos - Part 1: Methodology](https://www.softwarearchitekt.at/post/2019/03/04/sustainable-angular-architectures-with-strategic-design-and-monorepos-part-1-methodology.aspx)

- What are the guidelines to setup monorepo for enterprise size apps?

  > Refer [Opinionated guidelines for large nx angular projects](https://blog.strongbrew.io//opinionated-guidelines-for-large-nx-angular-projects/)

- How do I add `Content Management` to my angular app?

  Using `Scully` you can add blogs, about, FAQ content on `markdown`, and it will generate static html and integrate with your Angular App.

  > Refer [Exploring Blogging With Scully - the Angular Static Site Generator](https://owlypixel.com/exploring-blog-feature-with-scully-angular-static-site-generator/)

- internationalization ?

  > Refer [Angular Internationalization](https://angular-templates.io/tutorials/about/angular-internationalization-i18n-multi-language-app)

- Component-Driven Development (CDD)

  > Read [CDD](https://www.learnstorybook.com/angular/en/get-started/)

- Creating Reusable Animations in Angular

  > Read [Reusable Animations](https://netbasal.com/creating-reusable-animations-in-angular-6a2350d6191a)

- Micro-Interactions

  > [routing animations](https://blog.laas.sh/bonus-step-3-5-routing-animations/)
  > Read [medium-clap](https://medium.com/@yonatandoron/how-i-implemented-the-medium-clap-from-scratch-4a16ac90ad3b)
  > Read [Must-have animations for Chatbots](https://uxdesign.cc/must-have-animations-for-chatbots-15c031fd6bd3)
  > Read [The ultimate guide to proper use of animation in UX](https://uxdesign.cc/the-ultimate-guide-to-proper-use-of-animation-in-ux-10bd98614fa9)
  > Read [Microinteractions: small details matter](https://uxdesign.cc/microinteractions-detailed-design-9113c88946d0)

- UI Kits

  1. [Material](https://material.angular.io/)
  2. [Nebular](https://akveo.github.io/nebular/)
  3. [Clarity](https://clarity.design/)

- Curated collection of useful Angular snippets that you can understand in 30 seconds or less.

  > Read [30-seconds-of-angular](https://github.com/30-seconds/30-seconds-of-angular)

- Animations

  > Read [Hierarchical Route Animations](https://fluin.io/blog/hierarchical-route-animations)

- Why I Prefer NGXS over NGRX

  > Read [NGXS vs NGRX](https://blog.singular.uk/why-i-prefer-ngxs-over-ngrx-df727cd868b5?gi=405262c5a9c5)

- How to preload modules?

  > Read Angular Router: [Preloading Modules](https://vsavkin.com/angular-router-preloading-modules-ba3c75e424cb)

- How to debug router?

  > `{ enableTracing: true }`
  > Read [debugging router](https://dzone.com/articles/note-to-self-debugging-angular-4-routing)

- How to Debug Angular apps in production without revealing source maps?

  > Read [Debug Angular apps in production](https://blog.angularindepth.com/debug-angular-apps-in-production-without-revealing-source-maps-ab4a235edd85) <br/>
  > attach local SourceMaps on laptop via Chrome dev tools
  > ![Chrome dev tools](https://miro.medium.com/max/1400/1*r-z3m96e9rxdos3EDvvehg.gif)

- How to open Angular Material Dialog via route link?

  > useful for sharing bookmarkable links. e.g., `/account/edit` `/account/add` > [Routing to Angular Material Dialogs](https://medium.com/ngconf/routing-to-angular-material-dialogs-c3fb7231c177)

- How to use new `providedIn` Dependency Injection?

> about new Angular 9 [providedIn scopes 'any' and 'platform'](https://dev.to/christiankohler/improved-dependeny-injection-with-the-new-providedin-scopes-any-and-platform-30bb)

    **'Root'** will still be the default for most services. It makes it very convenient to create tree-shakable services which are singleton within an application.

    **'Platform'** is most likely used for creating shared services for Angular Elements. If you know another use case, please let me know an create a PR on this article.

    **'Any'** is very helpful to make sure a service is a singleton within module boundaries. It's a robust alternative to 'root' to make sure the individual modules don't have a side effect on each other.

> Read Total Guide To Angular 6+ Dependency Injection  : [providedIn vs providers: []](https://medium.com/@tomastrajan/total-guide-to-angular-6-dependency-injection-providedin-vs-providers-85b7a347b59f)

- How to manage state in the front-end?

> use [NGXS](https://amcdnl.gitbooks.io/ngxs/)
> Read [Immer with NGXS](https://blog.angularindepth.com/simple-state-mutations-in-ngxs-with-immer-48b908874a5e)

- Best practices for NgRx Action?

> Types of Actions: User Actions, Backend Actions, Device Actions

> Watch [Good Action Hygiene with NgRx Mike Ryan](https://www.youtube.com/watch?v=JmnsEvoy-gY)

- How to implement route animations?

> Refer [here](https://angularfirebase.com/snippets/router-transition-animations-with-angular-4/)
> Refer [here](https://coryrylan.com/blog/introduction-to-angular-router-animations)
> Refer [here](https://medium.com/frontend-coach/angular-router-animations-what-they-dont-tell-you-3d2737a7f20b)

- Total Guide To Dynamic Angular Animations That Can Be Customized At Runtime

> Refer [here](https://medium.com/@tomastrajan/total-guide-to-dynamic-angular-animations-that-can-be-toggled-at-runtime-be5bb6778a0a)

- how to Deploy to GitHub Pages?

> Refer [here](https://github.com/angular/angular-cli/wiki/stories-github-pages)

- How to chose a color palette for material components?

> Refer [here](https://material.io/guidelines/style/color.html#color-usability)

- how to implement search experience with facets and sort options?

> Refer [here](https://github.com/sfeir-open-source/angular-search-experience)

- What I get from angular-cli?

> Refer [stories](https://github.com/angular/angular-cli/tree/master/docs/documentation/stories)
> Refer [blogs](https://blog.ninja-squad.com/)

- Publishing Angular Library?

> Refer [stories](https://blog.angularindepth.com/the-angular-library-series-publishing-ce24bb673275)

- How to customize material design typography?

> Refer [stories](https://github.com/angular/material2/blob/master/guides/typography.md)

- How to cache backed-end API?

> Use [shareReplay](https://blog.thoughtram.io/angular/2018/03/05/advanced-caching-with-rxjs.html)

> Checkout **combineLatest** and **shareReplay** use in [DeborahK's](https://github.com/DeborahK/Angular-RxJS) Repo and her talk.

-- ngadd

> https://ngadd.com/

- Angular Performance

> Refer [here](https://blog.ninja-squad.com/)
> Refer [angular performance checklist](https://github.com/mgechev/angular-performance-checklist)

> Refer [Curated list of common mistakes made when developing Angular applications](https://angular-checklist.io/projects)

- Server-side rendering(SSR) and Pre-rendering

  [Rendering on the Web](https://developers.google.com/web/updates/2019/02/rendering-on-the-web) <br/>
  Refer [Angular Universal v9: What's New ?](https://trilon.io/blog/angular-universal-v9-whats-new) <br/>
  Refer [here](https://blog.angularindepth.com/creating-an-angular-universal-app-with-the-angular-cli-5ef26c9fd9a5) <br/>
  [nest-next](https://github.com/kyle-mccarthy/nest-next) <br/> > [nuxt/vue.js + nest](https://github.com/chanlito/nuxt-ts-starter) <br/>
  [nest + angular](https://github.com/kamilmysliwiec/universal-nest)<br/>

- dynamic form group builder with class-validator

  > todo [ngx-dynamic-form-builder](https://github.com/EndyKaufman/ngx-dynamic-form-builde)

- How to configure nginx?

  > Use [blog](https://medium.freecodecamp.org/an-introduction-to-nginx-for-developers-62179b6a458f)

- How to build a library for Angular apps?

  > Read [build a library](https://medium.com/@tomsu/how-to-build-a-library-for-angular-apps-4f9b38b0ed11)

- how do adopt semantic-release process?

semantic-release is a fully automated library/system for versioning, changelog generation, git tagging, and publishing to the npm registry.

> [refer](https://blog.greenkeeper.io/introduction-to-semantic-release-33f73b117c8)
> Refer [Angular DevOps](https://blog.angularindepth.com/the-angular-devops-series-semantically-release-your-angular-library-7d78afb4c845)
> Watch Automating Releases with [semantic-release](https://egghead.io/lessons/javascript-automating-releases-with-semantic-release)
> Read [enforcing commit conventions](https://adrianperez.codes/enforcing-commit-conventions/)
> Read [automate package releases](https://medium.com/@schalkneethling/automate-package-releases-with-semantic-release-and-commitizen-d7d4c337f04f)

- How to package the libs for publishing ?

> Use[ng-packagr](https://github.com/dherges/ng-packagr)
> Use[with nx](https://github.com/dherges/nx-packaged)

- How to lazy load modules ?

> Use [Angular Loadable](https://medium.com/@zamamohammed/announcing-angular-loadable-ngx-loadable-2-2kb-4ef7e6321784) for non-routable modules

- How to implement security interceptors?

> [Refer](https://medium.com/@ryanchenkie_40935/angular-authentication-using-the-http-client-and-http-interceptors-2f9d1540eb8)

- How to get HTTPS working on your local development environment?

> [Refer](https://medium.freecodecamp.org/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec)

- 10 More Useful Angular Features You Might Not Have Heard Of

> https://angular-guru.com/blog/angular-more-unknown-features

- Apps That Work Natively on the Web and Mobile

  > https://blog.angular.io/apps-that-work-natively-on-the-web-and-mobile-9b26852495e7

- How to use Angular CDK Tables?

> [Refer](https://medium.com/@zackderose/angular-cdk-tables-1537774d7c99)

- How to implement Server-side Pagination, Filtering, Sorting, with Angular Material Data Table

  > Complete Examples
  > Refer [blog](https://blog.angular-university.io/angular-material-data-table/)
  > Refer [Example 1](https://github.com/angular-university/angular-material-course/tree/2-data-table-finished/src/app/course)
  > Refer [Example 2](https://github.com/angular/material2/blob/master/src/material-examples/table-http/table-http-example.ts)

- how to generate PWA's Push Notifications key pair?

> Refer [web-push-codelab](https://web-push-codelab.glitch.me/)

- How to setup NestJS Project?

> Refer [An Introduction to NestJS](https://www.joshmorony.com/an-introduction-to-nestjs-for-ionic-developers/) > <br/>
> Refer [Vendure](https://github.com/vendure-ecommerce/vendure) an eCommerce framework build with GraphQL and NestJS
> <br/>
> Refer [Getting Started with Nest.js](https://scotch.io/tutorials/getting-started-with-nestjs)

> [What’s new in NestJS Swagger 4 ?](https://trilon.io/blog/nestjs-swagger-4-whats-new)

- Shoud I use mergeMap or concatMap or switchMap or forkJoin for my usecase?

> _Short Answer_: concatMap for writes, mergeMap for reads, switchMap when you have to cancel http call.

> TL;DR: mergeMap doesn’t preserve the order, concatMap does preserve the order.
> switchMap cancels previous inner Observables when a new inner Observable appears
> Ref [blog](https://blog.angularindepth.com/practical-rxjs-in-the-wild-requests-with-concatmap-vs-mergemap-vs-forkjoin-11e5b2efe293)
> Ref [blog](https://blog.angularindepth.com/learn-to-combine-rxjs-sequences-with-super-intuitive-interactive-diagrams-20fce8e6511)
> Ref [blog](https://netbasal.com/rxjs-eight-operators-worth-getting-to-know-2b6c18e601d)

- Secure Angular App with KeyCloak?

in this project, we are demonstrating how to secure UI and backend APIs using following OIDC Flows.

1. Resource Owner Password Credentials FLow
2. Implicit FLow
3. Authorization Code FLow [Waiting](https://github.com/manfredsteyer/angular-oauth2-oidc/pull/195)

https://github.com/manfredsteyer/angular-oauth2-oidc
https://github.com/damienbod/angular-auth-oidc-client
https://github.com/jeroenheijmans/sample-auth0-angular-oauth2-oidc
https://github.com/mauriciovigolo/keycloak-angular
https://github.com/ssilvert/keycloak-schematic/wiki
https://symbiotics.co.za/integrating-keycloak-with-an-angular-4-web-application-part-2/
https://github.com/SchweizerischeBundesbahnen/api-devportal/blob/develop/src/app/shared/auth/auth.service.ts

- https://medium.com/@robert.broeckelmann/when-to-use-which-oauth2-grants-and-oidc-flows-ec6a5c00d864

- How to i18n?
  https://github.com/SchweizerischeBundesbahnen/api-devportal/blob/develop/package.json
  [Angular9 i18n with @angular/localize](https://blog.ninja-squad.com/2019/12/10/angular-localize/)

- how to link local npm projects when you o patch a npm module locally?
  > Ref [blog](https://medium.com/@the1mills/how-to-test-your-npm-module-without-publishing-it-every-5-minutes-1c4cb4b369be)

### NestJS

- Intro [NestJS](https://www.youtube.com/watch?v=ets56yWvi84)

### Pattern

1. https://tomastrajan.github.io/angular-model-pattern-example#/about

### Awesome links

- Angular Articles
  - https://angular-guru.com/blog
