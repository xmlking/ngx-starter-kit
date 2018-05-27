import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '@default/core';

@Component({
  selector: 'ngx-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  constructor(public _pageTitleService: PageTitleService) {}

  ngOnInit(): void {
    this._pageTitleService.title = '';
  }
}
