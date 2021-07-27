import { CacheInterceptor } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { CacheModule } from '../../cache';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';

describe('Weather Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [HttpModule, CacheModule],
      controllers: [WeatherController],
      providers: [WeatherService, { provide: CacheInterceptor, useValue: null }],
    }).compile();
  });
  xit('should be defined', () => {
    const controller: WeatherController = module.get<WeatherController>(WeatherController);
    expect(controller).toBeDefined();
  });
});
