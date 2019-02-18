import { Injectable, Optional } from '@angular/core';
import { OidcInitConfig, OidcLoginOptions, OidcModuleConfig, OidcProviderConfig, OidcUserProfile } from '../types';
import { Store } from '@ngxs/store';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class GenericService extends AuthService {
  constructor(
    private store: Store,
    @Optional() moduleConfig: OidcModuleConfig,
    @Optional() private providerConfig: OidcProviderConfig,
    @Optional() private initConfig: OidcInitConfig,
  ) {
    super(moduleConfig);
    console.error('TODO: implement GenericService');
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

  login(options?: OidcLoginOptions): Promise<void> {
    return undefined;
  }

  logout(redirectUri?: string): Promise<void> {
    return undefined;
  }

  register(options?: OidcLoginOptions) {}

  updateToken(minValidity?: number): Promise<boolean> {
    return undefined;
  }
}
