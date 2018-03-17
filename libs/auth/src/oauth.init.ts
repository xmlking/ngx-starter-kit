import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { Ngxs } from 'ngxs';
import { LoginSuccess } from './auth.events';
import { AuthorizationErrorResponse } from './oauth.errors';
import { authConfigImplicit } from './oauth.config';

export function initializeAuth(oauthService: OAuthService, ngxs: Ngxs) {
  // default: ImplicitFlow
  oauthService.configure(authConfigImplicit);
  oauthService.tokenValidationHandler = new JwksValidationHandler();
  oauthService.setStorage(sessionStorage);

  return async () => {
    (<any>window).loginTryed = false;
    await oauthService.loadDiscoveryDocumentAndTryLogin({
      onLoginError: (err: AuthorizationErrorResponse) => {
        console.log(`Error Code: ${err.error}, Error Description: ${err.error_description}`);
      }
    });
    (<any>window).loginTryed = true;

    if (oauthService.hasValidAccessToken()) {
      // This is called when using ImplicitFlow or page reload, no effect for ROPC Flow
      console.log('hasValidAccessToken');
      const profile: any = oauthService.getIdentityClaims();
      const isLoggedIn = true;
      ngxs.dispatch(new LoginSuccess({ isLoggedIn, profile }));
    }
  };
}
