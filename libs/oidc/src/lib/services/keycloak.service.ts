import { Injectable, Optional } from '@angular/core';
import { AuthService } from './auth.service';
import * as Keycloak from 'keycloak-js';
import { Store } from '@ngxs/store';

import { OidcInitConfig, OidcLoginOptions, OidcModuleConfig, OidcProviderConfig, OidcUserProfile } from '../types';
import { KeycloakInitOptions, KeycloakInstance } from 'keycloak-js';

// TODO make this facade https://medium.com/ngxs/ngxs-facade-3aa90c41497b

@Injectable()
export class KeycloakService extends AuthService {
  private readonly instance: KeycloakInstance;
  constructor(
    private store: Store,
    @Optional() moduleConfig: OidcModuleConfig,
    @Optional() private initConfig: OidcInitConfig,
    @Optional() private providerConfig: OidcProviderConfig,
  ) {
    super(moduleConfig);
    const segments = providerConfig.issuer.split('/');
    const realm = segments.pop() || segments.pop();
    segments.pop();
    const url =  segments.join('/');
    this.instance = Keycloak({...providerConfig, url, realm});
    this.bindsKeycloakEvents();
    console.log('moduleConfig', this.moduleConfig);
    console.log('initConfig', this.initConfig);
    console.log('providerConfig', this.providerConfig);
  }

  private bindsKeycloakEvents(): void {}

  async init(options: OidcInitConfig = this.initConfig): Promise<boolean> {
    try {
      const authenticated = await this.instance.init(options as KeycloakInitOptions);
      if (authenticated && this.loadUserProfileAtStartUp) {
        await this.loadUserProfile();
      }
      // @ts-ignore
      return authenticated;
    } catch (err) {
      let msg = 'An error happened during Keycloak initialization.';
      if (err) {
        const { error, error_description } = err;
        msg = msg.concat(`\nAdapter error details:\nError: ${error}\nDescription: ${error_description}`);
      }
      throw new Error(msg);
    }
  }

  async login(options: OidcLoginOptions = { redirectUri: this.postLoginRedirectUri }): Promise<void> {
    console.log('login options', options);
    try {
      await this.instance.login(options);
      if (this.loadUserProfileAtStartUp) {
        await this.loadUserProfile();
      }
    } catch (err) {
      throw new Error(`An error happened during the login.`);
    }
  }

  async logout(redirectUri: string = this.postLogoutRedirectUri): Promise<void> {
    try {
      await this.instance.logout({ redirectUri });
      this.userProfile = undefined;
    } catch (err) {
      throw new Error('An error happened during logout.');
    }
  }

  async register(options: OidcLoginOptions = { action: 'register' }) {
    try {
      await this.instance.logout(options);
    } catch (err) {
      throw new Error('An error happened during the register execution.');
    }
  }

  getAccountManagementUrl() {
    return this.instance.createAccountUrl();
  }

  isUserInRole(role: string, resource?: string): boolean {
    let hasRole: boolean;
    hasRole = this.instance.hasResourceRole(role, resource);
    if (!hasRole) {
      hasRole = this.instance.hasRealmRole(role);
    }
    return hasRole;
  }

  getUserRoles(allRoles: boolean = true): string[] {
    let roles: string[] = [];
    if (this.instance.resourceAccess) {
      for (const key in this.instance.resourceAccess) {
        if (this.instance.resourceAccess.hasOwnProperty(key)) {
          const resourceAccess: any = this.instance.resourceAccess[key];
          const clientRoles = resourceAccess.roles || [];
          roles = roles.concat(clientRoles);
        }
      }
    }
    if (allRoles && this.instance.realmAccess) {
      const realmRoles = this.instance.realmAccess.roles || [];
      roles.push(...realmRoles);
    }
    return roles;
  }

  async isLoggedIn(): Promise<boolean> {
    try {
      if (!this.instance.authenticated) {
        return false;
      }
      // re-check if the token is not expired
      await this.updateToken(20);
      return true;
    } catch (error) {
      return false;
    }
  }

  isTokenExpired(minValidity: number = 0): boolean {
    return this.instance.isTokenExpired(minValidity);
  }

  async updateToken(minValidity: number = 5): Promise<boolean> {
    if (this.silentRefresh) {
      if (this.isTokenExpired()) {
        throw new Error('Failed to refresh the token, or the session is expired');
      } else {
        return true;
      }
    }

    if (!this.instance) {
      throw new Error('Keycloak Angular library is not initialized.');
    }
    try {
      const refreshed = await this.instance.updateToken(minValidity);
      console.log(`updateToken ${refreshed}`);
      return true;
    } catch (err) {
      throw new Error('Failed to refresh the token, or the session is expired');
    }
  }

  async loadUserProfile(forceReload: boolean = false): Promise<OidcUserProfile> {
    if (this.userProfile && !forceReload) {
      return this.userProfile;
    }
    if (!this.instance.authenticated) {
      throw new Error('The user profile was not loaded as the user is not logged in.');
    }
    try {
      this.userProfile = (await this.instance.loadUserProfile()) as OidcUserProfile;
      console.log(this.userProfile);
      return this.userProfile;
    } catch (err) {
      console.log(err);
      throw new Error('The user profile could not be loaded.');
    }
  }

  async getToken(): Promise<string> {
    try {
      await this.updateToken(10);
      return this.instance.token;
    } catch (error) {
      await this.login();
    }
  }

  getUsername(): string {
    if (this.userProfile === undefined) {
      throw new Error('User not logged in or user profile was not loaded.');
    } else {
      return this.userProfile.username;
    }
  }

  clearToken(): void {
    this.instance.clearToken();
  }

  getKeycloakInstance(): KeycloakInstance {
    return this.instance;
  }
}
