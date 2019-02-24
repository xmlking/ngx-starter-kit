import { Observable, Subscriber, Unsubscribable } from 'rxjs';

export function fromAsyncIterator<T>(iterator: AsyncIterator<T>): Observable<T> {
  return new Observable(
    (subscriber: Subscriber<T>): Unsubscribable => {
      async function forwardValues(): Promise<void> {
        try {
          for (let next = await iterator.next(); !subscriber.closed && !next.done; ) {
            subscriber.next(next.value);
            next = await iterator.next();
          }
          subscriber.complete();
        } catch (e) {
          subscriber.error(e);
        }
      }

      forwardValues();

      return {
        unsubscribe: () => {}, // FIXME memory leak?
      };
    },
  );
}
