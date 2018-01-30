import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBarNotificationComponent } from './tool-bar-notification.component';

describe('ToolBarNotificationComponent', () => {
  let component: ToolBarNotificationComponent;
  let fixture: ComponentFixture<ToolBarNotificationComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ToolBarNotificationComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolBarNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
