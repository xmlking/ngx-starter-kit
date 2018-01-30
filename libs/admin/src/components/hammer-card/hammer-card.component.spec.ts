import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HammerCardComponent } from './hammer-card.component';

describe('HammerCardComponent', () => {
  let component: HammerCardComponent;
  let fixture: ComponentFixture<HammerCardComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [HammerCardComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HammerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
