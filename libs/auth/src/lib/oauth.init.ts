import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { Store } from '@ngxs/store';
import { LoginSuccess } from './auth.actions';
import { AuthorizationErrorResponse } from './oauth.errors';
import { authConfigImplicit } from './oauth.config';

export function initializeAuth(oauthService: OAuthService, store: Store) {
  // default: ImplicitFlow
  oauthService.configure(authConfigImplicit);
  oauthService.setStorage(sessionStorage);

  return async () => {
    // (<any>window).loginTryed = false;
    await oauthService.loadDiscoveryDocumentAndTryLogin({
      onLoginError: (err: AuthorizationErrorResponse) => {
        console.log(`Error Code: ${err.error}, Error Description: ${err.error_description}`);
      },
    });
    // (<any>window).loginTryed = true;

    if (oauthService.hasValidAccessToken()) {
      // This is called when using ImplicitFlow or page reload, no effect for ROPC Flow
      console.log('hasValidAccessToken');
      const profile: any = oauthService.getIdentityClaims();
      store.dispatch(new LoginSuccess(profile));
    }
    return true; // need to return.
  };
}
