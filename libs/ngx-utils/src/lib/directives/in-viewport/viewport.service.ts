import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { finalize, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ViewportService {
  private readonly options: IntersectionObserverInit = {
    rootMargin: '0px 0px 0px 0px',
    threshold: [0.5],
  };
  private observer: IntersectionObserver;
  private callback$: Subject<IntersectionObserverEntry> = new Subject();

  constructor() {
    this.observer = new IntersectionObserver(this.handler.bind(this), this.options);
  }

  observe(element: Element): Observable<IntersectionObserverEntry> {
    this.observer.observe(element);

    return this.callback$.asObservable().pipe(
      filter((entry: IntersectionObserverEntry) => entry.target === element),
      finalize(() => this.observer.unobserve(element)),
    );
  }

  private handler(entries: Array<IntersectionObserverEntry>): void {
    entries.forEach(entry => this.callback$.next(entry));
  }
}
