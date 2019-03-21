import { Injectable } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';

@Injectable({
  providedIn: 'root',
})
export class MediaQueryService {
  constructor(mediaObserver: MediaObserver) {
    mediaObserver.media$.subscribe(
      res => this.changesPrivate$.next(res),
      err => this.changesPrivate$.error(err),
      () => this.changesPrivate$.complete(),
    );

    this.changesPrivate$.subscribe(change => {
      this.lowerThanMedium.next(change.mqAlias === 'xs' || change.mqAlias === 'sm');
    });

    this.changesPrivate$.subscribe(change => {
      this.lowerThanLarge.next(change.mqAlias === 'xs' || change.mqAlias === 'sm' || change.mqAlias === 'md');
    });
  }

  private lowerThanMedium = new ReplaySubject<boolean>(1);
  private lowerThanLarge = new ReplaySubject<boolean>(1);

  private changesPrivate$: ReplaySubject<MediaChange> = new ReplaySubject(1);

  get changes$(): Observable<MediaChange> {
    return this.changesPrivate$.asObservable();
  }

  get isLowerThanMedium$(): Observable<boolean> {
    return this.lowerThanMedium.asObservable();
  }

  get isLowerThanLarge$(): Observable<boolean> {
    return this.lowerThanLarge.asObservable();
  }
}
