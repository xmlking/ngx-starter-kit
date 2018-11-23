import { of } from 'rxjs';
import { pluck } from './pluck';

describe('pluck', () => {
  const obj = { a: { b: true, c: { d: false, e: { f: 5 } } }, g: 5, h: 'hello', i: { j: [2] } };

  it('should pluck prop from plain object', () => {
    of({ a: { b: { c: true } } })
      .pipe(pluck('a', 'b', 'c'))
      .subscribe(c => {
        expect(c).toBe(true);
      });

    of(obj)
      .pipe(pluck('a'))
      .subscribe(a => {
        expect(a).toEqual(obj.a);
      });

    of(obj)
      .pipe(pluck('i', 'j'))
      .subscribe(j => {
        expect(j).toContain(2);
      });
  });

  it('should pluck prop from object with multi type prop', () => {
    of(obj)
      .pipe(pluck('a', 'b'))
      .subscribe(b => {
        expect(b).toBe(true);
      });

    of(obj)
      .pipe(pluck('a', 'c', 'd'))
      .subscribe(d => {
        expect(d).toBe(false);
      });
  });

  it('should allow maximum 4 props to pluck', () => {
    of(obj)
      .pipe(pluck('a', 'c', 'e', 'f'))
      .subscribe(f => {
        expect(f).toBe(5);
      });
  });

  it('should work with multi pluck', () => {
    of(obj)
      .pipe(
        pluck('a'),
        pluck('c'),
        pluck('d'),
      )
      .subscribe(d => {
        expect(d).toBe(false);
      });
  });
});
