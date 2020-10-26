import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { WizdashComponent } from './wizdash.component';

describe('WizdashComponent', () => {
  let component: WizdashComponent;
  let fixture: ComponentFixture<WizdashComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [WizdashComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WizdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
