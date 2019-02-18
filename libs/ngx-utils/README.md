# ngx-utils

same as [@ngrx-utils/store](https://github.com/ngrx-utils/ngrx-utils) without dependency on `@ngrx/store`

**Pipes:** filter, group-by, safeHtml

**Directive:** inViewport, ngLet, routerLinkMatch

## Install

```bash
npm i @ngx-starter-kit/ngx-utils
# install peer dependencies
npm i date-fns@^2.0.0-alpha.27
```

## Usage

### InViewport Directive

> Add `IntersectionObserver` conditional [polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill) to [index.html](../../apps/webapp/src/index.html) for `Safari` Support

```html
<script src="https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"></script>
```

```html
<div ngxInViewport (inViewport)="showMyElement=true">
  <ng-container *ngIf="showMyElement"> <div>Hello World!</div> </ng-container>
</div>
```

> If `entry.intersectionRatio >= 0.5` ==> `Inside Viewport` > <br/>
> If `entry.intersectionRatio < 0.5` ==> `Outside Viewport`

> lazy loading images example

```html
<div *ngFor="let image of images" [oneTime]="true" (inViewport)="show($event, image)">
  <ng-container *ngIf="image.show"> <img src="{{ image.url }}" /> </ng-container>
</div>
```

```ts
  show(event: Partial<IntersectionObserverEntry>, image: ImageItem) {
    if (event.intersectionRatio >= 0.5) {
      image.show = true;
    }
  }
```

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

### Reference

- [Improve Performance With Lazy Components](https://blog.angularindepth.com/improve-performance-with-lazy-components-f3c5ff4597d2)
