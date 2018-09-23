import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturesComponent } from './features.component';
import { SharedModule } from '@ngx-starter-kit/shared';
import { SvgViewerModule } from '@ngx-starter-kit/svg-viewer';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LandingComponent } from '@ngx-starter-kit/home/src/lib/containers/landing/landing.component';

describe('FeaturesComponent', () => {
  let component: FeaturesComponent;
  let fixture: ComponentFixture<FeaturesComponent>;

  beforeAll(() => {
    // Object.defineProperty(window, 'matchMedia', {
    //   value: jest.fn(() => ({ matches: true }))
    // });
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [FeaturesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
