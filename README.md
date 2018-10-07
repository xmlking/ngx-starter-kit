Ngx Starter Kit
===============

[![Build Status](https://travis-ci.org/xmlking/ngx-starter-kit.svg?branch=master)](https://travis-ci.org/xmlking/ngx-starter-kit)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) using [Nrwl Nx](https://nrwl.io/nx).

live [Demo](https://xmlking.github.io/ngx-starter-kit/index.html)

**PANT** (*PostgreSQL* - *Angular* - *NestJS* - *TypeScript*) Stack

## Install

```bash
git clone https://github.com/xmlking/ngx-starter-kit.git my-project
cd my-project
npm install
```

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `npm run start:mock` for a mock server.

Run `npm run start -- --proxy-config proxy.conf.js` to start with proxy

## Build

Run `npm run build:prod` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test <module>` to execute the unit tests via [Jest](https://jestjs.io/).

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [TestCafe](https://devexpress.github.io/testcafe/).
Before running the tests make sure you are serving the app via `ng serve`.

## Docs

Run `npm run doc:build` to build docs.
Run `npm run doc:serve` to serve docs.

## Deploy

Run `npm run deploy:mock` to deploy demo app to gp-pages.

Analyzing bundle size `npm run bundle-report`
 
Analyzing and Visualizing the Dependency Graph (affected modules by uncommitted changes)

`npm run affected:dep-graph -- --uncommitted`
