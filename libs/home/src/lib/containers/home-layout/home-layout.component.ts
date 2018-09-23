import { Component, OnInit } from '@angular/core';
import { routerTransition } from '@ngx-starter-kit/animations';
import { PageTitleService } from '@ngx-starter-kit/core';

@Component({
  selector: 'ngx-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
  animations: [routerTransition],
})
export class HomeLayoutComponent implements OnInit {
  constructor(private pageTitleService: PageTitleService) {}

  ngOnInit() {
    this.pageTitleService.title = 'Home';
  }
}
