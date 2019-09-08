import { ElementRef } from '@angular/core';
import { MaskDirective } from './mask.directive';
export class MockElementRef extends ElementRef {
  constructor() {
    super(null);
  }
}

describe('MaskDirective', () => {
  it('should create an instance', () => {
    const directive = new MaskDirective(new MockElementRef());
    expect(directive).toBeTruthy();
  });
});
