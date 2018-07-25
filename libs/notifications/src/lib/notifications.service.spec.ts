import { TestBed, inject } from '@angular/core/testing';

import { NotificationsService } from './notifications.service';

describe('NotificationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationsService],
    });
  });

  it('should be created', inject([NotificationsService], (service: NotificationsService) => {
    expect(service).toBeTruthy();
  }));
});
