import { waitForAsync, TestBed } from '@angular/core/testing';
import { DashboardModule } from './dashboard.module';

describe('DashboardModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [DashboardModule],
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(DashboardModule).toBeDefined();
  });
});
