import { Component, OnInit, AfterViewInit } from '@angular/core';

// import {fadeInAnimation} from "../../route.animation";

@Component({
  selector: 'sumo-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
  // host: {
  //   '[@fadeInAnimation]': 'true'
  // },
  // animations: [ fadeInAnimation ]
})
export class OverviewComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}
}
