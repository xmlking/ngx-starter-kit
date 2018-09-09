import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedDemoComponent } from './led-demo.component';

describe('LedDemoComponent', () => {
  let component: LedDemoComponent;
  let fixture: ComponentFixture<LedDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LedDemoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
