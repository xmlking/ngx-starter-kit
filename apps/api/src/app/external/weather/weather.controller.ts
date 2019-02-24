import { CacheInterceptor, Controller, Get, HttpStatus, Logger, Param, UseInterceptors } from '@nestjs/common';
import { ApiOAuth2Auth, ApiOperation, ApiResponse, ApiUseTags, ApiExcludeEndpoint } from '@nestjs/swagger';
import { WeatherService } from './weather.service';
import { Observable } from 'rxjs';

@ApiOAuth2Auth(['read'])
@ApiUseTags('External', 'Weather')
@ApiResponse({ status: HttpStatus.OK, description: 'Found' })
@ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
@ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
@ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden' })
@Controller('weather')
export class WeatherController {
  private readonly logger = new Logger(WeatherController.name);
  constructor(private readonly weatherService: WeatherService) {}

  @ApiOperation({ title: 'get weather by zipCode e.g., 91501' })
  @UseInterceptors(CacheInterceptor)
  @Get(':zip')
  getWeather(@Param('zip') zip: string): Observable<any> {
    this.logger.log('weather zip', zip);
    return this.weatherService.getWeatherByZip(zip);
  }

  @ApiOperation({ title: 'get forecast by zipCode e.g., 91501' })
  @Get('forecast/:zip')
  getForecast(@Param('zip') zip: string): Observable<any> {
    this.logger.log('forecast zip', zip);
    return this.weatherService.getForecastByZip(zip);
  }
}
