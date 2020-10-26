import { waitForAsync, TestBed } from '@angular/core/testing';
import { WidgetsModule } from './widgets.module';

describe('WidgetsModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [WidgetsModule],
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(WidgetsModule).toBeDefined();
  });
});
