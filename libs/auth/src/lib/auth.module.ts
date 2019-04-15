import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxsModule, Store } from '@ngxs/store';
import { JwksValidationHandler, OAuthModule, OAuthService, ValidationHandler } from '@xmlking/angular-oauth2-oidc-all';

import { environment } from '@env/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AuthState } from './auth.state';
import { AuthGuard } from './auth.guard';
import { ROPCService } from './ropc.service';
import { AuthService } from './auth.service';
import { AuthHandler } from './auth.handler';
import { initializeAuth } from './oauth.init';
import { LoginComponent } from './components/login/login.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

const matModules = [
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatInputModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatToolbarModule,
];

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([AuthState]),
    RouterModule,
    [...matModules],
    FlexLayoutModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: [environment.API_BASE_URL, environment.DOCS_BASE_URL],
        sendAccessToken: true,
      },
    }),
  ],
  declarations: [LoginComponent],
  entryComponents: [LoginComponent],
  providers: [ROPCService, AuthService, AuthGuard, { provide: ValidationHandler, useClass: JwksValidationHandler }],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [{ provide: APP_INITIALIZER, useFactory: initializeAuth, deps: [OAuthService, Store], multi: true }],
    };
  }
  // HINT: AuthHandler is injected here to initialize it as Module Run Block
  constructor(authHandler: AuthHandler) {}
}
