import { Component, Input, OnInit } from '@angular/core';
import { ToolBarHelpers } from './toolbar.helpers';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthState } from '@nx-starter-kit/auth';

@Component({
  selector: 'nxtk-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Select(AuthState.profile) profile$: Observable<any>;

  @Input('quickpanel') quickpanel: any;
  @Input('sidenav') sidenav: any;
  isFullscreen = false;
  toolbarHelpers = ToolBarHelpers;

  constructor() {}

  ngOnInit() {}
}
