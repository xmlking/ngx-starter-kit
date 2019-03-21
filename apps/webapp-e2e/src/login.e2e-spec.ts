import { waitForAngular } from 'testcafe-angular-selectors';
import LoginPage from './po/login.po';
import { browser, BASE_URL } from './utils/index';

const loginPage = new LoginPage();

fixture('ngx-starter-kit Login Tests')
  .page(BASE_URL)
  .beforeEach(async t => {
    await waitForAngular();
  });

test.skip('Successful login test', async t => {
  await t
    .maximizeWindow()
    .click('a[routerLink="/dashboard"]')
    .typeText(loginPage.useranmeField, 'sumo3')
    .typeText(loginPage.passwordField, 'demo')
    .click(loginPage.loginButton);

  const location = await t.eval(() => window.location);
  await t.expect(location.pathname).contains('student');
});
test.skip('Failed login test', async t => {
  await t
    .typeText(loginPage.useranmeField, 'sumo3')
    .typeText(loginPage.passwordField, 'fail')
    .click(loginPage.loginButton);
  const location = await t.eval(() => window.location);
  await t.expect(location.pathname).notContains('dashboard');
  await t.takeScreenshot('login');
});
