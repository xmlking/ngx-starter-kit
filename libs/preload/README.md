# Preload

Preload lazy-module strategies

* PreloadSelectedStrategy -  Deterministic pre-fetching based on `preload` value in Route Data.
* PreloadViewportStrategy - Speculative pre-fetching based on links in `Viewport`
* PredictivePreloadStrategy - Predictive pre-fetching based google analytics. Use `Guess.JS` 

> `PreloadViewportStrategy` same as @mgechev [ngx-quicklink](https://github.com/mgechev/ngx-quicklink)

### Usecase

- feature-1: load with main core bundle
- feature-2: preload in background to be ready to use when user navigates to feature-2
- feature-3: only lazy load if the user navigates to feature-3

### Publish
```bash
# build
ng build preload
# replace your npm key
export NPM_TOKEN="00000000-0000-0000-0000-000000000000"
# publish
npm publish dist/libs/preload --access public
```

### TODO
* make `PreloadViewportStrategy` customizable. 

