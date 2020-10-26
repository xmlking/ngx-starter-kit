import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickpanelToggleComponent } from './quickpanel-toggle.component';

describe('QuickpanelToggleComponent', () => {
  let component: QuickpanelToggleComponent;
  let fixture: ComponentFixture<QuickpanelToggleComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [QuickpanelToggleComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickpanelToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
