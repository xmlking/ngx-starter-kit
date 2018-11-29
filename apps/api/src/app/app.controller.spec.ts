import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { ConfigModule } from './config';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      imports: [ConfigModule],
    }).compile();
  });

  describe('root', () => {
    it('should contain "Welcome to Sumo API"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.root()).toContain('Welcome to Sumo API');
    });
  });
});
