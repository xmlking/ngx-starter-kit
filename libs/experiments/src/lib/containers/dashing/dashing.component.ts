// http://dashingdemo.herokuapp.com/sample
// https://fluin.io/blog/things-I-wish-I-knew-about-CDK-drag-drop
// https://stackblitz.com/edit/drag-drop-dashboard?file=src%2Fapp%2Fdashboard%2Fdashboard.component.ts
import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import { CdkDropList, CdkDragDrop, CdkDragEnter, moveItemInArray } from '@angular/cdk/drag-drop';
import { Crumb } from '@ngx-starter-kit/breadcrumbs';
const COLORS = [
  '#ea4335',
  '#4285f4',
  '#fbbc04',
  '#34a853',
  '#fa7b17',
  '#f538a0',
  '#a142f4',
  '#24c1e0',
  '#9aa0a6',
  '#5195ea',
  '#e25142',
  '#f5c518',
  '#41af6a',
  '#f6aea9',
  '#a50e0e',
  '#aecbfa',
  '#174ea6',
  '#fde293',
  '#a8dab5',
  '#0d652d',
  '#fdc69c',
  '#fba9d6',
  '#c92786',
  '#d7aefb',
  '#8430ce',
  '#a1e4f2',
  '#007b83',
  '#e8eaed',
  '#b9d4f6',
  '#f3b9b3',
  '#fbe7a2',
  '#b3dfc3',
];

function getColor() {
  return COLORS[Math.floor(Math.random() * 32)];
}

@Component({
  selector: 'ngx-dashing',
  templateUrl: './dashing.component.html',
  styleUrls: ['./dashing.component.scss'],
})
export class DashingComponent implements AfterViewInit {
  crumbs: ReadonlyArray<Crumb> = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Experiments', link: '/dashboard/experiments' },
    { name: 'Dashing' },
  ];
  @ViewChildren(CdkDropList) dropsQuery: QueryList<CdkDropList>;

  drops: CdkDropList[];

  /** Based on the screen size, switch from standard to one column per row */
  cards = [
    { title: 'Card 1', cols: 2, rows: 2, color: getColor() },
    { title: 'Card 2', cols: 1, rows: 1, color: getColor() },
    { title: 'Card 3', cols: 3, rows: 1, color: getColor() },
    { title: 'Card 4', cols: 1, rows: 1, color: getColor() },
    { title: 'Card 5', cols: 1, rows: 1, color: getColor() },
    { title: 'Card 6', cols: 1, rows: 1, color: getColor() },
    { title: 'Card 7', cols: 1, rows: 1, color: getColor() },
    { title: 'Card 8', cols: 1, rows: 1, color: getColor() },
    { title: 'Card 9', cols: 1, rows: 3, color: getColor() },
    { title: 'Card 10', cols: 1, rows: 1, color: getColor() },
    { title: 'Card 11', cols: 1, rows: 1, color: getColor() },
    { title: 'Card 12', cols: 2, rows: 1, color: getColor() },
    { title: 'Card 13', cols: 1, rows: 1, color: getColor() },
    { title: 'Card 14', cols: 1, rows: 1, color: getColor() },
    { title: 'Card 15', cols: 1, rows: 2, color: getColor() },
    { title: 'Card 16', cols: 2, rows: 1, color: getColor() },
    { title: 'Card 17', cols: 1, rows: 1, color: getColor() },
    { title: 'Card 18', cols: 2, rows: 1, color: getColor() },
    { title: 'Card 19', cols: 1, rows: 1, color: getColor() },
    { title: 'Card 20', cols: 1, rows: 1, color: getColor() },
    { title: 'Card 21', cols: 1, rows: 1, color: getColor() },
    /* { title: 'Card 22', cols: 1, rows: 1, color: getColor() },
    { title: 'Card 23', cols: 1, rows: 1, color: getColor() },
    { title: 'Card 24', cols: 1, rows: 1, color: getColor() },
    { title: 'Card 25', cols: 1, rows: 1, color: getColor() },
    { title: 'Card 26', cols: 1, rows: 1, color: getColor() },
    { title: 'Card 27', cols: 1, rows: 1, color: getColor() },
    { title: 'Card 28', cols: 1, rows: 1, color: getColor() },
    { title: 'Card 29', cols: 1, rows: 1, color: getColor() } */
  ];
  entered($event: CdkDragEnter) {
    console.log($event.item.data, $event.container.data);
    moveItemInArray(this.cards, $event.item.data, $event.container.data);
  }
  entered2($event: CdkDragEnter) {
    console.log($event.item.data, $event.container.data);
    moveItemInArray(this.cards, $event.item.data, $event.container.data);
  }

  ngAfterViewInit() {
    this.dropsQuery.changes.subscribe(() => {
      this.drops = this.dropsQuery.toArray();
    });
    Promise.resolve().then(() => {
      this.drops = this.dropsQuery.toArray();
      console.log(this.drops);
    });
  }
}
