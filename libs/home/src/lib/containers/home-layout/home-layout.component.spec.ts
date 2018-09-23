import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SharedModule } from '@ngx-starter-kit/shared';
import { ScrollToTopModule } from '@ngx-starter-kit/scroll-to-top';
import { ThemePickerModule } from '@ngx-starter-kit/theme-picker';

import { HomeLayoutComponent } from './home-layout.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CoreModule } from '@ngx-starter-kit/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeLayoutComponent', () => {
  let component: HomeLayoutComponent;
  let fixture: ComponentFixture<HomeLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        CoreModule,
        ScrollToTopModule,
        ThemePickerModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
      declarations: [HomeLayoutComponent, HeaderComponent, FooterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
