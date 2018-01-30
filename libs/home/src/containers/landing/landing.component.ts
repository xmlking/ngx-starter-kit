import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../../../../apps/default/src/app/core/services/page-title/page-title.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  constructor(public _pageTitleService: PageTitleService) {}

  ngOnInit(): void {
    this._pageTitleService.title = '';
  }
}
