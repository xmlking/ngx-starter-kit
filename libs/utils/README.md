# Utils

## Install

```bash
npm i @ngx-starter-kit/utils
```

## Usage

## Code scaffolding

Run `ng generate component component-name --project utils` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project utils`.

> Note: Don't forget to add `--project utils` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build utils` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build utils`, go to the dist folder `cd dist/utils` and run `npm publish`.

```bash
# build
ng build utils
# replace your npm key
export NPM_TOKEN="00000000-0000-0000-0000-000000000000"
# publish
npm publish dist/libs/utils --access public
```

## Running unit tests

Run `ng test utils` to execute the unit tests via [Jest](https://jestjs.io/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
