import { IResizeState, ISize, IPoint, IOptions } from './resizable.store';

export const resizeRight = (nextWidth: number, options: IOptions, currentElementPosition: IPoint) => {
  if (nextWidth <= options.minSize.width) {
    nextWidth = options.minSize.width;
  }
  if (nextWidth >= options.maxSize.width) {
    nextWidth = options.maxSize.width;
  }
  if (nextWidth + currentElementPosition.x >= options.bound.x + options.bound.width) {
    nextWidth -= nextWidth + currentElementPosition.x - (options.bound.x + options.bound.width);
  }
  return { nextWidth, nextLeft: currentElementPosition.x };
};

export const resizeBottom = (nextHeight: number, options: IOptions, currentElementPosition: IPoint) => {
  if (nextHeight <= options.minSize.height) {
    nextHeight = options.minSize.height;
  }
  if (nextHeight >= options.maxSize.height) {
    nextHeight = options.maxSize.height;
  }
  if (nextHeight + currentElementPosition.y >= options.bound.y + options.bound.height) {
    nextHeight -= nextHeight + currentElementPosition.y - (options.bound.y + options.bound.height);
  }
  return { nextHeight, nextTop: currentElementPosition.y };
};

export const resizeTop = (nextHeight: number, currentPos: IPoint, currentSize: ISize, options: IOptions) => {
  let nextTop = currentPos.y + (currentSize.height - nextHeight);
  // Lower priorty compared to all others
  if (nextHeight <= options.minSize.height) {
    nextTop -= options.minSize.height - nextHeight;
    nextHeight = options.minSize.height;
  }
  if (nextHeight >= options.maxSize.height) {
    nextTop += nextHeight - options.maxSize.height;
    nextHeight = options.maxSize.height;
  }
  if (nextTop <= options.bound.y) {
    nextHeight -= options.bound.y - nextTop;
    nextTop = options.bound.y;
  }
  return { nextHeight, nextTop };
};

export const resizeLeft = (nextWidth: number, currentPos: IPoint, currentSize: ISize, options: IOptions) => {
  let nextLeft = currentPos.x + (currentSize.width - nextWidth);
  // Lower priorty compared to all others
  if (nextWidth <= options.minSize.width) {
    nextLeft -= options.minSize.width - nextWidth;
    nextWidth = options.minSize.width;
  }
  if (nextWidth >= options.maxSize.width) {
    nextLeft += nextWidth - options.maxSize.width;
    nextWidth = options.maxSize.width;
  }
  if (nextLeft <= options.bound.x) {
    nextWidth -= options.bound.x - nextLeft;
    nextLeft = options.bound.x;
  }
  return { nextWidth, nextLeft };
};

export const manageRatio = (
  {
    nextWidth,
    nextHeight,
    nextTop,
    nextLeft,
  }: {
    nextWidth: number;
    nextHeight: number;
    nextTop: number;
    nextLeft: number;
  },
  options: IOptions,
  currentPos: IPoint,
  currentSize: ISize,
  direction: string,
  currentElementPosition: IPoint,
) => {
  let data: any;
  const bound = options.bound;
  bound.x = parseInt(bound.x.toFixed(), 10);
  bound.y = parseInt(bound.y.toFixed(), 10);
  bound.width = parseInt(bound.width.toFixed(), 10);
  bound.height = parseInt(bound.height.toFixed(), 10);
  switch (direction) {
    case 'left':
      nextHeight = resizeBottom(options.ratio * nextWidth, options, currentElementPosition).nextHeight;
      nextLeft += nextWidth - nextHeight / options.ratio;
      nextWidth = nextHeight / options.ratio;
      break;
    case 'right':
      nextHeight = resizeBottom(options.ratio * nextWidth, options, currentElementPosition).nextHeight;
      nextWidth = nextHeight / options.ratio;
      break;
    case 'top':
      nextWidth = resizeRight(nextHeight / options.ratio, options, currentElementPosition).nextWidth;
      nextTop += nextHeight - nextWidth * options.ratio;
      nextHeight = options.ratio * nextWidth;
      break;
    case 'bottom':
    case 'bottom-right':
      nextWidth = resizeRight(nextHeight / options.ratio, options, currentElementPosition).nextWidth;
      nextHeight = options.ratio * nextWidth;
      break;
    case 'top-left':
      data = resizeLeft(nextHeight / options.ratio, currentPos, currentSize, options);
      nextWidth = data.nextWidth;
      nextLeft = data.nextLeft;
      if (nextWidth < nextHeight / options.ratio) {
        nextTop += nextHeight - nextWidth * options.ratio;
        nextHeight = nextWidth * options.ratio;
      }
      break;
    case 'bottom-left':
      data = resizeLeft(nextHeight / options.ratio, currentPos, currentSize, options);
      nextWidth = data.nextWidth;
      nextLeft = data.nextLeft;
      if (nextWidth < nextHeight / options.ratio) {
        nextHeight = nextWidth * options.ratio;
      }
      break;
    case 'top-right':
      data = resizeRight(nextHeight / options.ratio, options, currentElementPosition);
      nextWidth = data.nextWidth;
      if (nextWidth < nextHeight / options.ratio) {
        nextTop += nextHeight - nextWidth * options.ratio;
        nextHeight = nextWidth * options.ratio;
      }
      break;
  }
  return { nextWidth, nextHeight, nextTop, nextLeft };
};
