import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of as observableOf, Observable } from 'rxjs';
import { catchError, finalize, map, share } from 'rxjs/operators';
import { SvgViewerConfig } from './svg-viewer.config';

@Injectable()
export class SvgViewerService {
  private static _cache: Map<string, SVGElement>;
  private static _inProgressReqs: Map<string, Observable<SVGElement>>;

  private static _baseUrl: string;

  constructor(@Optional() config: SvgViewerConfig, private _http: HttpClient) {
    if (config && !SvgViewerService._baseUrl) {
      this.setBaseUrl(config);
    }

    if (!SvgViewerService._cache) {
      SvgViewerService._cache = new Map<string, SVGElement>();
    }

    if (!SvgViewerService._inProgressReqs) {
      SvgViewerService._inProgressReqs = new Map<string, Observable<SVGElement>>();
    }
  }

  getSVG(url: string, cache: boolean = true): Observable<SVGElement> {
    const absUrl = this.getAbsoluteUrl(url);

    // Return cached copy if it exists
    if (cache && SvgViewerService._cache.has(absUrl)) {
      return observableOf(this._cloneSVG(SvgViewerService._cache.get(absUrl)));
    }

    // Return existing fetch observable
    if (SvgViewerService._inProgressReqs.has(absUrl)) {
      return SvgViewerService._inProgressReqs.get(absUrl);
    }

    // Otherwise, make the HTTP call to fetch
    const req = this._http.get(absUrl, { responseType: 'text' }).pipe(
      catchError((err: any) => err),
      finalize(() => SvgViewerService._inProgressReqs.delete(absUrl)),
      share(),
      map((svgText: string) => {
        const svgEl = this._svgElementFromString(svgText);
        SvgViewerService._cache.set(absUrl, svgEl);
        return this._cloneSVG(svgEl);
      }),
    );

    SvgViewerService._inProgressReqs.set(absUrl, req);

    return req;
  }

  setBaseUrl(config: SvgViewerConfig): void {
    if (config) {
      SvgViewerService._baseUrl = config.baseUrl;
    }
  }

  getAbsoluteUrl(url: string): string {
    // Prepend user-configured base if present and URL doesn't seem to have its own
    if (SvgViewerService._baseUrl && !/^https?:\/\//i.test(url)) {
      url = SvgViewerService._baseUrl + url.slice(url.indexOf('assets/'));

      // Convert leading "//" to "/" to prevent a malformed URL
      // See https://github.com/arkon/ng-inline-svg/issues/50
      if (url.indexOf('//') === 0) {
        url = url.substring(1);
      }
    }

    return url;
  }

  private _svgElementFromString(str: string): SVGElement | never {
    const div: HTMLElement = document.createElement('DIV');
    div.innerHTML = str;

    const svg = div.querySelector('svg') as SVGElement;

    if (!svg) {
      throw new Error('No SVG found in loaded contents');
    }

    return svg;
  }

  private _cloneSVG(svg: SVGElement): SVGElement {
    return svg.cloneNode(true) as SVGElement;
  }
}
