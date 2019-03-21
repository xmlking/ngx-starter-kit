import { Test, TestingModule } from '@nestjs/testing';
import { WeatherController } from './weather.controller';

describe('Weather Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [WeatherController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: WeatherController = module.get<WeatherController>(WeatherController);
    expect(controller).toBeDefined();
  });
});
