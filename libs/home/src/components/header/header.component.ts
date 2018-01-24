import { Component, OnInit } from '@angular/core';

const CDK = 'guides';
const COMPONENTS = 'blog';

export const SECTIONS = {
  [COMPONENTS]: 'Blog',
  [CDK]: 'Guides',
};
const SECTIONS_KEYS = Object.keys(SECTIONS);

@Component({
  selector: 'app-home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  get sections() {
    return SECTIONS;
  }

  get sectionKeys() {
    return SECTIONS_KEYS;
  }
}
