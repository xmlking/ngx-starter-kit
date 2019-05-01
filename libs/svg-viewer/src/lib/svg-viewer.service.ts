import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of , Observable } from 'rxjs';
import { catchError, finalize, map, share } from 'rxjs/operators';
import { SvgViewerConfig } from './svg-viewer.config';

/** @dynamic */
@Injectable()
export class SvgViewerService {
  private static cache: Map<string, SVGElement>;
  private static inProgressReqs: Map<string, Observable<SVGElement>>;

  private static baseUrl: string;

  constructor(@Optional() config: SvgViewerConfig, private http: HttpClient) {
    if (config && !SvgViewerService.baseUrl) {
      this.setBaseUrl(config);
    }

    if (!SvgViewerService.cache) {
      SvgViewerService.cache = new Map<string, SVGElement>();
    }

    if (!SvgViewerService.inProgressReqs) {
      SvgViewerService.inProgressReqs = new Map<string, Observable<SVGElement>>();
    }
  }

  getSVG(url: string, cache: boolean = true): Observable<SVGElement> {
    const absUrl = this.getAbsoluteUrl(url);

    // Return cached copy if it exists
    if (cache && SvgViewerService.cache.has(absUrl)) {
      return of(this.cloneSVG(SvgViewerService.cache.get(absUrl)));
    }

    // Return existing fetch observable
    if (SvgViewerService.inProgressReqs.has(absUrl)) {
      return SvgViewerService.inProgressReqs.get(absUrl);
    }

    // Otherwise, make the HTTP call to fetch
    const req = this.http.get(absUrl, { responseType: 'text' }).pipe(
      catchError((err: any) => err),
      finalize(() => SvgViewerService.inProgressReqs.delete(absUrl)),
      share(),
      map((svgText: string) => {
        const svgEl = this.svgElementFromString(svgText);
        SvgViewerService.cache.set(absUrl, svgEl);
        return this.cloneSVG(svgEl);
      }),
    );

    SvgViewerService.inProgressReqs.set(absUrl, req);

    return req;
  }

  setBaseUrl(config: SvgViewerConfig): void {
    if (config) {
      SvgViewerService.baseUrl = config.baseUrl;
    }
  }

  getAbsoluteUrl(url: string): string {
    // Prepend user-configured base if present and URL doesn't seem to have its own
    if (SvgViewerService.baseUrl && !/^https?:\/\//i.test(url)) {
      url = SvgViewerService.baseUrl + url.slice(url.indexOf('assets/'));

      // Convert leading "//" to "/" to prevent a malformed URL
      // See https://github.com/arkon/ng-inline-svg/issues/50
      if (url.indexOf('//') === 0) {
        url = url.substring(1);
      }
    }

    return url;
  }

  private svgElementFromString(str: string): SVGElement | never {
    const div: HTMLElement = document.createElement('DIV');
    div.innerHTML = str;

    const svg = div.querySelector('svg') as SVGElement;

    if (!svg) {
      throw new Error('No SVG found in loaded contents');
    }

    return svg;
  }

  private cloneSVG(svg: SVGElement): SVGElement {
    return svg.cloneNode(true) as SVGElement;
  }
}
