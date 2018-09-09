import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgViewerComponent } from './svg-viewer.component';

describe('SvgViewerComponent', () => {
  let component: SvgViewerComponent;
  let fixture: ComponentFixture<SvgViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SvgViewerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
