import { async, TestBed } from '@angular/core/testing';
import { defaultPageScrollConfig, NGXPS_CONFIG } from 'ngx-page-scroll-core';
import { ScrollToTopModule } from './scroll-to-top.module';

describe('ScrollToTopModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: NGXPS_CONFIG, useValue: defaultPageScrollConfig }],
      imports: [ScrollToTopModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ScrollToTopModule).toBeDefined();
  });
});
