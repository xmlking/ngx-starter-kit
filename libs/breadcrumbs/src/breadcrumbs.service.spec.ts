import { TestBed, inject } from '@angular/core/testing';

import { BreadcrumbsService } from './breadcrumbs.service';

describe('BreadcrumbsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreadcrumbsService]
    });
  });

  it(
    'should be created',
    inject([BreadcrumbsService], (service: BreadcrumbsService) => {
      expect(service).toBeTruthy();
    })
  );
});
