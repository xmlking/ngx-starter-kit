import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '@ngx-starter-kit/core';

@Component({
  selector: 'ngx-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor(private pageTitleService: PageTitleService) {}

  ngOnInit(): void {
    this.pageTitleService.title = 'Landing Page';
  }
}
