import { HttpModule, Module } from '@nestjs/common';
import { SharedModule } from '../shared';
import { WeatherController } from './weather/weather.controller';
import { WeatherService } from './weather/weather.service';
import { WeatherHealthIndicator } from './weather/weather.health';

@Module({
  imports: [SharedModule, HttpModule.register({ timeout: 5000 })],
  providers: [WeatherService, WeatherHealthIndicator],
  exports: [WeatherHealthIndicator],
  controllers: [WeatherController],
})
export class ExternalModule {}
