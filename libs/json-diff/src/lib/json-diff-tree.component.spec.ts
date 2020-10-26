import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonDiffTreeComponent } from './json-diff-tree.component';

describe('JsonDiffTreeComponent', () => {
  let component: JsonDiffTreeComponent;
  let fixture: ComponentFixture<JsonDiffTreeComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [JsonDiffTreeComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonDiffTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
