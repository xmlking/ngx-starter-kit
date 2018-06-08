import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@ngx-starter-kit/animations';
// import * as Trianglify from 'trianglify';
declare var Trianglify: any;
import { fromEvent, Subject, Subscription } from 'rxjs';
import 'rxjs/add/observable/fromEvent';
import { map, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ngx-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy, AfterViewInit {
  private _destroyed = new Subject();

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  @ViewChild('trianglify') trianglifyCanvasRef: ElementRef;
  color = 'YlGnBu'; // 'random'
  private _sub: Subscription;
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    fromEvent<Event>(window, 'resize')
      .pipe(
        takeUntil(this._destroyed),
        debounceTime(100),
        map(event => [(<Window>event.target).innerWidth, (<Window>event.target).innerHeight]),
        distinctUntilChanged()
      )
      .subscribe(res => {
        // setTimeout(() => {this.renderCanvas() }, 1000)
        this.renderCanvas();
      });
  }

  ngOnDestroy() {
    this._destroyed.next();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.renderCanvas();
    }, 500);
  }

  renderCanvas() {
    if (!this.elementRef.nativeElement.parentNode) return;
    const width = this.elementRef.nativeElement.children[0].offsetWidth;
    // const height = this.elementRef.nativeElement.children[0].offsetHeight;
    const height = this.elementRef.nativeElement.parentNode.offsetHeight;

    const pattern = Trianglify({
      cell_size: width / 50 + Math.random() * 100,
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
