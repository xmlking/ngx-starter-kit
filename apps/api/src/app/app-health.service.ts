import { Injectable, Logger, OnApplicationBootstrap, OnApplicationShutdown } from '@nestjs/common';
import {
  DNSHealthIndicator,
  TerminusEndpoint,
  TerminusModuleOptions,
  TerminusOptionsFactory,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';
import { KubernetesHealthIndicator } from './project';

// TODO: https://github.com/CloudNativeJS/cloud-health/blob/master/src/healthcheck/HealthChecker.ts
// https://console.bluemix.net/docs/java-spring/healthcheck.html#healthcheck
enum State {
  UNKNOWN = 'UNKNOWN',
  STARTING = 'STARTING',
  UP = 'UP',
  DOWN = 'DOWN',
  STOPPING = 'STOPPING',
  STOPPED = 'STOPPED',
}

@Injectable()
export class AppHealthService implements TerminusOptionsFactory, OnApplicationBootstrap, OnApplicationShutdown {
  readonly logger = new Logger(AppHealthService.name);
  status: State;

  constructor(
    private readonly db: TypeOrmHealthIndicator,
    private readonly dns: DNSHealthIndicator,
    private readonly kubernetes: KubernetesHealthIndicator,
  ) {}

  createTerminusOptions(): TerminusModuleOptions {
    const endpoints: TerminusEndpoint[] = [
      {
        url: '/ready', // Non-OK causes no load
        healthIndicators: [
          async () => this.dns.pingCheck('weather', 'https://samples.openweathermap.org'),
          async () => this.kubernetes.pingCheck('kubernetes'),
        ],
      },
      {
        // Unlike a readiness probe, it is not idiomatic to check dependencies in a liveness probe.
        url: '/live', // Non-OK causes restart
        healthIndicators: [
          async () => this.db.pingCheck('database', { timeout: 300 })
        ],
      },
    ];
    return {
      endpoints,
    };
  }

  async onApplicationBootstrap(): Promise<void> {
    this.status = State.UP;
    // DO some async task
    this.logger.log('in ApplicationBootstrap, done');
  }

  onApplicationShutdown(signal: string) {
    this.status = State.STOPPING;
    console.log('in onApplicationShutdown, signal: ', signal); // e.g. "SIGINT"
    // write an event to `/dev/termination-log` and you can view the message using `kubectl describe pod...`

    // process.kill(process.pid, 'SIGINT');

    // Gracefully stop server
    // server.close()
    //   .then() => Promise.all([
    //   db1.disconnect()
    //   db2.disconnect()
    // ])
    //   .then(() => process.exit(0))
    //   .catch((err) => process.exit(-1))
  }
}
