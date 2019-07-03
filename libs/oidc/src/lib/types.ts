import { Injectable } from '@angular/core';

export enum OidcAdapterName {
  cordova = 'cordova',
  cordovaNative = 'cordova-native',
  default = 'default',
}

export enum OidcOnLoad {
  LoginRequired = 'login-required',
  CheckSso = 'check-sso',
}

export enum OidcResponseMode {
  Query = 'query',
  Fragment = 'fragment',
}

export enum OidcResponseType {
  Code = 'code',
  Tokens = 'id_token token',
  CodeTokens = 'code id_token token',
}

export enum OidcFlow {
  Password = 'password',
  Standard = 'standard', // AuthorizationCodeFLow
  Implicit = 'implicit',
  Hybrid = 'hybrid',
}

export interface OidcLoginOptions {
  scope?: string;
  redirectUri?: string;
  prompt?: 'none' | 'login';
  action?: 'register';
  maxAge?: number;
  loginHint?: string;
  idpHint?: string;
  locale?: string;
  kcLocale?: string;
  /**
   * Specifies arguments that are passed to the Cordova in-app-browser (if applicable).
   * Options 'hidden' and 'location' are not affected by these arguments.
   * All available options are defined at https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-inappbrowser/.
   * Example of use: { zoom: "no", hardwareback: "yes" }
   */
  cordovaOptions?: { [optionName: string]: string };
}

export interface OidcUserProfile {
  id?: string;
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  enabled?: boolean;
  emailVerified?: boolean;
  totp?: boolean;
  createdTimestamp?: number;
}

export interface OidcTokenParsed {
  exp?: number;
  iat?: number;
  nonce?: string;
  sub?: string;
  session_state?: string;
  realm_access?: { roles: string[] };
  resource_access?: string[];
}

export interface OidcAdapter {
  login(options?: OidcLoginOptions): Promise<void>;
  logout(options?: any): Promise<void>;
  register(options?: OidcLoginOptions): Promise<void>;
  accountManagement(): Promise<void>;
  redirectUri(options: { redirectUri: string }, encodeHash: boolean): string;
}

export interface OidcResourceAccess {
  [key: string]: OidcRoles;
}

export interface OidcRoles {
  roles: string[];
}

/**
 * Error Types
 */
type InvalidRequest = 'invalid_request';
type UnauthorizedClient = 'unauthorized_client';

type AuthorizationError =
  | 'invalid_request'
  | 'unauthorized_client'
  | 'access_denied'
  | 'unsupported_response_type'
  | 'invalid_scope'
  | 'server_error'
  | 'temporarily_unavailable';

type AccessTokenError =
  | 'invalid_request'
  | 'invalid_client'
  | 'invalid_grant'
  | 'unauthorized_client'
  | 'unsupported_grant_type'
  | 'invalid_scope';

export interface AccessTokenErrorResponse {
  error: AccessTokenError;
  error_description?: string;
  error_uri?: URL;
}

export interface AuthorizationErrorResponse {
  error: AuthorizationError;
  error_description?: string;
  error_uri?: URL;
  state?: string;
}

/**
 * Injectable Config Types
 */
export interface Credentials {
  secret: string;
}

export enum OidcProvider {
  Keycloak = 'keycloak',
  Ping = 'ping',
  Default = 'default',
}

@Injectable()
export class OidcProviderConfig {
  issuer: string;
  clientId: string;
  credentials?: Credentials;
  provider?: OidcProvider = OidcProvider.Default;
}

@Injectable()
export class OidcResourceInterceptorConfig {
  bearerPrefix ? = 'bearer';
  authorizationHeaderName ? = 'Authorization';
  allowedUrls?: Array<string>;
}

@Injectable()
export class OidcInitConfig {
  useNonce?: boolean;
  adapter?: OidcAdapterName;
  onLoad?: OidcOnLoad = OidcOnLoad.CheckSso;
  token?: string;
  refreshToken?: string;
  idToken?: string;
  timeSkew?: number;
  checkLoginIframe?: boolean;
  checkLoginIframeInterval?: number;
  responseMode?: OidcResponseMode;
  redirectUri?: string;
  flow?: OidcFlow;
  promiseType ? = 'native';
}

@Injectable()
export class OidcModuleConfig {
  initConfig?: OidcInitConfig;
  providerConfig?: OidcProviderConfig;
  resourceInterceptorConfig?: OidcResourceInterceptorConfig;
  postLoginRedirectUri?: string;
  postLogoutRedirectUri?: string;
  loadUserProfileAtStartUp ? = true;
}
