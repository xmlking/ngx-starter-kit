import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthState } from '@nx-starter-kit/auth';
import { Crumb } from '@nx-starter-kit/breadcrumbs';

@Component({
  selector: 'nxtk-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  @Select(AuthState.isLoggedIn) isLoggedIn$: Observable<boolean>;
  @Select(AuthState.profile) profile$: Observable<any>;
  crumbs: Crumb[] = [{ name: 'Dashboard', link: '/dashboard' }];
  constructor(private oauthService: OAuthService) {}

  ngOnInit() {}
}
