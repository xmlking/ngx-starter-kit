# Contributing to NGX Starter Kit

We would love for you to contribute to starter project and help make it even better than it is
today! As a contributor, here are the guidelines we would like you to follow:

## How can I help?

### Found an Issue?

If you find a bug in the source code or a mistake in the documentation, you can help us by
[submitting an issue][issues] to our [GitHub Repository][github]. Even better, you can
[submit a Pull Request](#submit-pr) with a fix.

### <a name="submit-pr"></a> Submitting a Pull Request (PR)

Before you submit your Pull Request (PR) consider the following guidelines:

- Search [GitHub][pulls]for an open or closed PR
  that relates to your submission. You don't want to duplicate effort.
- Make your changes in a new git branch:

  ```shell
  git checkout -b my-fix-branch master
  ```

- Create your patch, **including appropriate test cases**.
- Follow our [Coding Rules](#rules).
- Run the full Angular CLI test suite, and ensure that all tests pass.
- Commit your changes using a descriptive commit message that follows our
  [commit message conventions](#commit-message-guidelines). Adherence to these conventions
  is necessary because release notes are automatically generated from these messages.

  ```shell
  # stage your changes
  git add .
  # use git-cz interactive helper tool to commit
  npm run commit
  # or use following command if you install commitizen globally
  git cz
  ```

  Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.

- Push your branch to GitHub:

  ```shell
  git push origin my-fix-branch
  ```

- In GitHub, send a pull request to `ngx-starter-kit:master`.
- If we suggest changes then:

  - Make the required updates.
  - Re-run the Angular CLI test suites to ensure tests are still passing.
  - Rebase your branch and force push to your GitHub repository (this will update your Pull Request):

    ```shell
    git rebase master -i
    git push -f
    ```

That's it! Thank you for your contribution!

#### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes
from the main (upstream) repository:

- Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

  ```shell
  git push origin --delete my-fix-branch
  ```

- Check out the master branch:

  ```shell
  git checkout master -f
  ```

- Delete the local branch:

  ```shell
  git branch -D my-fix-branch
  ```

- Update your master with the latest upstream version:

  ```shell
  git pull --ff upstream master
  ```

## <a name="commit-message-guidelines"></a> Commit Message Guidelines

We have very precise rules over how our git commit messages can be formatted. This leads to **more
readable messages** that are easy to follow when looking through the **project history**. But also,
we use the git commit messages to **generate the Angular change log**.

### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies
- **ci**: Changes to our CI configuration files and scripts
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

### Subject

The subject contains succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize first letter
- no dot (.) at the end

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

Footer should contain a [closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/) if any.

Samples: (even more [samples](https://github.com/tomastrajan/angular-ngrx-material-starter/commits/master))

```
docs(changelog): update change log to beta.5
```

```
fix(dependencies): need to depend on latest rxjs and zone.js

The version in our package.json gets copied to the one we publish, and users need the latest of these.
```

[github]: https://github.com/xmlking/ngx-starter-kit
[gitter]: https://gitter.im/xmlking/ngx-starter-kit
[issues]: https://github.com/xmlking/ngx-starter-kit/issues
[pulls]: https://github.com/xmlking/ngx-starter-kit/pulls
[js-style-guide]: https://google.github.io/styleguide/jsguide.html
