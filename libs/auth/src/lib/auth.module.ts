import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { environment } from '@env/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxsModule, Store } from '@ngxs/store';
import { NullValidationHandler, OAuthModule, OAuthService, ValidationHandler } from 'angular-oauth2-oidc';
import { AuthGuard } from './auth.guard';
import { AuthHandler } from './auth.handler';
import { AuthService } from './auth.service';
import { AuthState } from './auth.state';
import { LoginComponent } from './components/login/login.component';
import { initializeAuth } from './oauth.init';
import { ROPCService } from './ropc.service';

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
  providers: [
    ROPCService,
    AuthService,
    AuthGuard,
    // NOTE: for CodeFlow use NullValidationHandler
    { provide: ValidationHandler, useClass: NullValidationHandler },
  ],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [{ provide: APP_INITIALIZER, useFactory: initializeAuth, deps: [OAuthService, Store], multi: true }],
    };
  }
  // HINT: AuthHandler is injected here to initialize it as Module Run Block
  constructor(authHandler: AuthHandler) {}
}
