import { TestBed, inject } from '@angular/core/testing';

import { MediaQueryService } from './media-query.service';

describe('MediaQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediaQueryService],
    });
  });

  it('should be created', inject([MediaQueryService], (service: MediaQueryService) => {
    expect(service).toBeTruthy();
  }));
});
