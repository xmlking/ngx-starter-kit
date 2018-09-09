import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RainbowComponent } from './rainbow.component';

describe('RainbowComponent', () => {
  let component: RainbowComponent;
  let fixture: ComponentFixture<RainbowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RainbowComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RainbowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
