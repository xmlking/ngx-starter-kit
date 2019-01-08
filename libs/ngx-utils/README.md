# ngx-utils

same as [@ngrx-utils/store](https://github.com/ngrx-utils/ngrx-utils) without dependency on `@ngrx/store`

**Pipes:** filter, group-by, safeHtml

**Directive:** inViewport, ngLet, routerLinkMatch

## Install

```bash
npm i @ngx-starter-kit/ngx-utils
```

## Usage

### InViewport Directive

> Add `IntersectionObserver` [polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill) to [polyfills.ts](../../apps/webapp/src/polyfills.ts) for `Safari` Support

```html
<div ngxInViewport (inViewport)="showMyElement=true">
  <ng-container *ngIf="showMyElement"> <div>Hello World!</div> </ng-container>
</div>
```

> If `entry.intersectionRatio >= 0.5` ==> `Inside Viewport` > <br/>
> If `entry.intersectionRatio < 0.5` ==> `Outside Viewport`

#### Flags

1. Trigger only One Time : `[oneTime]="true"` usecase: image loading.
2. Server-Side Rendering : By default, loads the elements on the server.
   > If you do not want to pre-render the elements in server, you can set `preRender to false. i.e.,`[preRender]="false"`

### Viewport Service

> You can use `ViewportService` itself in any Component

```typescript
import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { untilDestroy, ViewportService } from '@ngx-starter-kit/ngx-utils';

export class ViewportDemoComponent implements OnInit, OnDestroy {
  public constructor(private element: ElementRef, private viewportService: ViewportService) {}

  public ngOnInit(): void {
    this.viewportService
      .observe(this.element.nativeElement)
      .pipe(untilDestroy(this))
      .subscribe((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          this.show();
        } else {
          this.hide();
        }
      });
  }

  ngOnDestroy() {}

  private show(): void {
    // => Animation
  }

  private hide(): void {
    // <= Animation
  }
}
```

## Publish

```bash
# build
ng build ngx-utils
# replace your npm key
export NPM_TOKEN="00000000-0000-0000-0000-000000000000"
# publish
npm publish dist/libs/ngx-utils --access public
```
