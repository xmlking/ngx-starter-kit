import { Component, OnInit } from '@angular/core';
import { Crumb } from '@ngx-starter-kit/breadcrumbs';
import { Select, Store } from '@ngxs/store';
import { AuthState } from '@ngx-starter-kit/auth';
// import { AuthState } from '@ngx-starter-kit/oidc';
import { ProfileState } from '@ngx-starter-kit/core';
import { Observable } from 'rxjs';
import { Profile } from '@ngx-starter-kit/models';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  crumbs: ReadonlyArray<Crumb> = [{ name: 'Dashboard', link: '/dashboard' }, { name: 'Profile' }];

  @Select(AuthState.profile) oidcProfile$: Observable<any>;
  @Select(ProfileState.profile) appProfile$: Observable<Profile>;
  @Select(ProfileState.loading) loading$: Observable<boolean>;
  constructor(private store: Store) {}

  ngOnInit() {}
}
