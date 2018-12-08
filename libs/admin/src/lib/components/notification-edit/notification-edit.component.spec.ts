import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationEditComponent } from './notification-edit.component';

describe('NotificationEditComponent', () => {
  let component: NotificationEditComponent;
  let fixture: ComponentFixture<NotificationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationEditComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
