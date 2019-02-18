import { Inject, Injectable, Optional } from '@angular/core';
import { AuthService } from './auth.service';
import { Store } from '@ngxs/store';

import { OidcInitConfig, OidcUserProfile, OidcLoginOptions, OidcProviderConfig, OidcModuleConfig } from '../types';

@Injectable()
export class PingService extends AuthService {
  constructor(
    private store: Store,
    @Optional() moduleConfig: OidcModuleConfig,
    @Optional() private providerConfig: OidcProviderConfig,
    @Optional() private initConfig: OidcInitConfig,
  ) {
    super(moduleConfig);
    console.error('TODO: implement PingService');
  }

  clearToken() {}

  getAccountManagementUrl() {}

  getToken(): Promise<string> {
    return undefined;
  }

  getUserRoles(allRoles?: boolean): string[] {
    return [];
  }

  getUsername(): string {
    return 'TODO';
  }

  async init(options?: OidcInitConfig): Promise<boolean> {
    return true;
  }

  async isLoggedIn(): Promise<boolean> {
    return true;
  }

  isTokenExpired(minValidity?: number): boolean {
    return false;
  }

  isUserInRole(role: string, resource?: string): boolean {
    return false;
  }

  loadUserProfile(forceReload?: boolean): Promise<OidcUserProfile> {
    return Promise.resolve({});
  }

  async login(options?: OidcLoginOptions): Promise<void> {
    return undefined;
  }

  async logout(redirectUri?: string): Promise<void> {
    return undefined;
  }

  register(options?: OidcLoginOptions) {}

  async updateToken(minValidity?: number): Promise<boolean> {
    return true;
  }
}
