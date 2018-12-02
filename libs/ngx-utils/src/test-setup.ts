import 'jest-preset-angular';

class FakeIntersectionObserver {
  readonly callback: IntersectionObserverCallback;
  constructor( callback: IntersectionObserverCallback, options?: IntersectionObserverInit ) {
    this.callback = callback;
  }
  observe( target: Element ): void {
    const ary = [];
    const obj: IntersectionObserverEntry = {
      boundingClientRect: undefined,
      intersectionRect: undefined,
      rootBounds: undefined,
      time: 60,
      intersectionRatio: 1,
      target: target,
      isIntersecting: true
    };
    ary[ 0 ] = obj;
    const callback = () => {};
    const observer = new IntersectionObserver( callback );
    this.callback( ary, observer );
  }
  unobserve( target: Element ): void {}
  disconnect(): void {}
}

Object.defineProperty(window, 'IntersectionObserver', {
  value: FakeIntersectionObserver,
  writable: true,
});
