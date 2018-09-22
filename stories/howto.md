

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

How to commit code?

 ```bash
 git status
 # stage your changes 
 #  if you want to stage the modified and deleted files only.
 git add -u
 # or stage all modified/deleted/ newly added files
 git add .  
 # use git-cz interactive helper tool to commit
 npm run commit
 # or use following command if you install commitizen globally   
 git cz
 ```

> Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.



How to Cut a Release?

semantic-release is a fully automated library/system for versioning, changelog generation, git tagging, and publishing to the npm registry.

> [refer](https://blog.greenkeeper.io/introduction-to-semantic-release-33f73b117c8)

https://adrianperez.codes/enforcing-commit-conventions/

https://medium.com/@schalkneethling/automate-package-releases-with-semantic-release-and-commitizen-d7d4c337f04f

```bash
export GH_TOKEN=<my_github_token>
export CI=true
npm run semantic-release
```

How to cleanup git tags?

```bash
# Delete all local tags and get the list of remote tags:

git tag -l | xargs git tag -d
git fetch

#Remove all remote tags

git tag -l | xargs -n 1 git push --delete origin

# Clean up local tags
git tag -l | xargs git tag -d
```


linting affected?
```bash
npm run affected:lint  -- --base=origin/master --base=HEAD 
npm run affected:lint  -- --uncommitted --fix
npm run affected:lint -- --untracked 
npm run affected:lint -- --untracked   --fix
ng lint  home  --fix
```

```bash
npm run format:check -- --uncommitted
npm run format:write -- --uncommitted

# And you want to do the following in the CI:
npm run format:check --base=master --head=HEAD
npx nx format:check --base=master --head=HEAD
```

