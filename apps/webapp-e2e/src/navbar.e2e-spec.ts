import LoginPage from './po/login.po';
import NavbarPage from './po/navbar.po';
import { BASE_URL } from './environment';

const loginPage = new LoginPage();
const navbar = new NavbarPage();

fixture(`Navbar tests`)
  .page(BASE_URL)
  .beforeEach(async t => {
    await t
      // .useRole(r.enduser)
      .typeText(loginPage.useranmeField, 'sumo3')
      .typeText(loginPage.passwordField, 'demo')
      .click(loginPage.loginButton);
  });

test.skip('Successful logout test', async t => {
  await t
    // .useRole(r.teacher) did not work for me :(
    .maximizeWindow()
    .click(navbar.toolsDropDown)
    .click(navbar.logoutMenuItem);
  const location = await t.eval(() => window.location);
  await t.expect(location.pathname).contains('login');
});
test.skip('Successfull navigation to students from nav menu', async t => {
  await t.click(navbar.menuDropDown).click(navbar.menuDropDownStudents);
  const location = await t.eval(() => window.location);
  await t.expect(location.pathname).contains('student');
});
test.skip('Successfull navigation from students to classes', async t => {
  await t.click(navbar.menuDropDown).click(navbar.menuDropDownClasses);
  const location = await t.eval(() => window.location);
  await t.expect(location.pathname).contains('class');
});
test.skip('Navigate to Classes', async t => {
  await t.click(navbar.menuDropDown).click(navbar.menuDropDownClasses);
  const location = await t.eval(() => window.location);
  await t.expect(location.pathname).contains('class');
});
test.skip('displays username after login', async t => {
  await t.expect(navbar.username.exists).ok;
  await t.expect(navbar.username.innerText).contains('MSW-TEACHER');
});
test.skip('does not display username after logout', async t => {
  await t
    .click(navbar.toolsDropDown)
    .click(navbar.logoutMenuItem)
    .expect(navbar.username.exists).notOk;
});
