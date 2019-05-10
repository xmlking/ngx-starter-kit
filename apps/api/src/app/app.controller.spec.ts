import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { ConfigModule } from './config';
import { HttpModule } from '@nestjs/common';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule],
      controllers: [AppController],
    }).compile();
  });

  describe('root', () => {
    it('should contain "Welcome to Sumo API"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.root()).toContain('Welcome to Sumo API');
    });
  });
});
