import {AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
// declare var Trianglify: any;
import {ANIMATE_ON_ROUTE_ENTER } from '@nx-starter-kit/animations';
import * as Trianglify from 'trianglify';
// import Trianglify from 'trianglify';
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription"
import 'rxjs/add/observable/fromEvent';
import { fromEvent } from 'rxjs/observable/fromEvent';
import {map, debounceTime, distinctUntilChanged} from "rxjs/operators";


@Component({
  selector: 'nxtk-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy, AfterViewInit {
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  @ViewChild("trianglify") trianglifyCanvasRef: ElementRef;
  color = 'YlGnBu'; // 'random'
  private _sub: Subscription;
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const widthStream = fromEvent<Event>(window, 'resize').pipe(
      debounceTime(100),
      map(event => [(<Window>event.target).innerWidth, (<Window>event.target).innerHeight] ),
      distinctUntilChanged(),
    );

    this._sub = widthStream.subscribe(res => {
      this.renderCanvas()
    })
    // setTimeout(() => {this.renderCanvas() }, 1000)
  }

  ngOnDestroy() {
    this._sub.unsubscribe()
  }

  ngAfterViewInit() {
    setTimeout(() => {this.renderCanvas() }, 500)
  }

  renderCanvas() {
    if(!this.elementRef.nativeElement.parentNode) return;
    const width = this.elementRef.nativeElement.children[0].offsetWidth;
    // const height = this.elementRef.nativeElement.children[0].offsetHeight;
    const height = this.elementRef.nativeElement.parentNode.offsetHeight;

    const pattern = Trianglify({
      cell_size: width/50 + Math.random()*100,
      variance: Math.random(),
      x_colors: this.color,
      // x_colors: 'Blues',
      y_colors: 'match_x',
      palette: Trianglify.colorbrewer,
      color_space: 'lab',
      color_function: false,
      stroke_width: 1.51,
      width: width,
      height: height,
      seed: Math.random()
    });
    pattern.canvas(this.trianglifyCanvasRef.nativeElement);
  }
}
