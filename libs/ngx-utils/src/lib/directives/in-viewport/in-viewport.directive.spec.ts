import { InViewportDirective } from './in-viewport.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewportService } from './viewport.service';
import { InViewportModule } from './in-viewport.module';

describe('InViewportDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // providers: [ViewportService],
      imports: [InViewportModule],
    }).compileComponents();
  });

  xit('should create an instance', () => {
    const fixture = TestBed.createComponent(InViewportDirective);
    expect(fixture).toBeTruthy();
  });
});
