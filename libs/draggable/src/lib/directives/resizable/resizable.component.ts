import {
  Component,
  ElementRef,
  Renderer2,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  AfterViewInit,
  HostBinding,
} from '@angular/core';

import {
  Store,
  IPoint,
  IOptions,
  ISize,
  IResizeState,
  IResizeEvent,
  IRectangle,
  defaultBound,
} from './resizable.store';
import { resizeReducer } from './resizable.reducer';
import { MOUSE_DOWN, RESIZE_STOP, RESIZE } from './resizable.actions';
import { ResizableState } from './resizable.state';

@Component({
  // tslint:disable-next-line
  selector: '[resizable]',
  providers: [Store],
  template: `
    <ng-content></ng-content>
    <div
      *ngFor="let dir of directions"
      class="ngr-grabber"
      [ngClass]="'ngr-' + dir"
      (mousedown)="onMouseDown($event, dir)"
      (touchstart)="onMouseDown($event, dir)"
    ></div>
  `,
  styleUrls: ['resizable.component.css'],
  // tslint:disable-next-line
  host: {
    '(document: mouseup)': 'onMouseUp($event)',
    '(document: touchend)': 'onMouseUp($event)',
    '(document: mousemove)': 'onMouseMove($event)',
    '(document: touchmove)': 'onMouseMove($event)',
  },
})
export class ResizableComponent implements OnInit, OnChanges {
  // Resize start event.
  @Output()
  resizeStart = new EventEmitter<IResizeEvent>();
  // Resizing event.
  @Output()
  resizing = new EventEmitter<IResizeEvent>();
  // Resize end event.
  @Output()
  resizeEnd = new EventEmitter<IResizeEvent>();

  // x coordinate of the element.
  @Input()
  x: number;
  // y coordinate of the element.
  @Input()
  y: number;
  // Width of the element.
  @Input()
  width?: number;
  // Height of the element.
  @Input()
  height?: number;
  // Minimum width.
  @Input()
  minWidth = 350;
  // Minimum height.
  @Input()
  minHeight = 400;
  // Maximum width.
  @Input()
  maxWidth = Infinity;
  // Maximum height.
  @Input()
  maxHeight = Infinity;

  // Disable the resize.
  @Input()
  disableResize = false;
  // An array which contains the resize directions.
  @Input()
  directions: string[] = ['bottom', 'right'];
  // Resize in a grid.
  @Input()
  grid: ISize = { width: 1, height: 1 };
  // Bound the resize.
  @Input()
  bound: IRectangle = null;
  // Resize ratio.
  @Input()
  ratio: number = null;

  constructor(
    private _el: ElementRef,
    private _store: Store,
    private _renderer: Renderer2,
    private rState: ResizableState,
  ) {}

  ngOnInit() {
    this._renderer.addClass(this._el.nativeElement, 'ngresizable');
    const css = getComputedStyle(this._el.nativeElement);
    this.width = css.width ? parseInt(css.width, 10) : this.width;
    this.height = css.height ? parseInt(css.height, 10) : this.height;
    this.minWidth = css.minWidth ? parseInt(css.minWidth, 10) : this.minWidth;
    this.minHeight = css.minHeight ? parseInt(css.minHeight, 10) : this.minHeight;
    this.maxWidth = css.maxWidth ? parseInt(css.maxWidth, 10) : this.maxWidth;
    this.maxHeight = css.maxHeight ? parseInt(css.maxHeight, 10) : this.maxHeight;
    // console.log(this.width);
    // console.log(this.height);
    // console.log(this.minWidth);
    // console.log(this.minHeight);
    // console.log(this.maxWidth);
    // console.log(this.maxHeight);

    this._store.addReducer(resizeReducer);
    this.setSize({ width: this.width, height: this.height }, { x: this.x, y: this.y });
  }

  ngOnChanges(c: any) {
    this.setSize({ width: this.width, height: this.height }, { x: this.x, y: this.y });
  }

  onMouseMove(e: any) {
    if (e.touches) {
      e = e.touches[0];
    }
    if (this._state.isResizing) {
      this.emitAction(RESIZE, {
        x: e.clientX,
        y: e.clientY,
      });
      const csize = this._state.currentSize;
      const cpos = this._state.currentPosition;
      this.setSize(csize, cpos);
      this.emitEvent(this.resizing);
    }
  }

  onMouseDown(e: any, dir: any) {
    if (e.touches) {
      e = e.touches[0];
    }
    this.emitAction(
      MOUSE_DOWN,
      {
        x: e.clientX,
        y: e.clientY,
      },
      {
        x: this._el.nativeElement.offsetLeft,
        y: this._el.nativeElement.offsetTop,
      },
      {
        width: this._el.nativeElement.offsetWidth,
        height: this._el.nativeElement.offsetHeight,
      },
      dir,
    );
    this.emitEvent(this.resizeStart);
  }

  onMouseUp(e: any) {
    this.emitAction(RESIZE_STOP, { x: 0, y: 0 }, { x: 0, y: 0 });
    this.emitEvent(this.resizeEnd);
  }

  private emitAction(
    action: String,
    mousePosition: IPoint,
    startPosition?: IPoint,
    startSize?: ISize,
    startDirection?: string,
  ) {
    const options: IOptions = {
      minSize: { width: this.minWidth, height: this.minHeight },
      maxSize: { width: this.maxWidth, height: this.maxHeight },
      grid: this.grid,
      ratio: this.ratio,
      disabled: this.disableResize,
      directions: this.directions,
      bound: this.bound || defaultBound,
    };
    this._store.emitAction(action, mousePosition, startPosition, options, startSize, startDirection);
  }

  private emitEvent(output: EventEmitter<IResizeEvent>) {
    output.next({
      position: this._state.currentPosition,
      size: this._state.currentSize,
      direction: this._state.direction,
    });
  }

  private get _state(): IResizeState {
    return this._store.state;
  }

  private setSize(size: ISize, pos: IPoint) {
    this.width = size.width;
    this.height = size.height;
    this.x = pos.x;
    this.y = pos.y;
    this._renderer.setStyle(this._el.nativeElement, 'width', this.width + 'px');
    this._renderer.setStyle(this._el.nativeElement, 'height', this.height + 'px');
    this._renderer.setStyle(this._el.nativeElement, 'left', this.x + 'px');
    this._renderer.setStyle(this._el.nativeElement, 'top', this.y + 'px');
  }
}
