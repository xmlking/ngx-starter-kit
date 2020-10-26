import { TestBed, waitForAsync } from '@angular/core/testing';
import { NotificationsModule } from './notifications.module';

describe('NotificationsModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NotificationsModule],
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(NotificationsModule).toBeDefined();
  });
});
