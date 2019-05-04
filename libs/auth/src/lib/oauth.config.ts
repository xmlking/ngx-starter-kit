import { AuthConfig } from '@xmlking/angular-oauth2-oidc-all';
import { environment } from '@env/environment';

const authConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: environment.auth.issuer,

  // URL of the SPA to redirect the user to after login
  redirectUri: environment.baseUrl + 'dashboard',

  postLogoutRedirectUri: environment.baseUrl + 'home',

  silentRefreshRedirectUri: environment.baseUrl + 'silent-refresh.html',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: environment.auth.clientId,

  // for Google Auth, use false
  strictDiscoveryDocumentValidation: false,

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid profile email',

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

export const authConfigCodeFlow: AuthConfig = {
  ...authConfig,

  // `oidc` should be `true`(default) for ImplicitFlow, `false` for Resource Owner Password Credentials (ROPC) Flow
  oidc: true,

  // Activate Session Checks: (use only for non-ROPC Flow)
  sessionChecksEnabled: false,
  useIdTokenHintForSilentRefresh: true,
  // FIXME: use it for debugging only.
  timeoutFactor: environment.production ? 0.75 : 0.1,
  disableAtHashCheck: true,

  // PingFederate Specific
  // dummyClientSecret: '.....',
  // customQueryParams: { acr_values: '....' },
};

export const authConfigHybridFlow: AuthConfig = {
  ...authConfigCodeFlow,
};

export const authConfigPassword: AuthConfig = {
  ...authConfig,

  // `oidc` should be `true`(default) for ImplicitFlow, `false` for Resource Owner Password Credentials (ROPC) Flow
  oidc: false,
};
