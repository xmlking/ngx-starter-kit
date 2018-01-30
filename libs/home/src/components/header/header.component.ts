import { Component, OnInit } from '@angular/core';

const BLOG = 'blog';
const ABOUT = 'about';

export const SECTIONS = {
  [BLOG]: 'Blog',
  [ABOUT]: 'About'
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
