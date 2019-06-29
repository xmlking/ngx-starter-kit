import { forwardRef, HttpModule, Module, CacheModule } from '@nestjs/common';
import { SharedModule } from '../shared';
import { WeatherController } from './weather/weather.controller';
import { WeatherService } from './weather/weather.service';

@Module({
  imports: [
    SharedModule,
    HttpModule.register({ timeout: 5000 }),
    CacheModule.register({
      ttl: 60, // seconds
      max: 10, // maximum number of items in cache
    }),
  ],
  providers: [WeatherService],
  controllers: [WeatherController],
})
export class ExternalModule {}
