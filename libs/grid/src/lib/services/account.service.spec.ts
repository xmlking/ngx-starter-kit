import { TestBed, inject } from '@angular/core/testing';

import { AccountService } from './account.service';

describe('AccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Account1Service]
    });
  });

  it('should be created', inject([Account1Service], (service: Account1Service) => {
    expect(service).toBeTruthy();
  }));
});
