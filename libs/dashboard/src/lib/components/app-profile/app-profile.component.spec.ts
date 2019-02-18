import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProfileComponent } from './app-profile.component';

describe('AppProfileComponent', () => {
  let component: AppProfileComponent;
  let fixture: ComponentFixture<AppProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
