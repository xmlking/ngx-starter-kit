import { async, TestBed } from '@angular/core/testing';
import { ContextMenuModule } from './context-menu.module';

describe('ContextMenuModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ContextMenuModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ContextMenuModule).toBeDefined();
  });
});
