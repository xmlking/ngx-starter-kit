

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

