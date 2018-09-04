

####  hot to make IntelliJ default to es6 for javascript?
> To set the default language level for JavaScript, go to  File > Other Settings > Default Settings > Languages and Frameworks > JavaScript Version --> ECMAScript 6


#### How to release/deploy?

using  travis CI/CD
> http://dev.topheman.com/continuous-deployment-with-travis-ci/


tag and push to git.
```bash
git tag tag-test-release-production
git push --tags origin master
```

Once it’s done, **you can clean the tag locally (and remotly)** like that (if you wish):
```bash
git tag --delete tag-test-release-production
git push --delete origin tag-test-release-production
```


how to upgrade an old module to use jest instead of Karma?

delete `karma.conf.js`, `test.ts`, and `tsconfig.spec.json` and remove the `test` target for this module from `angular.json`
> [refer](https://blog.nrwl.io/nrwl-nx-6-3-faster-testing-with-jest-20a8ddb5064)
```bash
ng generate jest-project --project app-confirm
# test upgraded module 
ng test app-confirm
```

