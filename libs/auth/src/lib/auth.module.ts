import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JwksValidationHandler, OAuthModule, OAuthService, ValidationHandler } from 'angular-oauth2-oidc';
import { Store } from '@ngxs/store';

import { initializeAuth } from './oauth.init';
import { AuthState } from './auth.state';
import { LoginComponent } from './components/login/login.component';
import { ROPCService } from './ropc.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatTooltipModule,
  MatToolbarModule,
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { environment } from '@env/environment';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatToolbarModule,
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
  providers: [
    AuthState,
    ROPCService,
    AuthService,
    AuthGuard,
    { provide: ValidationHandler, useClass: JwksValidationHandler },
  ],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [{ provide: APP_INITIALIZER, useFactory: initializeAuth, deps: [OAuthService, Store], multi: true }],
    };
  }
}
