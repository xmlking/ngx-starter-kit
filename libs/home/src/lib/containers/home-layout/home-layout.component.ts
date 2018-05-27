import { Component, OnInit } from '@angular/core';
import { routerTransition } from '@ngx-starter-kit/animations';

@Component({
  selector: 'ngx-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
  animations: [routerTransition]
})
export class HomeLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onDeactivate() {
    console.log('in TODO onDeactivate scrollTop');
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  }
}
