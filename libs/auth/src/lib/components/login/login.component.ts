import { AfterViewInit, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OAuthService } from '@xmlking/angular-oauth2-oidc-all';

import { ROPCService } from '../../ropc.service';
import { ChangeAuthMode, AuthMode } from '../../auth.actions';

/** @dynamic */
@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public infoMsg: string;
  public errorMsg: string;
  inputType = 'password';
  visible = false;
  loginForm: FormGroup;

  constructor(
    fb: FormBuilder,
    private store: Store,
    private cd: ChangeDetectorRef,
    private oauthService: OAuthService,
    private ropcService: ROPCService,
    @Inject(MAT_DIALOG_DATA) public data: { infoMsg: string },
    public dialogRef: MatDialogRef<LoginComponent>,
  ) {
    if (data) {
      this.infoMsg = data.infoMsg;
    }
    this.loginForm = fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      rememberMe: false,
    });
  }

  toggleInputType() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }

  initSSO() {
    this.store.dispatch(new ChangeAuthMode(AuthMode.CodeFLow)).subscribe(() => {
      // this.oauthService.initImplicitFlow();
      this.oauthService.initAuthorizationCodeFlow();
      console.log('initSSO');
    });
  }

  onSubmit(values) {
    if (this.loginForm.invalid) {
      return;
    }

    this.store.dispatch(new ChangeAuthMode(AuthMode.PasswordFlow)).subscribe(async () => {
      try {
        const profile = await this.ropcService.login(values.username, values.password);
        this.dialogRef.close(profile);
      } catch (error /*: HttpErrorResponse*/) {
        if (error.error && error.error.error_description !== undefined) {
          this.errorMsg = error.error.error_description; // 'The user credentials is incorrect';
        } else {
          this.errorMsg = 'Login Failed';
        }
      }
    });
  }
}
