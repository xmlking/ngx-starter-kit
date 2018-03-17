import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Select } from 'ngxs';
import { Observable } from 'rxjs/Observable';
import { OAuthService } from 'angular-oauth2-oidc';

// import {fadeInAnimation} from "../../route.animation";

@Component({
  selector: 'nxtk-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
  // host: {
  //   '[@fadeInAnimation]': 'true'
  // },
  // animations: [ fadeInAnimation ]
})
export class OverviewComponent implements OnInit, AfterViewInit {
  @Select('auth.isLoggedIn') isLoggedIn$: Observable<boolean>;
  @Select('auth.profile') profile$: Observable<any>;

  constructor(private oauthService: OAuthService) {}

  ngOnInit() {}

  ngAfterViewInit() {}

  async testSilentRefresh() {
    try {
      const info = await this.oauthService.silentRefresh();
      console.log('silent refresh ok', info);
    } catch (err) {
      console.error('silent refresh error', err);
    }
  }

  async testRefreshToken() {
    try {
      const info = await this.oauthService.refreshToken();
      console.log('refresh ok', info);
    } catch (err) {
      console.error('refresh error', err);
    }
  }

  getProfile() {
    console.log(this.oauthService.getIdentityClaims());
  }
}
