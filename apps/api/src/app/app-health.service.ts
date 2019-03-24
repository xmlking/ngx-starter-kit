import { Injectable, Dependencies, Inject } from '@nestjs/common';
import {
  DNSHealthIndicator,
  TerminusEndpoint,
  TerminusModuleOptions,
  TerminusOptionsFactory,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';
import { WeatherHealthIndicator } from './external';
// TODO: https://github.com/CloudNativeJS/cloud-health/blob/master/src/healthcheck/HealthChecker.ts
enum State {
  UNKNOWN = 'UNKNOWN',
  STARTING = 'STARTING',
  UP = 'UP',
  DOWN = 'DOWN',
  STOPPING = 'STOPPING',
  STOPPED = 'STOPPED',
}

@Injectable()
export class AppHealthService implements TerminusOptionsFactory {
  status: State;

  constructor(
    private readonly db: TypeOrmHealthIndicator,
    private readonly dns: DNSHealthIndicator,
    private readonly weather: WeatherHealthIndicator,
  ) {}

  createTerminusOptions(): TerminusModuleOptions {
    const endpoints: TerminusEndpoint[] = [
      {
        url: '/ready',
        healthIndicators: [async () => this.db.pingCheck('database', { timeout: 300 })],
      },
      {
        url: '/live',
        healthIndicators: [
          async () => this.dns.pingCheck('google', 'https://google.com'),
          async () => this.weather.pingCheck('dog'),
        ],
      },
    ];
    return {
      endpoints,
    };
  }
}
