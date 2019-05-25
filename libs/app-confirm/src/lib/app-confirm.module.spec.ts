import { async, TestBed } from '@angular/core/testing';
import { AppConfirmModule } from './app-confirm.module';

describe('AppConfirmModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppConfirmModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AppConfirmModule).toBeDefined();
  });
});
