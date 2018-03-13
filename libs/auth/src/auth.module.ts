import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { initializeAuth } from './oauth.init';
import {Ngxs, NgxsModule, ReduxDevtoolsPluginModule} from 'ngxs';
import { AuthStore } from './auth.store';
import { LoginComponent } from './components/login/login.component';
import { ROPCService } from './ropc.service';
import { AuthService } from './auth.service';
import {CommonModule} from "@angular/common";
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule,
  MatInputModule
} from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AuthGuard} from "./auth.guard";
import {environment} from "@env/environment";

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['http://localhost:8080/auth'],
        sendAccessToken: true
      }
    }),
    // NgxsModule.forRoot([AuthStore]),
  ],
  declarations: [LoginComponent],
  entryComponents: [LoginComponent],
  providers: [AuthStore, ROPCService, AuthService, AuthGuard]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [{ provide: APP_INITIALIZER, useFactory: initializeAuth, deps: [OAuthService, Ngxs], multi: true }]
    };
  }
}
