import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'svg-viewer',
  template: '<div class="svg-viewer" aria-hidden="true"></div>'
})
export class SvgViewerComponent implements OnInit {
  @Input() src: string;
  @Input() scaleToContainer: boolean;

  constructor(private elementRef: ElementRef, private http: HttpClient) {}

  static getAbsolutePathFromSrc(src: string) {
    return src.slice(src.indexOf('assets/') - 1);
  }

  ngOnInit() {
    this.fetchAndInlineSvgContent(this.src);
  }

  private inlineSvgContent(template) {
    this.elementRef.nativeElement.innerHTML = template;

    if (this.scaleToContainer) {
      const svg = this.elementRef.nativeElement.querySelector('svg');
      svg.setAttribute('width', '100%');
      svg.setAttribute('height', '100%');
      svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    }
  }

  private fetchAndInlineSvgContent(path: string): void {
    const svgAbsPath = SvgViewerComponent.getAbsolutePathFromSrc(path);
    this.http.get(svgAbsPath, { responseType: 'text' }).subscribe((svgResponse: any) => {
      this.inlineSvgContent(svgResponse);
    });
  }
}
