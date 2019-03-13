import { All, Controller, Get, HttpService, Req } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { ConfigService } from './config';
import { Allow } from './auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as https from 'https';

const url = 'https://httpbin.org/anything';
const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

@Controller()
export class AppController {
  constructor(private readonly config: ConfigService, private readonly http: HttpService) {}

  @ApiOperation({ title: 'Welcome' })
  @Allow()
  @Get()
  root(): string {
    return `<h3>Welcome to Sumo API</h3>
            <br/>Checkout <a href="docs">API Docs</a>
            <br/><code>Version: ${this.config.getVersion()}</code>`;
  }

  @ApiOperation({ title: 'echo service for testing' })
  @Allow()
  @All('echo')
  echo(@Req() req): Observable<any> {
    const { headers, ip, method, params, body } = req;
    return this.http
      .request({ url, headers, method, params, data: body, httpsAgent })
      .pipe(map(res => ({ httpbin: res.data, ip })));
  }
}
