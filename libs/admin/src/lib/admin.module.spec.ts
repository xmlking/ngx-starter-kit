import { waitForAsync, TestBed } from '@angular/core/testing';
import { AdminModule } from './admin.module';

describe('AdminModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [AdminModule],
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(AdminModule).toBeDefined();
  });
});
