import { TestBed } from '@angular/core/testing';
import { GoogleAnalyticsService } from './google-analytics.service';

describe('GoogleAnalyticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleAnalyticsService = TestBed.inject(GoogleAnalyticsService);
    expect(service).toBeTruthy();
  });
});
