import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashingComponent } from './dashing.component';

describe('DashingComponent', () => {
  let component: DashingComponent;
  let fixture: ComponentFixture<DashingComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DashingComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DashingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
