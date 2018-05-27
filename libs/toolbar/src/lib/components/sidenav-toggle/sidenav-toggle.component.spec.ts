import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavToggleComponent } from './sidenav-toggle.component';

describe('SidenavToggleComponent', () => {
  let component: SidenavToggleComponent;
  let fixture: ComponentFixture<SidenavToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
