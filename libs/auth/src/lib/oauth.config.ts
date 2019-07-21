import { AuthConfig } from 'angular-oauth2-oidc';
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

  // set the scope for the permissions the client should request
  // The first four are defined by OIDC.
  // Important: Request offline_access to get a refresh token
  // The ngxapi-audience scope is a usecase specific one
  scope: 'openid profile email ngxapi-audience',
  // TODO: scope: 'openid profile email   offline_access ngxapi-audience',

  responseType: 'code',
  // PingFederate Specific:

  // Just needed if your auth server demands a secret. In general, this
  // is a sign that the auth server is not configured with SPAs in mind
  // and it might not enforce further best practices vital for security
  // such applications.
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
