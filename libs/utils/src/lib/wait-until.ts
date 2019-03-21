export function waitUntil(condition, timeout = 2000) {
  return new Promise((resolve, reject) => {
    setTimeout(_ => reject(), timeout);

    function loop() {
      if (condition()) {
        resolve();
      }
      setTimeout(loop, 0);
    }

    setTimeout(loop, 0);
  });
}
