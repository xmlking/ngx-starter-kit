import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, map, take } from 'rxjs/operators';

export class StateDef<T> extends BehaviorSubject<T> {
  setState(setter: (state: T) => T) {
    this.pipe(take(1)).subscribe(state => {
      this.next(setter(state));
    });
  }

  select<R>(selector: (state?: T) => R) {
    return this.pipe(
      map(selector),
      distinctUntilChanged(),
    );
  }

  selectOne<R>(selector: (state?: T) => R) {
    return this.select(selector).pipe(take(1));
  }
}
