import { parse, config } from 'dotenv';
import * as fs from 'fs';
import { Injectable } from '@nestjs/common';
const packageJson = require('../../../../package.json');

@Injectable()
export class ConfigService {
  private readonly envConfig: { [prop: string]: string };

  constructor(filePath: string) {
    this.envConfig = parse(fs.readFileSync(filePath));
    config({ path: filePath });
  }

  get(key: string, defaultVal?: any): string {
    return process.env[key] || this.envConfig[key] || defaultVal;
  }

  has(key: string): boolean {
    return this.get(key) !== undefined;
  }

  public getNumber(key: string): number {
    return parseInt(this.get(key), 10);
  }

  public getVersion(): string {
    if (!process.env.APP_VERSION) {
      process.env.APP_VERSION = packageJson.version;
    }
    return process.env.APP_VERSION;
  }

  public isProd(): boolean {
    return process.env.NODE_ENV && process.env.NODE_ENV === 'production';
  }

  public getAllowWhitelist(): string[] {
    const allowWhitelist = this.get('ALLOW_WHITE_LIST');
    if (allowWhitelist) {
      return allowWhitelist.split(',');
    } else {
      return [];
    }
  }
}
