import { Test, TestingModule } from '@nestjs/testing';
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;
  
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeatherService],
    }).compile();
    service = module.get<WeatherService>(WeatherService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
