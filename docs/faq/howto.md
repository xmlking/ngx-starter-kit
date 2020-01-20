# Yeti FAQ

## Table of Contents

<details>
  <summary>
    <b>hot to make IntelliJ default to es6 for javascript?</br></br></b>
  </summary>

> To set the default language level for JavaScript, go to File > Other Settings > Default Settings > Languages and Frameworks > JavaScript Version --> ECMAScript 6

</details>

<details>
  <summary>
   <b>hot to make IntelliJ ignore generated files and recognise assets as Resources?</br></br></b>
  </summary>

Right click on `apps/webapp/src/styles` in project vie --> Make Directory as --> Resources Root.</br>
Right click on `apps/webapp/src` in project vie --> Make Directory as --> Resources Root.</br>
Right click on `docs` in project view --> Make Directory as --> Excluded.</br>
Right click on `dist` in project view --> Make Directory as --> Excluded.</br>
Right click on `coverage` in project view --> Make Directory as --> Excluded.</br>

</details>

<details>
  <summary>

#### How to configure `Jest` to test code that is importing `esm modules`?

  </summary>

1. Add `transformIgnorePatterns` to `jest.config.js`

```js
module.exports = {
  name: 'ngx-utils',
  preset: '../../jest.config.js',
  transformIgnorePatterns: ['node_modules/(?!date-fns)'],
  coverageDirectory: '../../coverage/libs/ngx-utils',
};
```

2. Add `"allowJs": true` to `compilerOptions` in `tsconfig.spec.json`
   </details>

<details>
  <summary>

#### How to release/deploy?

  </summary>

using travis CI/CD

[The way to fully automated releases in open source projects](https://medium.com/@kevinkreuzer/the-way-to-fully-automated-releases-in-open-source-projects-44c015f38fd6)

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

</details>

<details>
  <summary>

#### How to implement test spec using Angular Test Bed(ATB)?

  </summary>

> https://codecraft.tv/courses/angular/unit-testing/angular-test-bed/ > https://codecraft.tv/courses/angular/unit-testing/asynchronous/

How to migrate project to newer versions?

> [refer](https://update.angular.io/)

how to implement MODULE_INITIALIZER like APP_INITIALIZER?

> [refer](https://www.bennadel.com/blog/3180-ngmodule-constructors-provide-a-module-level-run-block-in-angular-2-1-1.htm)

</details>

<details>
  <summary>

#### How to commit code?

  </summary>

```bash
git status
# stage your changes
#  if you want to stage the modified and deleted files only.
git add -u
# or stage all modified/deleted/ newly added files
git add .
# or use following command if you install commitizen globally
git commit # git cz
# or skip git hooks with
git commit --no-verify # git cz --no-verify
# or
HUSKY_SKIP_HOOKS=1 git commit
```

> Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.

</details>

<details>
  <summary>

#### How to Cut a Release?

  </summary>

> use [NGX-SEMANTIC-VERSION: ENHANCE YOUR GIT AND RELEASE WORKFLOW](http://d-koppenhagen.de/blog/2019-11-ngx-semantic-version)

    standard-version will now do the following:

    1. "Bump" the version in package.json
    2. Update the CHANGELOG.md file
    3. Commit the package.json and CHANGELOG.md files
    4. Tag a new release in the git history

    https://adrianperez.codes/enforcing-commit-conventions/

    https://medium.com/@schalkneethling/automate-package-releases-with-semantic-release-and-commitizen-d7d4c337f04f

    https://github.com/atlassian/lerna-semantic-release

```bash
export GH_TOKEN=<my_github_token>
export CI=true
export HUSKY_SKIP_HOOKS=1
yarn semantic-release -b develop
```

> then send **PR** to merge to `master` branch.

</details>

<details>
  <summary>

#### How to cleanup git tags?

  </summary>

```bash
# Delete all local tags and get the list of remote tags:

git tag -l | xargs git tag -d
git fetch

#Remove all remote tags

git tag -l | xargs -n 1 git push --delete origin

# Clean up local tags
git tag -l | xargs git tag -d
```

</details>

<details>
  <summary>

#### linting affected?

  </summary>

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

</details>

<details>
  <summary>

#### How to enable debug for node?

  </summary>

```bash
NODE_DEBUG=request  npm run api:start:dev
```

</details>

<details>
  <summary>

#### How to remove zone.js dependency?

  </summary>

> for `Web Components` build with `Angular Elements`, it might be overhead using NgZone
> and sometimes conflict with host app if host app also built with `Angular`

1.  let’s first remove dependency on zone.js.

    > Remove the following import from `polyfils.ts` file:

    ```js
    /* Zone JS is required by Angular itself. */
    import 'zone.js/dist/zone'; // Included with Angular CLI.
    ```

2.  Configure Angular to use the `noop` Zone implementation like this:

    ```js
    platformBrowserDynamic().bootstrapModule(AppModule, {
      ngZone: 'noop',
    });
    ```

3.  Trigger change detection manually as we dont have Zone > `ChangeDetectorRef.detectChanges` runs change detection for a specific component
    `js export class AppComponent { name = 'Angular'; constructor(cd: ChangeDetectorRef) { setTimeout(() => { this.name = 'updated'; cd.markForCheck(); }, 1000); } }`

          > `ApplicationRef.tick`  cause change detection on the whole application.
          ```js
          export class AppComponent  {
            name = 'Angular';
            constructor(app: ApplicationRef) {
                setTimeout(() => {
                    this.name = 'updated';
                    app.tick();
                }, 1000);
            }
          }
          ```

    </details>

<details>
  <summary>

#### How to enable SCSS `@import` for lib modules?

  </summary>

> if you SCSS `@import` in your lib module like in [led](../libs/led/src/lib/led.component.scss),
> you may want to add `IncludePaths` setting. Add this to your `ng-package.json`

```json
{
  "$schema": "../../node_modules/ng-packagr/ng-package.schema.json",
  "dest": "../../dist/libs/led",
  "lib": {
    "entryFile": "src/index.ts",
    "styleIncludePaths": ["../../apps/webapp/src/styles"]
  }
}
```

</details>

<details>
  <summary>

#### How to setup IDE for Best Angular Dev Environment?

  </summary>

1. [Transform VSCode Into Best Angular Dev Environment](https://blog.feathersjs.com/design-patterns-for-modern-web-apis-1f046635215)

</details>

<details>

<summary><b>API Design</br></br></b></summary>

1. [Design patterns for modern web APIs](https://github.com/nrwl/angular-vscode)

</details>

<details>
<summary>🏷 How to setup HMR with NGXS?</summary>

1. [NGXS with HMR Plugin](https://medium.com/ngxs/ngxs-with-hmr-plugin-c2004bcf576d)

</details>

<details>
<summary>🏷 How to Build and Deploy a Cloud Native Node.js?</summary>

1. Refer[1](https://cloudnativejs.wordpress.com/2019/03/19/how-to-build-and-deploy-a-cloud-native-node-js-app-in-15-minutes/)

</details>

<details>
  <summary>

#### How to add badges to github README page?

  </summary>

1. use [atrox](https://actions-badge.atrox.dev/) to generate `GitHub Actions Badge`
2. use [codecov](https://codecov.io/gh/xmlking/ngx-starter-kit/settings/badge) to generate `Codecov Badge`

</details>

Build Error: No name was provided for external module 'date-fns/esm' in output.globals – guessing 'esm'
Solution: Add umdModuleIds to `ng-package.json`
