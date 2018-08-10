import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

/**
 * Service responsible for setting the title that appears above the home and dashboard pages.
 */
@Injectable({
  providedIn: 'root'
})
export class PageTitleService {
  _title = '';

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
    if (title !== '') {
      title = `${title} | `;
    }
    this.bodyTitle.setTitle(`${title}IS360`);
  }

  constructor(private bodyTitle: Title) {}
}
