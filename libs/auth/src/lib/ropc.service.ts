import { Inject, Injectable } from '@angular/core';
import { OAuthService } from '@xmlking/angular-oauth2-oidc-all';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable()
export class ROPCService {
  constructor(private httpClient: HttpClient, private oauthService: OAuthService) {}

  async login(username: string, password: string) {
    const profile: any = await this.oauthService.fetchTokenUsingPasswordFlowAndLoadUserProfile(username, password);
    // await this.oauthService.refreshToken();
    return profile;
  }

  logOut() {
    // POST /auth/realms/<realm>/protocol/openid-connect/logout
    //
    // ContentType: x-www-form-urlencoded
    // Data:
    //   - client_id : <client>
    //   - refresh_token : <refresh-token-from-login-token>
    //
    // Headers: (FIXME: this is not working : https://issues.jboss.org/plugins/servlet/mobile#issue/KEYCLOAK-2939
    // - Authorization Bearer <IdToken/accessToken?>

    if (this.oauthService.getRefreshToken() === null) {
      return;
    }

    const refreshToken = this.oauthService.getRefreshToken();

    this.oauthService.logOut(true);

    const body = new HttpParams().set('client_id', this.oauthService.clientId).set('refresh_token', refreshToken);

    return this.httpClient.post(this.oauthService.logoutUrl, body.toString(), {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
      // .set('Authorization', `Bearer ${access_token}`)
    });
  }
}
