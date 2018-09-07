import { Selector } from 'testcafe';
import { AngularSelector } from 'testcafe-angular-selectors';

export default class LoginPage {
  useranmeField: Selector;
  passwordField: Selector;
  loginButton: Selector;
  constructor() {
    const loginForm = AngularSelector('ngx-login');

    this.useranmeField = loginForm.find('#mat-input-0');
    this.passwordField = loginForm.find('#mat-input-1');
    this.loginButton = loginForm.find('.mat-raised-button mat-primary');
  }
}
