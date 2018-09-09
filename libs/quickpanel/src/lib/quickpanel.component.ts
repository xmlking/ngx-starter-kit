import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'ngx-quickpanel',
  templateUrl: './quickpanel.component.html',
  styleUrls: ['./quickpanel.component.scss'],
})
export class QuickpanelComponent implements OnInit {
  today: number = Date.now();

  events = [
    {
      id: 'id',
      title: 'Business Meeting',
      time: '05:00 PM',
      state: 'state',
    },
    {
      id: 'id',
      title: 'Ask for a Vacation',
      time: '05:00 PM',
      state: 'state',
    },
    {
      id: 'id',
      title: 'Dinner with Micheal',
      time: '05:00 PM',
      state: 'state',
    },
    {
      id: 'id',
      title: 'Deadline for Project ABC',
      time: '05:00 PM',
      state: 'state',
    },
  ];

  todolists = [
    {
      id: 'id',
      title: 'Get to know Angular more',
      time: 'Added:4 days ago',
    },
    {
      id: 'id',
      title: 'Configure new Router',
      time: 'Added:4 days ago',
    },
    {
      id: 'id',
      title: 'Invite Joy to play Carroms',
      time: 'Added:4 days ago',
    },
    {
      id: 'id',
      title: 'Check SRS of Project X',
      time: 'Added:4 days ago',
    },
  ];

  messages = [
    { from: 'Catherin', img: 'assets/img/avatars/4.jpg', subject: 'Shopping', content: 'hi there??' },
    { from: 'Jack', img: 'assets/img/avatars/16.jpg', subject: 'Function', content: 'yes' },
    { from: 'Karina', img: 'assets/img/avatars/1.jpg', subject: 'Get together', content: 'nice' },
    { from: 'Micheal', img: 'assets/img/avatars/11.jpg', subject: 'Trip', content: 'ya.. I will' },
    { from: 'Ashik', img: 'assets/img/avatars/19.jpg', subject: 'Meeting', content: 'Time??' },
    { from: 'Joy', img: 'assets/img/avatars/10.jpg', subject: 'Party', content: 'Lets enjoy' },
  ];

  constructor() {}

  ngOnInit() {}
}
