import { async, TestBed } from '@angular/core/testing';
import { HomeModule } from './home.module';

describe('HomeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HomeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(HomeModule).toBeDefined();
  });
});
