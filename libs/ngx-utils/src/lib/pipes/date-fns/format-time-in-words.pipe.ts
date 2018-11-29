import { OnDestroy, ChangeDetectorRef, Pipe, PipeTransform } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { of, Observable } from 'rxjs';
import { repeatWhen, takeWhile, map, tap, delay } from 'rxjs/operators';

import { Options } from 'date-fns';
// import { formatDistance, differenceInMinutes } from 'date-fns/esm';
import { formatDistance, differenceInMinutes } from 'date-fns';

const defaultConfig: Options = { addSuffix: true };
/**
 * impure pipe, which in general can lead to bad performance
 * but the backoff function limits the frequency the pipe checks for updates
 * so the performance is close to that of a pure pipe
 * the downside of this is that if you change the value of the input, the pipe might not notice for a while
 * so this pipe is intended for static data
 *
 * expected input is a time (number, string or Date)
 * output is a string expressing distance from that time to now, plus the suffix 'ago'
 * output refreshes at dynamic intervals, with refresh rate slowing down as the input time gets further away from now
 */
@Pipe({ name: 'formatTimeInWords', pure: false })
export class FormatTimeInWordsPipe implements PipeTransform, OnDestroy {
  static readonly NO_ARGS_ERROR = 'formatTimeInWords: missing required arguments';
  private readonly async: AsyncPipe;

  private isDestroyed = false;
  private agoExpression: Observable<string>;

  constructor(private cdr: ChangeDetectorRef) {
    this.async = new AsyncPipe(this.cdr);
  }

  ngOnDestroy() {
    this.isDestroyed = true; // pipe will stop executing after next iteration
  }

  transform(date: string | number | Date, options?: Options): string {
    if (date == null) {
      throw new Error(FormatTimeInWordsPipe.NO_ARGS_ERROR);
    }

    // set the pipe to the Observable if not yet done, and return an async pipe
    if (!this.agoExpression) {
      this.agoExpression = this.timeAgo(date, { ...defaultConfig, ...options });
    }
    return this.async.transform(this.agoExpression);
  }

  private timeAgo(date: string | number | Date, options?: Options): Observable<string> {
    let nextBackoff = this.backoff(date);
    return of(true).pipe(
      repeatWhen(emitTrue => emitTrue.pipe(delay(nextBackoff))), // will not recheck input until delay completes
      takeWhile(_ => !this.isDestroyed),
      map(_ => formatDistance(date, new Date(), options)),
      tap(_ => (nextBackoff = this.backoff(date))),
    );
  }

  private backoff(date: string | number | Date): number {
    const minutesElapsed = Math.abs(differenceInMinutes(new Date(), date)); // this will always be positive
    let backoffAmountInSeconds: number;
    if (minutesElapsed < 2) {
      backoffAmountInSeconds = 5;
    } else if (minutesElapsed >= 2 && minutesElapsed < 5) {
      backoffAmountInSeconds = 15;
    } else if (minutesElapsed >= 5 && minutesElapsed < 60) {
      backoffAmountInSeconds = 30;
    } else if (minutesElapsed >= 60) {
      backoffAmountInSeconds = 300; // 5 minutes
    }
    return backoffAmountInSeconds * 1000; // return an amount of milliseconds
  }
}
