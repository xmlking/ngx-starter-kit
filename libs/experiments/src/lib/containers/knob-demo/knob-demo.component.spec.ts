import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnobDemoComponent } from './knob-demo.component';

describe('KnobDemoComponent', () => {
  let component: KnobDemoComponent;
  let fixture: ComponentFixture<KnobDemoComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [KnobDemoComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(KnobDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
