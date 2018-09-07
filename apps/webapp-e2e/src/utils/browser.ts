import { t } from 'testcafe';

export class Browser {
  constructor(private baseURL: string) {}

  goTo(urlPath: string) {
    return t.navigateTo(`${this.baseURL}${urlPath}`);
  }
}
