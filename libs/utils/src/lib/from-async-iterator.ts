import { Observable, Subscriber, Unsubscribable } from 'rxjs';

// FIXME: temp fix
interface AsyncIterator<T> {
  next(value?: any): Promise<IteratorResult<T>>;
  return?(value?: any): Promise<IteratorResult<T>>;
  throw?(e?: any): Promise<IteratorResult<T>>;
}

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
