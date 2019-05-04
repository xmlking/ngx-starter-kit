import { OAuthService } from '@xmlking/angular-oauth2-oidc-all';
import { Store } from '@ngxs/store';
import { LoginSuccess } from './auth.actions';
import { AuthorizationErrorResponse } from './oauth.errors';
import { authConfigImplicit, authConfigCodeFlow } from './oauth.config';

export function initializeAuth(oauthService: OAuthService, store: Store) {
  // use appropriate authConfig, matching to initSSO() in login.component.ts
  // oauthService.configure(authConfigCodeFlow);
  oauthService.configure(authConfigImplicit);
  oauthService.setStorage(sessionStorage);

  return async () => {
    // (<any>window).loginTryed = false;
    await oauthService.loadDiscoveryDocumentAndTryLogin({
      onLoginError: (err: AuthorizationErrorResponse) => {
        console.log(`Error Code: ${err.error}, Error Description: ${err.error_description}`);
      },
    });

    if (oauthService.hasValidAccessToken()) {
      // This is called when using ImplicitFlow/CodeFlow or page reload, no effect for ROPC Flow
      console.log('yes ValidAccessToken');
      const profile: any = oauthService.getIdentityClaims();
      store.dispatch(new LoginSuccess(profile));
    } else {
      console.log('no ValidAccessToken');
    }
    return true; // need to return.
  };
}
