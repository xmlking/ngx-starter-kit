import { TestBed, inject } from '@angular/core/testing';

import { ServiceWorkerService } from './service-worker.service';

describe('ServiceWorkerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceWorkerService],
    });
  });

  it('should be created', inject([ServiceWorkerService], (service: ServiceWorkerService) => {
    expect(service).toBeTruthy();
  }));
});
