import { TestBed, inject } from '@angular/core/testing';
import { PageTitleService } from './page-title.service';
import { Title } from '@angular/platform-browser';

describe('PageTitleService', () => {
  const title: Title = new Title({});
  const pageTitleService: PageTitleService = new PageTitleService(title);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: PageTitleService, useValue: pageTitleService }],
    });
  });

  it('should initialize title to empty string', inject([PageTitleService], (service: PageTitleService) => {
    expect(service).toBeTruthy();
    expect(service._title).toEqual('');
    expect(service.title).toEqual('');
  }));
});
