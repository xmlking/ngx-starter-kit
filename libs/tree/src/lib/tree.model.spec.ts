import { Tree } from './tree.model';

describe('Tree', () => {
  it('should work', () => {
    expect(new Tree({ name: 'root', children: [] })).toBeDefined();
  });
});
