import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentsLayoutComponent } from './experiments-layout.component';

describe('ExperimentsLayoutComponent', () => {
  let component: ExperimentsLayoutComponent;
  let fixture: ComponentFixture<ExperimentsLayoutComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ExperimentsLayoutComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
