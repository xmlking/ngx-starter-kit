import { waitForAsync, TestBed } from '@angular/core/testing';
import { ExperimentsModule } from './experiments.module';

describe('ExperimentsModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [ExperimentsModule],
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(ExperimentsModule).toBeDefined();
  });
});
