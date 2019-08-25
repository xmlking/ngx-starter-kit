# Image Comparison

### Install

```bash
npm i @ngx-starter-kit/image-comparison
```

### Usage

```html
<ngx-image-comparison startPosition="70">
  <img #comparisonImage src="assets/img/comp/1-before.jpg" alt="first image" data-label="first" />
  <img #comparisonImage src="assets/img/comp/1-after.jpg" alt="second image" data-label="second" />
</ngx-image-comparison>
```

### Credit

- [ImageComparison](https://github.com/M-Ulyanov/ImageComparison)

### Publish

## Running unit tests

Run `ng test app-confirm` to execute the unit tests.

```bash
# build
ng build image-comparison
# replace your npm key
export NPM_TOKEN="00000000-0000-0000-0000-000000000000"
# publish
npm publish dist/libs/image-comparison --access public
```
