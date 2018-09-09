import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppConfirmComponent } from './app-confirm.component';

describe('AppConfirmComponent', () => {
  let component: AppConfirmComponent;
  let fixture: ComponentFixture<AppConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppConfirmComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
