/**
 * Find the index to insert an element in array keeping the sort order.
 */
export function findInsertIndex(comparatorFn, arr, el) {
  let len;
  let i;
  for (i = 0, len = arr.length; i < len; i++) {
    if (comparatorFn(arr[i], el) > 0) {
      break;
    }
  }
  return i;
}
