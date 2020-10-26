import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyTableComponent } from './sticky-table.component';

describe('StickyTableComponent', () => {
  let component: StickyTableComponent;
  let fixture: ComponentFixture<StickyTableComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [StickyTableComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
