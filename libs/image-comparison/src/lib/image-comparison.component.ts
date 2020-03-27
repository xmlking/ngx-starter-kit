import {
  AfterViewInit,
  Attribute,
  Component,
  ContentChildren,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import { ImageComparison } from './image-comparison';

@Component({
  selector: 'ngx-image-comparison',
  templateUrl: './image-comparison.component.html',
  styleUrls: ['./image-comparison.component.scss'],
  // tslint:disable-next-line: use-component-view-encapsulation
  encapsulation: ViewEncapsulation.None,
})
export class ImageComparisonComponent implements AfterViewInit, OnInit {
  @ContentChildren('comparisonImage')
  comparisonImages: QueryList<any>;

  // @Input() startPosition: number;

  constructor(
    @Attribute('startPosition') public readonly startPosition: number,
    private hostElement: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.comparisonImages.forEach((element: any) => {
      this.renderer.addClass(element.nativeElement, 'comparison-image');
    });
    this.createImageComparison();
  }

  private createImageComparison(): any {
    const comparison = new ImageComparison({
      container: this.hostElement.nativeElement,
      startPosition: this.startPosition || 50,
      data: this.comparisonImages.map((element: any) => {
        return {
          image: element.nativeElement,
          label: element.nativeElement.dataset.label,
        };
      }),
    });
  }
}
