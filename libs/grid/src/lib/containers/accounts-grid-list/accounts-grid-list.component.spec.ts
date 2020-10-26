import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsGridListComponent } from './accounts-grid-list.component';

describe('AccountsGridListComponent', () => {
  let component: AccountsGridListComponent;
  let fixture: ComponentFixture<AccountsGridListComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AccountsGridListComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
