import { waitForAsync, TestBed } from '@angular/core/testing';
import { GridModule } from './grid.module';

describe('GridModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [GridModule],
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(GridModule).toBeDefined();
  });
});
