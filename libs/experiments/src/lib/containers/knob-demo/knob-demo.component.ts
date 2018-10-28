import { Component, OnInit } from '@angular/core';
import { Crumb } from '@ngx-starter-kit/breadcrumbs';

@Component({
  selector: 'ngx-knob-demo',
  templateUrl: './knob-demo.component.html',
  styleUrls: ['./knob-demo.component.scss'],
})
export class KnobDemoComponent implements OnInit {
  crumbs: ReadonlyArray<Crumb> = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Experiments', link: '/dashboard/experiments' },
    { name: 'Knob Demo' },
  ];

  value1 = 256;
  options1 = {
    startAngle: 30,
    endAngle: 330,
    unit: 'MB',
    trackColor: 'rgba(162,121,143,1)',
    barColor: 'rgba(102,0,204,.5)',
    trackWidth: 15,
    barWidth: 15,
    subText: {
      enabled: true,
      text: 'RAM used',
    },
    max: 1024,
  };

  value2 = 5.4;
  options2 = {
    skin: {
      type: 'tron',
      width: 5,
      color: '#494B52',
      spaceWidth: 3,
    },
    barColor: '#494B52',
    trackWidth: 30,
    barWidth: 30,
    textColor: '#494B52',
    step: 0.1,
    max: 10,
  };

  value3 = 65;
  options3 = {
    unit: '%',
    readOnly: true,
    subText: {
      enabled: true,
      text: 'CPU used',
      color: 'gray',
      font: 'auto',
    },
    trackWidth: 40,
    barWidth: 25,
    trackColor: '#656D7F',
    barColor: '#2CC185',
  };

  value4 = 70;
  options4 = {
    displayPrevious: true,
    barCap: 25,
    trackWidth: 30,
    barWidth: 20,
    trackColor: 'rgba(255,0,0,.1)',
    prevBarColor: 'rgba(0,0,0,.2)',
    textColor: 'rgba(255,0,0,.6)',
  };

  value5 = 85;
  options5 = {
    scale: {
      enabled: true,
      type: 'lines',
      color: 'gray',
      width: 1,
      quantity: 20,
      height: 8,
    },
    trackWidth: 30,
    barWidth: 30,
    step: 5,
    trackColor: 'rgba(52,152,219,.1)',
    barColor: 'rgba(52,152,219,.5)',
  };

  value6 = 350;
  options6 = {
    min: -1000,
    max: 1000,
    barColor: '#5BC01E',
    trackColor: '#212121',
    trackWidth: 15,
    barWidth: 30,
  };

  value7 = 65;
  options7: any = {
    scale: {
      enabled: true,
      type: 'dots',
      color: 'rgba(255,0,0,.2)',
      width: 2,
      quantity: 50,
      spaceWidth: 10,
    },
    trackWidth: 25,
    barWidth: 40,
    trackColor: 'rgba(0,0,0,.1)',
    dynamicOptions: true,
  };

  value8 = 65;
  options8 = {
    displayInput: false,
    animate: {
      enabled: true,
      duration: 2000,
      ease: 'linear',
    },
    trackColor: 'rgba(33,33,33,.2)',
    barColor: 'rgba(255,221,51,1)',
  };

  value9 = 65;
  options9 = {
    bgColor: '#2C3E50',
    trackWidth: 50,
    barWidth: 30,
    barColor: '#FFAE1A',
    textColor: '#eee',
  };

  value10 = 65;

  value11 = 65;
  options11 = {
    startAngle: 90,
    endAngle: 180,
    displayPrevious: true,
    prevBarColor: 'rgba(255,0,0,.2)',
    trackColor: 'rgba(255,0,0,.2)',
    skin: {
      type: 'tron',
    },
    scale: {
      enabled: true,
      type: 'lines',
      width: 2,
      quantity: 5,
    },
  };

  value12 = 65;
  options12 = {
    skin: {
      type: 'tron',
    },
    size: 300,
    unit: '%',
    barWidth: 40,
    trackColor: 'rgba(255,0,0,.1)',
    prevBarColor: 'rgba(0,0,0,.2)',
    subText: {
      enabled: true,
      text: 'CPU used',
    },
    scale: {
      enabled: true,
      type: 'lines',
      width: 3,
    },
    step: 5,
    displayPrevious: true,
  };

  constructor() {}

  ngOnInit() {}

  changeOptions7() {
    this.value7 = 75;
    this.options7 = {
      trackColor: '#988CE0',
      barColor: 'rgba(18,7,101,.5)',
    };
  }
}

// https://github.com/RadMie/ng-knob/blob/master/demo/demo.js
