import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Usage: http.get<User>('/users/1').pipe(toClass(User))
 */
export const  toClass = <T>(ClassType: new() => T) => (source: Observable<T>) =>  source.pipe(
map(val => Object.assign(new ClassType(), val))
);
