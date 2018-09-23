import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

/**
 * Service responsible for setting the title that appears above the home and dashboard pages.
 */
@Injectable({
  providedIn: 'root',
})
export class PageTitleService {
  private readonly defaultTitle;
  private _title = '';

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
    if (title !== '') {
      title = `${title} |`;
    }
    this.bodyTitle.setTitle(`${title} ${this.defaultTitle}`);
  }

  constructor(private bodyTitle: Title) {
    this.defaultTitle = bodyTitle.getTitle() || 'WebApp';
  }
}
