import { Injectable } from '@nestjs/common';
import { environment } from '@env-api/environment';

// tslint:disable-next-line
const packageJson = require('../../../../package.json');

@Injectable()
export class ConfigService {
  private readonly config;

  constructor() {
    this.config = environment;
    console.log('is prod? ', environment.production);
  }

  get(key: string): any {
    return this.config.get(key);
  }

  public getVersion(): string {
    if (!process.env.APP_VERSION) {
      process.env.APP_VERSION = packageJson.version;
    }
    return process.env.APP_VERSION;
  }

  public isProd(): boolean {
    return this.config.production;
  }

  public getAllowWhitelist(): string[] {
    return this.config.ALLOW_WHITE_LIST ? this.config.ALLOW_WHITE_LIST : [];
  }
}
