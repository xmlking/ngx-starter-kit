import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Crumb } from '@ngx-starter-kit/breadcrumbs';
import { Select, Store } from '@ngxs/store';
import { AuthState } from '@ngx-starter-kit/auth';
// import { AuthState } from '@ngx-starter-kit/oidc';
import { ProfileState } from '@ngx-starter-kit/core';
import { Observable } from 'rxjs';
import { Profile } from '@ngx-starter-kit/models';
import { untilDestroy } from '@ngx-starter-kit/ngx-utils';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit, OnDestroy {
  crumbs: ReadonlyArray<Crumb> = [{ name: 'Dashboard', link: '/dashboard' }, { name: 'Profile' }];

  @Select(AuthState.profile) oidcProfile$: Observable<any>;
  @Select(ProfileState.profile) appProfile$: Observable<Profile>;
  @Select(ProfileState.loading) loading$: Observable<boolean>;
  @Select(ProfileState.error) error$: Observable<boolean>;
  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.error$
      .pipe(untilDestroy(this))
      .subscribe(err => this.snackBar.open(`Profile Error: ${err}`, '', { duration: 3000 }));
  }

  ngOnDestroy() {}
}
