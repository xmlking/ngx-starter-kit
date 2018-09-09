import { Injectable } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';

@Injectable({
  providedIn: 'root',
})
export class MediaQueryService {
  constructor(media: ObservableMedia) {
    media
      .asObservable()
      .subscribe(res => this._changes$.next(res), err => this._changes$.error(err), () => this._changes$.complete());

    this._changes$.subscribe(change => {
      this._lowerThanMedium.next(change.mqAlias === 'xs' || change.mqAlias === 'sm');
    });

    this._changes$.subscribe(change => {
      this._lowerThanLarge.next(change.mqAlias === 'xs' || change.mqAlias === 'sm' || change.mqAlias === 'md');
    });
  }

  private _lowerThanMedium = new ReplaySubject<boolean>(1);
  private _lowerThanLarge = new ReplaySubject<boolean>(1);

  private _changes$: ReplaySubject<MediaChange> = new ReplaySubject(1);

  get changes$(): Observable<MediaChange> {
    return this._changes$.asObservable();
  }

  get isLowerThanMedium$(): Observable<boolean> {
    return this._lowerThanMedium.asObservable();
  }

  get isLowerThanLarge$(): Observable<boolean> {
    return this._lowerThanLarge.asObservable();
  }
}
