import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCompComponent } from './image-comp.component';

describe('ImageCompComponent', () => {
  let component: ImageCompComponent;
  let fixture: ComponentFixture<ImageCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageCompComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
