import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ROPCService } from '../../ropc.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';
import { Store } from 'ngxs';
import { ChangeAuthMode, AuthMode } from '../../auth.actions';

@Component({
  selector: 'nxtk-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public infoMsg: String;
  public errorMsg: String;
  loginForm: FormGroup;

  constructor(
    fb: FormBuilder,
    private store: Store,
    private oauthService: OAuthService,
    private ropcService: ROPCService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: { infoMsg: string },
    public dialogRef: MatDialogRef<LoginComponent>
  ) {
    if (data) {
      this.infoMsg = data.infoMsg;
    }
    this.loginForm = fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      rememberMe: false
    });
  }

  initSSO() {
    this.store.dispatch(new ChangeAuthMode(AuthMode.ImplicitFLow)).subscribe(() => {
      this.oauthService.initImplicitFlow();
      console.log('initSSO');
    });
  }

  onSubmit(values) {
    if (this.loginForm.invalid) return;

    this.store.dispatch(new ChangeAuthMode(AuthMode.PasswordFlow)).subscribe(async () => {
      try {
        const profile = await this.ropcService.login(values.username, values.password);
        this.dialogRef.close(profile);
      } catch (error /*: HttpErrorResponse*/) {
        if (error.status === 401) {
          this.errorMsg = error.error.error_description; //'The user credentials is incorrect';
        }
      }
    });
  }
}
