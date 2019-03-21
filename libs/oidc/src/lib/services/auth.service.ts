import { Injectable } from '@angular/core';
import { OidcModuleConfig, OidcInitConfig, OidcLoginOptions, OidcUserProfile } from '../types';

@Injectable()
export abstract class AuthService {
  protected userProfile: OidcUserProfile;
  protected readonly silentRefresh: boolean;
  protected readonly loadUserProfileAtStartUp: boolean;
  protected readonly postLoginRedirectUri: string;
  protected readonly postLogoutRedirectUri: string;

  protected constructor(protected moduleConfig: OidcModuleConfig) {
    const { loadUserProfileAtStartUp = true, postLoginRedirectUri, postLogoutRedirectUri, initConfig } = moduleConfig;
    this.loadUserProfileAtStartUp = loadUserProfileAtStartUp;
    this.postLoginRedirectUri = postLoginRedirectUri;
    this.postLogoutRedirectUri = postLogoutRedirectUri;
    this.silentRefresh = initConfig ? initConfig.flow === 'implicit' : false;
  }

  abstract init(options?: OidcInitConfig): Promise<boolean>;
  abstract login(options?: OidcLoginOptions): Promise<void>;
  abstract logout(redirectUri?: string): Promise<void>;
  abstract register(options?: OidcLoginOptions);
  abstract getAccountManagementUrl();
  abstract isUserInRole(role: string, resource?: string): boolean;
  abstract getUserRoles(allRoles?: boolean): string[];
  abstract isLoggedIn(): Promise<boolean>;
  abstract isTokenExpired(minValidity?: number): boolean;
  abstract updateToken(minValidity?: number): Promise<boolean>;
  abstract loadUserProfile(forceReload?: boolean): Promise<OidcUserProfile>;
  abstract getToken(): Promise<string>;
  abstract getUsername(): string;
  abstract clearToken();
}
