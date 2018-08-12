import { TestBed, inject } from '@angular/core/testing';

import { NlpService } from './nlp.service';

describe('NlpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NlpService],
    });
  });

  it('should be created', inject([NlpService], (service: NlpService) => {
    expect(service).toBeTruthy();
  }));
});
