

####  hot to make IntelliJ default to es6 for javascript?
> To set the default language level for JavaScript, go to  File > Other Settings > Default Settings > Languages and Frameworks > JavaScript Version --> ECMAScript 6

####  hot to make IntelliJ ignore generated files and recognise assets as Resources?

Right click on `apps/webapp/src/styles` in project vie --> Make Directory as --> Resources Root.
Right click on `apps/webapp/src` in project vie --> Make Directory as --> Resources Root.
Right click on `docs` in project view --> Make Directory as --> Excluded.
Right click on `dist` in project view --> Make Directory as --> Excluded.
Right click on `coverage` in project view --> Make Directory as --> Excluded.

#### How to release/deploy?

using  travis CI/CD

> Commits that have [ci skip] or [skip ci] anywhere in the commit messages are ignored by Travis CI.

> [refer](http://dev.topheman.com/continuous-deployment-with-travis-ci/)


tag and push to git.
```bash
git tag tag-test-release-production
git push --tags origin master
```

Once it’s done, **you can clean the tag locally (and remotly)** like that (if you wish):1
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


How to migrate project to newer versions?

> [refer](https://update.angular.io/)

How to do semantic release?

semantic-release is a fully automated library/system for versioning, changelog generation, git tagging, and publishing to the npm registry.

> [refer](https://blog.greenkeeper.io/introduction-to-semantic-release-33f73b117c8)
