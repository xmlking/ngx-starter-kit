import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '@env/environment';

const base = document.querySelector('base');
const baseUrl = (base && base.href) || window.location.origin + '/';

const authConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: environment.auth.issuer,

  // URL of the SPA to redirect the user to after login
  redirectUri: baseUrl + 'dashboard',

  postLogoutRedirectUri: baseUrl + 'home',

  silentRefreshRedirectUri: baseUrl + 'silent-refresh.html',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: environment.auth.clientId,

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid profile email voucher',

  showDebugInformation: true,
};

export const authConfigImplicit: AuthConfig = {
  ...authConfig,

  // `oidc` should be `true`(default) for ImplicitFlow, `false` for Resource Owner Password Credentials (ROPC) Flow
  oidc: true,

  // Activate Session Checks: (use only for non-ROPC Flow)
  sessionChecksEnabled: true,
  useIdTokenHintForSilentRefresh: true,
  // FIXME: use it for debugging only.
  timeoutFactor: environment.production ? 0.75 : 0.1,
};

export const authConfigPassword: AuthConfig = {
  ...authConfig,

  // `oidc` should be `true`(default) for ImplicitFlow, `false` for Resource Owner Password Credentials (ROPC) Flow
  oidc: false,
};
