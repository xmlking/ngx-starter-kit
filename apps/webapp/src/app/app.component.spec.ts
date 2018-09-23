import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ServiceWorkerModule } from '@angular/service-worker';
import { DOCUMENT } from '@angular/common';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ServiceWorkerModule.register('', { enabled: false })],
      declarations: [AppComponent],
    }).compileComponents();

    // create component and test fixture
    fixture = TestBed.createComponent(AppComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
  }));

  it('should create the webapp', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as charset 'UTF-8'`, async(() => {
    expect(component.meta.getTag('charset').getAttribute('charset')).toBe('UTF-8');
  }));
});
