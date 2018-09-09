import { TestBed, inject } from '@angular/core/testing';

import { DeepLinkService } from './deep-link.service';

describe('DeepLinkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeepLinkService],
    });
  });

  it('should be created', inject([DeepLinkService], (service: DeepLinkService) => {
    expect(service).toBeTruthy();
  }));
});
