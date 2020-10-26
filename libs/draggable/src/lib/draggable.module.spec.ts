import { waitForAsync, TestBed } from '@angular/core/testing';
import { DraggableModule } from './draggable.module';

describe('DraggableModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [DraggableModule],
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(DraggableModule).toBeDefined();
  });
});
