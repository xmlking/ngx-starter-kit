# How to

<details>
  <summary>

   ####  hot to make IntelliJ default to es6 for javascript?
  </summary>

  > To set the default language level for JavaScript, go to  File > Other Settings > Default Settings > Languages and Frameworks > JavaScript Version --> ECMAScript 6
</details>

<details>
  <summary>

   ####  hot to make IntelliJ ignore generated files and recognise assets as Resources?
  </summary>

  Right click on `apps/webapp/src/styles` in project vie --> Make Directory as --> Resources Root.
  Right click on `apps/webapp/src` in project vie --> Make Directory as --> Resources Root.
  Right click on `docs` in project view --> Make Directory as --> Excluded.
  Right click on `dist` in project view --> Make Directory as --> Excluded.
  Right click on `coverage` in project view --> Make Directory as --> Excluded.
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
</details>

<details>
  <summary>

   #### How to implement test spec using Angular Test Bed(ATB)?
  </summary>

  >  https://codecraft.tv/courses/angular/unit-testing/angular-test-bed/
  >  https://codecraft.tv/courses/angular/unit-testing/asynchronous/
  
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
   # use git-cz interactive helper tool to commit
   npm run commit
   # or use following command if you install commitizen globally   
   git cz
   # or skip git hooks with 
   git cz --no-verify
   ```
  
  > Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.
</details>

<details>
  <summary>

   #### How to Cut a Release?
  </summary>

  > `semantic-release` is a fully automated library/system for versioning, changelog generation, git tagging, and publishing to the npm registry.

  > Read [introduction-to-semantic-release](https://blog.greenkeeper.io/introduction-to-semantic-release-33f73b117c8)

    https://adrianperez.codes/enforcing-commit-conventions/

    https://medium.com/@schalkneethling/automate-package-releases-with-semantic-release-and-commitizen-d7d4c337f04f

  ```bash
  export GH_TOKEN=<my_github_token>
  export CI=true
  npm run semantic-release
  ```
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
  and sometimes conflict with host app if host app also built with `Angular`

  1.  let’s first remove dependency on zone.js.
      > Remove the following import from `polyfils.ts` file:
      ```js
      /* Zone JS is required by Angular itself. */
      import 'zone.js/dist/zone';  // Included with Angular CLI.
      ```

  2.  Configure Angular to use the `noop` Zone implementation like this:
      ```js
      platformBrowserDynamic()
          .bootstrapModule(AppModule, {
              ngZone: 'noop'
          });
      ```

  3.  Trigger change detection manually as we dont have Zone
      > `ChangeDetectorRef.detectChanges` runs change detection for a specific component
      ```js
      export class AppComponent  {
        name = 'Angular';
        constructor(cd: ChangeDetectorRef) {
            setTimeout(() => {
                this.name = 'updated';
                cd.markForCheck();
            }, 1000);
        }
      }
      ```

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

