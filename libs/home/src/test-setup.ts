import 'jest-preset-angular/setup-jest';

Object.defineProperty(window, 'matchMedia', {
  value: () => ({
    matches: false,
    addListener: () => {},
    removeListener: () => {},
  }),
});
