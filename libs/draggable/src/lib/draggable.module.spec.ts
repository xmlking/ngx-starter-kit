import { async, TestBed } from '@angular/core/testing';
import { DraggableModule } from './draggable.module';

describe('DraggableModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DraggableModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DraggableModule).toBeDefined();
  });
});
