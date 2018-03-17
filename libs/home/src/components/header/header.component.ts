import { Component, OnInit } from '@angular/core';
import { Ngxs, Select } from 'ngxs';
import { Observable } from 'rxjs/Observable';
import { Login, Logout } from '@nx-starter-kit/auth';

@Component({
  selector: 'app-home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Select('auth.isLoggedIn') isLoggedIn$: Observable<boolean>;

  navigation = [
    { link: 'about', label: 'About' },
    { link: 'blog', label: 'Blog' },
    { link: 'features', label: 'Features' }
  ];

  constructor(private ngxs: Ngxs) {}

  ngOnInit() {}

  public login() {
    this.ngxs.dispatch(new Login());
  }

  public logout() {
    this.ngxs.dispatch(new Logout());
  }

  public signup() {}
}
