import { async, TestBed } from '@angular/core/testing';
import { WidgetsModule } from './widgets.module';

describe('WidgetsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WidgetsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WidgetsModule).toBeDefined();
  });
});
