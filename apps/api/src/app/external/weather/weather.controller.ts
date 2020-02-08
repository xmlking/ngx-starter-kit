import { CacheInterceptor, Controller, Get, Logger, Param, UseInterceptors } from '@nestjs/common';
import { ApiOAuth2, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { WeatherService } from './weather.service';

@ApiOAuth2(['read'])
@ApiTags('External', 'Weather')
@Controller('weather')
export class WeatherController {
  private readonly logger = new Logger(WeatherController.name);
  constructor(private readonly weatherService: WeatherService) {}

  @ApiOperation({ summary: 'get weather by zipCode e.g., 91501' })
  @UseInterceptors(CacheInterceptor)
  @Get(':zip')
  getWeather(@Param('zip') zip: string): Observable<any> {
    this.logger.log('weather zip', zip);
    return this.weatherService.getWeatherByZip(zip);
  }

  @ApiOperation({ summary: 'get forecast by zipCode e.g., 91501' })
  @Get('forecast/:zip')
  getForecast(@Param('zip') zip: string): Observable<any> {
    this.logger.log('forecast zip', zip);
    return this.weatherService.getForecastByZip(zip);
  }
}
