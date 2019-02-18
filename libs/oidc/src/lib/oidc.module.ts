import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxsModule, Store } from '@ngxs/store';

import { initializeAuth } from './oidc.init';
import { AuthGuard } from './guards/auth.guard';
import { AuthState } from './state/auth.state';
import { AuthHandler } from './state/auth.handler';
import { AuthService } from './services/auth.service';
import { PingService } from './services/ping.service';
import { KeycloakService } from './services/keycloak.service';
import { GenericService } from './services/generic.service';
import { DefaultResourceInterceptor } from './interceptors/default-resource.interceptor';
import { NoopResourceErrorHandler, ResourceErrorHandler } from './interceptors/resource-error-handler';
import {
  OidcInitConfig,
  OidcModuleConfig,
  OidcProvider,
  OidcProviderConfig,
  OidcResourceInterceptorConfig,
} from './types';

function getProvider(providerConfig) {
  if (providerConfig) {
    switch (providerConfig.provider) {
      case OidcProvider.Ping:
        return PingService;
      case OidcProvider.Keycloak:
        return KeycloakService;
      default:
        return GenericService;
    }
  } else {
    return GenericService;
  }
}
@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([AuthState])],
})
export class OidcModule {
  static forRoot(config: OidcModuleConfig): ModuleWithProviders {
    return {
      ngModule: OidcModule,
      providers: [
        { provide: OidcModuleConfig, useValue: Object.assign(new OidcModuleConfig(), config) },
        { provide: OidcInitConfig, useValue: Object.assign(new OidcInitConfig(), config.initConfig) },
        { provide: OidcProviderConfig, useValue: Object.assign(new OidcProviderConfig(), config.providerConfig) },
        {
          provide: OidcResourceInterceptorConfig,
          useValue: Object.assign(new OidcResourceInterceptorConfig(), config.resourceInterceptorConfig),
        },
        {
          provide: AuthService,
          useClass: getProvider(config.providerConfig),
        },
        { provide: ResourceErrorHandler, useClass: NoopResourceErrorHandler },
        config.resourceInterceptorConfig && config.resourceInterceptorConfig.allowedUrls
          ? {
              provide: HTTP_INTERCEPTORS,
              useClass: DefaultResourceInterceptor,
              multi: true,
            }
          : [],
        AuthGuard,
        { provide: APP_INITIALIZER, useFactory: initializeAuth, deps: [AuthService, Store], multi: true },
      ],
    };
  }
  // HINT: AuthHandler is injected here to initialize it as Module Run Block
  constructor(authHandler: AuthHandler) {}
}
