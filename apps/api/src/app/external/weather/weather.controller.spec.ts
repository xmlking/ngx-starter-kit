import { Test, TestingModule } from '@nestjs/testing';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { CacheModule } from '../../cache';
import { HttpModule } from '@nestjs/common';

describe('Weather Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [HttpModule, CacheModule],
      controllers: [WeatherController],
      providers: [WeatherService]
    }).compile();
  });
  it('should be defined', () => {
    const controller: WeatherController = module.get<WeatherController>(WeatherController);
    expect(controller).toBeDefined();
  });
});
