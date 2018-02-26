import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navigation = [
    { link: 'about', label: 'About' },
    { link: 'blog', label: 'Blog' },
    { link: 'features', label: 'Features' },
  ];

  constructor() {}

  ngOnInit() {}

}
