import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityTableComponent } from './entity-table.component';

describe('EntityTableComponent', () => {
  let component: EntityTableComponent;
  let fixture: ComponentFixture<EntityTableComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [EntityTableComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
