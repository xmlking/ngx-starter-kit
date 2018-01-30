import { Component, Input, OnInit } from '@angular/core';
import { ToolBarHelpers } from './tool-bar.helpers';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {
  @Input() sidenav;
  @Input() sidebar;
  @Input() drawer;
  @Input() matDrawerShow;

  searchOpen = false;
  toolbarHelpers = ToolBarHelpers;

  constructor() {}

  ngOnInit() {}
}
