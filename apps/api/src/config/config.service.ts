import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  private readonly envConfig: { [prop: string]: string };

  constructor(filePath: string) {
    // const configPath =  path.join(__dirname, filePath)
    this.envConfig = dotenv.parse(fs.readFileSync(filePath));
  }

  get(key: string): string {
    // return this.envConfig[key];
    return process.env[key] || this.envConfig[key];
  }
}
