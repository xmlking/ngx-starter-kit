import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { SvgViewerService } from './svg-viewer.service';

@Component({
  selector: 'svg-viewer',
  template: '<div class="svg-viewer" aria-hidden="true"></div>',
  providers: [SvgViewerService],
})
export class SvgViewerComponent implements OnInit {
  @Input()
  src: string;
  @Input()
  scaleToContainer: boolean;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private svgViewerService: SvgViewerService,
  ) {}

  ngOnInit() {
    this.fetchAndInlineSvgContent(this.src);
  }

  private inlineSvgContent(svg: SVGElement) {
    const el = this.elementRef.nativeElement;
    el.innerHTML = '';

    if (this.scaleToContainer) {
      this.renderer.setAttribute(svg, 'width', '100%');
      this.renderer.setAttribute(svg, 'height', '100%');
      this.renderer.setAttribute(svg, 'preserveAspectRatio', 'xMidYMid meet');
    }
    this.renderer.appendChild(el, svg);
  }

  private fetchAndInlineSvgContent(path: string): void {
    this.svgViewerService.getSVG(path).subscribe((svgResponse: SVGElement) => {
      this.inlineSvgContent(svgResponse);
    });
  }
}
