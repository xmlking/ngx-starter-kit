import { ElementRef } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';
import { ClickOutsideDirective } from './click-outside.directive';
import { ClickOutsideModule } from './click-outside.module';
export class MockElementRef extends ElementRef {
  constructor() {
    super(null);
  }
}

describe('ClickOutsideDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ElementRef, useValue: new MockElementRef() }],
      imports: [ClickOutsideModule],
    });
  });

  it('should create an instance', inject([ElementRef], (directive: ClickOutsideDirective) => {
    expect(directive).toBeTruthy();
  }));
});
