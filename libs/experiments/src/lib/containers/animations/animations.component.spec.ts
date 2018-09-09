import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationsComponent } from './animations.component';

describe('AnimationsComponent', () => {
  let component: AnimationsComponent;
  let fixture: ComponentFixture<AnimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnimationsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
