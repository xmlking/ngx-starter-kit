import { HttpModule, Module } from '@nestjs/common';
import { SharedModule } from '../shared';
import { WeatherController } from './weather/weather.controller';
import { WeatherService } from './weather/weather.service';

@Module({
  imports: [SharedModule, HttpModule.register({ timeout: 5000 })],
  providers: [WeatherService],
  controllers: [WeatherController],
})
export class ExternalModule {}
