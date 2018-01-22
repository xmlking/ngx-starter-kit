import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityFormComponent } from './entity-form.component';

describe('EntityFormComponent', () => {
  let component: EntityFormComponent;
  let fixture: ComponentFixture<EntityFormComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [EntityFormComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
