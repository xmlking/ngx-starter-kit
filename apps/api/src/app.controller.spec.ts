import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { CoreModule } from './core';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      imports: [CoreModule],
    }).compile();
  });

  describe('root', () => {
    it('should contain "Welcome to Sumo API"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.root()).toContain('Welcome to Sumo API');
    });
  });
});
