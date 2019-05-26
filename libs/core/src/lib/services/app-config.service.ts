import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { IEnvironment } from '@env/ienvironment';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private configUrl = environment.REMOTE_CONFIG_URL;
  private configPrivate = environment;

  constructor(private http: HttpClient) {}

  async load(configUrl = this.configUrl) {
    try {
      const remoteConfig = await this.http.get<IEnvironment>(configUrl).toPromise();
      this.configPrivate = { ...environment, ...remoteConfig };
    } catch {
      console.error(`Unable to load remote config url ${configUrl}`);
    }
  }
  get config() {
    return this.configPrivate;
  }

}
