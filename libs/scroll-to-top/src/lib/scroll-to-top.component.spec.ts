import { DOCUMENT } from '@angular/common';
import { async, TestBed } from '@angular/core/testing';
import { WINDOW } from '@ngx-starter-kit/core';
import { defaultPageScrollConfig, NGXPS_CONFIG } from 'ngx-page-scroll-core';
import { ScrollToTopComponent } from './scroll-to-top.component';
import { ScrollToTopModule } from './scroll-to-top.module';

describe('ScrollToTopComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: NGXPS_CONFIG, useValue: defaultPageScrollConfig },
        { provide: DOCUMENT, useValue: document },
        { provide: WINDOW, useValue: window },
      ],
      imports: [ScrollToTopModule],
    }).compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(ScrollToTopComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
