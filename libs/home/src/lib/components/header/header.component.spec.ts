import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { SharedModule } from '@ngx-starter-kit/shared';
import { ThemePickerModule } from '@ngx-starter-kit/theme-picker';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '@ngx-starter-kit/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, CoreModule, ThemePickerModule, RouterTestingModule],
      declarations: [HeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO: Add tests is logic is added to navbar class.
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
