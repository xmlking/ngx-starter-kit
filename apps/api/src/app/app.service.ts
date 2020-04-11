import {
  BeforeApplicationShutdown,
  Injectable,
  Logger,
  OnApplicationBootstrap,
  OnApplicationShutdown,
} from '@nestjs/common';

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
export class AppService implements OnApplicationBootstrap, OnApplicationShutdown, BeforeApplicationShutdown {
  readonly logger = new Logger(AppService.name);
  private statusP = State.UNKNOWN;

  constructor() {}

  async onApplicationBootstrap(): Promise<void> {
    this.status = State.UP;
    // DO some async task
    this.logger.log('in ApplicationBootstrap, done');
  }

  async beforeApplicationShutdown(): Promise<void> {
    this.logger.log('beforeApplicationShutdown called');
    return new Promise((resolve) => {
      this.logger.log('starting shutdown...');
      setTimeout(() => {
        this.logger.log('shutdown complete...');
        resolve();
      }, 5000);
    });
  }

  onApplicationShutdown(signal: string) {
    this.status = State.STOPPING;
    console.log('in onApplicationShutdown, signal: ', signal); // e.g. "SIGINT"
    // write an event to `/dev/termination-log` and you can view the message using `kubectl describe pod...`
    // echo "[Error] - {{ msg }}" > /dev/termination-log
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

  get status(): State {
    return this.statusP;
  }

  set status(status: State) {
    switch (this.statusP) {
      case State.UNKNOWN:
        this.statusP = status;
        break;

      case State.STARTING:
        switch (status) {
          case State.STARTING:
            this.statusP = State.STARTING;
            break;
          case State.DOWN:
            this.statusP = State.DOWN;
            break;
        }
        break;

      case State.UP:
        switch (status) {
          case State.STARTING:
            this.statusP = State.STARTING;
            break;
          case State.UP:
            this.statusP = State.UP;
            break;
          case State.DOWN:
            this.statusP = State.DOWN;
            break;
        }
        break;

      case State.DOWN:
        break;

      case State.STOPPING:
        switch (status) {
          case State.STOPPING:
            this.statusP = State.STOPPING;
            break;
          case State.DOWN:
            this.statusP = State.STOPPED;
            break;
          case State.STOPPED:
            this.statusP = State.STOPPED;
            break;
        }
        break;

      case State.STOPPED:
        switch (status) {
          case State.STOPPING:
            this.statusP = State.STOPPING;
            break;
          case State.DOWN:
            this.statusP = State.STOPPED;
            break;
        }
        break;
    }
  }
}
