import { GroupByPipe } from './group-by.pipe';

describe('GroupByPipe', () => {
  it('create an instance', () => {
    const pipe = new GroupByPipe();
    expect(pipe).toBeTruthy();
  });
});
