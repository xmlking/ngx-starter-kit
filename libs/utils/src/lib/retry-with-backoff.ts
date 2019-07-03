import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, retryWhen } from 'rxjs/operators';

const getErrorMessage = (maxRetry: number) =>
  `Tried to load Resource over XHR for ${maxRetry} times without success. Giving up.`;

const DEFAULT_MAX_RETRIES = 5;
const DEFAULT_BACKOFF = 1000;

export function retryWithBackoff<T>(
  delayMs: number,
  maxRetry = DEFAULT_BACKOFF,
  backoffMs = DEFAULT_BACKOFF,
): (src$: Observable<T>) => Observable<T> {
  let retries = maxRetry;

  return (src$: Observable<T>): Observable<T> =>
    src$.pipe(
      retryWhen((errors: Observable<T>) =>
        errors.pipe(
          mergeMap(error => {
            if (retries-- > 0) {
              const backoffTime = delayMs + (maxRetry - retries) * backoffMs;
              return of(error).pipe(delay(backoffTime));
            }
            return throwError(getErrorMessage(maxRetry));
          }),
        ),
      ),
    );
}
