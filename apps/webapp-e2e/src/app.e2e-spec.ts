import { waitForAngular } from 'testcafe-angular-selectors';
import { AppPage } from './po/app.po';

const page = new AppPage();

fixture('ngx-starter-kit WebApp').beforeEach(async (t) => {
  // await waitForAngular();
});

test('should display welcome message', async (t) => {
  await page.navigateTo();

  const paragraphText = await page.getParagraphText();

  await t.expect(paragraphText).contains('Sumo App');
});
