import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

/**
 * EventBus will use this service
 */
@Injectable({
  providedIn: 'root',
})
export class PageTitleService {
  private readonly defaultTitle;

  constructor(private bodyTitle: Title) {
    this.defaultTitle = bodyTitle.getTitle() || 'WebApp';
  }

  public setTitle(breadcrumbs: Map<string, string>) {
    this.bodyTitle.setTitle(
      `${Array.from(breadcrumbs.keys())
        .reverse()
        .join(' | ')} | ${this.defaultTitle}`,
    );
  }
}
