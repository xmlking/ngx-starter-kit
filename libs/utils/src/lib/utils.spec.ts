import { waitUntil } from './wait-until';

describe('Utils', () => {
  it('waitUntil should work', async () => {
    let bool: boolean;
    setTimeout(_ => {
      bool = true;
    }, 500);
    const result = await waitUntil(_ => bool === true, 600);
    await expect(result);
  });
});
