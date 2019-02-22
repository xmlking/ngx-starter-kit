import { combineLatest, Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export function delayAtLeast<T>(minDelay: number): (s$: Observable<T>) => Observable<T> {
  return (s$: Observable<T>): Observable<T> =>
    combineLatest(of(true).pipe(delay(minDelay)), s$)
      .pipe(map(([_, i]) => i));
}
