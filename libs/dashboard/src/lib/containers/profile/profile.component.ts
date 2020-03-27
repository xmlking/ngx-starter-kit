import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthState } from '@ngx-starter-kit/auth';
import { Crumb } from '@ngx-starter-kit/breadcrumbs';
import { ProfileState } from '@ngx-starter-kit/core';
import { Profile } from '@ngx-starter-kit/models';
import { Select } from '@ngxs/store';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Observable } from 'rxjs';

@AutoUnsubscribe()
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
  @Select(ProfileState.error) error$: Observable<string>;
  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.error$.subscribe((err) => this.snackBar.open(`Profile Error: ${err}`, '', { duration: 3000 }));
  }

  ngOnDestroy() {}
}
