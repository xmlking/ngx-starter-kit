import { Test, TestingModule } from '@nestjs/testing';
import { WeatherService } from './weather.service';
import { HttpModule } from '@nestjs/common';
import { CacheModule } from '../../cache';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, CacheModule],
      providers: [WeatherService],
    }).compile();
    service = module.get<WeatherService>(WeatherService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
