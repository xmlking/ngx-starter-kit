import { async, TestBed } from '@angular/core/testing';
import { DashboardModule } from './dashboard.module';

describe('DashboardModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DashboardModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DashboardModule).toBeDefined();
  });
});
