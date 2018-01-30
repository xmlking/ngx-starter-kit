import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/material';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  get version() {
    const version = VERSION.full.match(/\d+\.\d+\.\d+/);
    if (version) {
      return version[0];
    }
    return '';
  }
}
