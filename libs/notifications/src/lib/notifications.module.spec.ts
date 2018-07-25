import { async, TestBed } from '@angular/core/testing';
import { NotificationsModule } from './notifications.module';

describe('NotificationsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NotificationsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NotificationsModule).toBeDefined();
  });
});
