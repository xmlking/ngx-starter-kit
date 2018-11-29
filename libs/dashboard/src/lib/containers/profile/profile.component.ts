import { Component, OnInit } from '@angular/core';
import { Crumb } from '@ngx-starter-kit/breadcrumbs';
import { Store } from '@ngxs/store';
import { AuthState } from '@ngx-starter-kit/auth';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  crumbs: ReadonlyArray<Crumb> = [{ name: 'Dashboard', link: '/dashboard' }, { name: 'Profile' }];
  profile: any;
  constructor(private store: Store) {}

  ngOnInit() {
    this.profile = this.store.selectSnapshot(AuthState.profile);
  }
}
