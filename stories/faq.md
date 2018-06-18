HOW TO
======


* How do I use this template projects?
> Add your own app along with `default` app and use shared modules in `libs`. 
once you are conferable , then you can delete demo `default` app

* How structure code into modules for better organize and maintain code? 
> Use `Core`, `Shared` and lazy-loaded `Feature` modules
> More [here](https://medium.com/@tomastrajan/6-best-practices-pro-tips-for-angular-cli-better-developer-experience-7b328bc9db81)

* How do I mock test?

> Refer [here](https://medium.com/@amcdnl/custom-environments-for-angular-cli-4ce0b82da83b)

* How do I design Landing page?

* How do I theme SPA App?
> Refer [here](https://blog.thoughtram.io/angular/2017/05/23/custom-themes-with-angular-material.html)
> Refer [here](https://medium.com/@tomastrajan/the-complete-guide-to-angular-material-themes-4d165a9d24d1)

* How do I Make Site Responsive? 
> Refer [here](https://github.com/angular/flex-layout/wiki/Responsive-API)
> Refer [here](https://medium.com/@nima_ap/creating-a-responsive-dashboard-in-angular-5-from-scratch-147f6a493d9e)

* How implement Progressive Web Applications (PWA) with Service Workers?
> Refer [here](https://medium.com/codingthesmartway-com-blog/angular-5-service-worker-b722e571e306)

* How to keep footers at the bottom of the page?
> Refer [here](http://matthewjamestaylor.com/blog/keeping-footers-at-the-bottom-of-the-page)

* Organizing Styles
> Global SCSS and per component specific SCSS (modular!)
  1. Global styles 
  2. Component styles
  3. Theme styles

* what is new angular 5.2?
> Refer [here](http://blog.ninja-squad.com/)

* internationalization ?
> i18n coming soon

How to manage state in the front-end?

> use [NGXS](https://amcdnl.gitbooks.io/ngxs/)
> Read [Immer with NGXS](https://blog.angularindepth.com/simple-state-mutations-in-ngxs-with-immer-48b908874a5e)

* How to implement route animations?

> Refer [here](https://angularfirebase.com/snippets/router-transition-animations-with-angular-4/)

Total Guide To Dynamic Angular Animations That Can Be Customized At Runtime

> Refer [here](https://medium.com/@tomastrajan/total-guide-to-dynamic-angular-animations-that-can-be-toggled-at-runtime-be5bb6778a0a)

* how to Deploy to GitHub Pages?

> Refer [here](https://github.com/angular/angular-cli/wiki/stories-github-pages)

* How to chose a color palette for material components?

> Refer [here](https://material.io/guidelines/style/color.html#color-usability)

* What I get from angular-cli?

> Refer [stories](https://github.com/angular/angular-cli/tree/master/docs/documentation/stories)

* How to customize material design typography?

> Refer [stories](https://github.com/angular/material2/blob/master/guides/typography.md)

* How to cache backed-end API?

> Use [shareReplay](https://blog.thoughtram.io/angular/2018/03/05/advanced-caching-with-rxjs.html)

* How to configure nginx?
> Use [blog](https://medium.freecodecamp.org/an-introduction-to-nginx-for-developers-62179b6a458f)

* How to build a library for Angular apps?
> Read [build a library](https://medium.com/@tomsu/how-to-build-a-library-for-angular-apps-4f9b38b0ed11)

* How to package the libs for publishing ?

> Use[ng-packagr](https://github.com/dherges/ng-packagr)
> Use[with nx](https://github.com/dherges/nx-packaged)

* How to implement security interceptors?

> [Refer](https://medium.com/@ryanchenkie_40935/angular-authentication-using-the-http-client-and-http-interceptors-2f9d1540eb8)
 
* How to get HTTPS working on your local development environment?
 
> [Refer](https://medium.freecodecamp.org/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec)
 
* How to implement Server-side Pagination, Filtering, Sorting, with Angular Material Data Table 
> Complete Examples
> Refer [blog](https://blog.angular-university.io/angular-material-data-table/)
[Example 1](https://github.com/angular-university/angular-material-course/tree/2-data-table-finished/src/app/course)
[Example 2](https://github.com/angular/material2/blob/master/src/material-examples/table-http/table-http-example.ts)

* Shoud I use mergeMap or  concatMap or switchMap or forkJoin for my usecase? 

> *Short Answer*: concatMap for writes, mergeMap for reads, switchMap when you have to cancel http call.  
 
> TL;DR: mergeMap doesn’t preserve the order, concatMap does preserve the order. 
switchMap cancels previous inner Observables when a new inner Observable appears
> Ref [blog](https://blog.angularindepth.com/practical-rxjs-in-the-wild-requests-with-concatmap-vs-mergemap-vs-forkjoin-11e5b2efe293)
> Ref [blog](https://blog.angularindepth.com/learn-to-combine-rxjs-sequences-with-super-intuitive-interactive-diagrams-20fce8e6511)

* Secure Angular App with KeyCloak?

in this project, we are demonstrating how to secure UI and backend APIs using following OIDC Flows.
1. Resource Owner Password Credentials FLow
2. Implicit FLow
3. Authorization Code FLow [Waiting](https://github.com/manfredsteyer/angular-oauth2-oidc/pull/195)

https://github.com/manfredsteyer/angular-oauth2-oidc
https://github.com/damienbod/angular-auth-oidc-client
https://github.com/mauriciovigolo/keycloak-angular
https://github.com/ssilvert/keycloak-schematic/wiki
https://symbiotics.co.za/integrating-keycloak-with-an-angular-4-web-application-part-2/
https://github.com/SchweizerischeBundesbahnen/api-devportal/blob/develop/src/app/shared/auth/auth.service.ts

* https://medium.com/@robert.broeckelmann/when-to-use-which-oauth2-grants-and-oidc-flows-ec6a5c00d864

* How to i18n?
https://github.com/SchweizerischeBundesbahnen/api-devportal/blob/develop/package.json

### Pattern
1. https://tomastrajan.github.io/angular-model-pattern-example#/about
