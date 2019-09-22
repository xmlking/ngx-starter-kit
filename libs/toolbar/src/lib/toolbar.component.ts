import { Component, Input, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthState } from '@ngx-starter-kit/auth';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'ngx-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Select(AuthState.profile) profile$: Observable<any>;
  @Input() quickpanel: MatSidenav;
  @Input() sidenav: MatSidenav;
  isFullscreen = false;

  constructor() {}

  ngOnInit() {}
}
