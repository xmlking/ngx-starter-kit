import { NgModule, ErrorHandler, Injectable } from '@angular/core';
// import * as Sentry from '@sentry/browser';

// Sentry.init({
//   dsn: 'https://<key>@sentry.io/<project>'
// });

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {}
  handleError(error) {
    // Sentry.captureException(error.originalError || error);
    throw error;
  }
}

