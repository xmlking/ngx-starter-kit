import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import {
  DiskHealthIndicator,

  // GRPCHealthIndicator,
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
  MemoryHealthIndicator,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';
import { Allow } from './auth';
import { KubernetesHealthIndicator } from './project';

@Controller('health')
export class HealthController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly dns: HttpHealthIndicator,
    private readonly db: TypeOrmHealthIndicator,
    private readonly memory: MemoryHealthIndicator,
    private readonly disk: DiskHealthIndicator,
    private readonly kubernetes: KubernetesHealthIndicator // private readonly grpc: GRPCHealthIndicator,
  ) {}

  @ApiOperation({ summary: 'Readiness prod' })
  @Allow()
  @Get('/ready')
  @HealthCheck()
  readiness() {
    // Non-OK causes no load
    return this.health.check([
      async () => this.memory.checkHeap('memory_heap', 200 * 1024 * 1024),
      async () => this.memory.checkRSS('memory_rss', 3000 * 1024 * 1024),
      // async () => this.disk.checkStorage('storage', {  thresholdPercent: 0.8, path: '/' }),
      async () => this.dns.pingCheck('weather', 'https://samples.openweathermap.org'),
      async () => this.kubernetes.isHealthy('kubernetes'),
    ]);
  }

  // Unlike a readiness probe, it is not idiomatic to check dependencies in a liveness probe.
  @ApiOperation({ summary: 'Liveness prob' })
  @Allow()
  @Get('/live')
  @HealthCheck()
  liveness() {
    // Non-OK causes restart
    return this.health.check([async () => this.db.pingCheck('database', { timeout: 300 })]);
  }
}
