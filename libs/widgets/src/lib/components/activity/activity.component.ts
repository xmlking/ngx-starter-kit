import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nxtk-activity',
  templateUrl: './activity.component.html'
})
export class ActivityComponent implements OnInit {
  @Input('feeds') feeds: any[];
  @Input('title') title = 'Recent Activities';
  @Input('subTitle') subTitle = 'Your daily news feed';

  isLoading = false;

  constructor() {}

  ngOnInit() {}

  reload() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
