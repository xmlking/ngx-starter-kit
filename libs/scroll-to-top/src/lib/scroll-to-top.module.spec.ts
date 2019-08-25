import { async, TestBed } from '@angular/core/testing';
import { ScrollToTopModule } from './scroll-to-top.module';

describe('ScrollToTopModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ScrollToTopModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ScrollToTopModule).toBeDefined();
  });
});
