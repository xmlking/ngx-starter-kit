import { getGreeting } from '../support/app.po';

describe('Hello Ngx', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Sumo App');
  });
});
