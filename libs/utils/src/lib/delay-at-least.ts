import { Observable, of } from 'rxjs';
import { combineLatest, delay } from 'rxjs/operators';

export function delayAtLeast<T>(minDelay: number): (s$: Observable<T>) => Observable<T> {
  return (s$: Observable<T>): Observable<T> =>
    of(true).pipe(
      delay(minDelay),
      combineLatest(s$, (_, s) => s),
    );
}
