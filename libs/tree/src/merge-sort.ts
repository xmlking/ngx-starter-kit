export type Comparator<T> = (x: T, y: T) => number;

/**
 * Sorts an array using merge sort
 */
export function mergeSort<T>(array: T[], comparatorFn: Comparator<T>): T[] {
  if (array.length <= 1) {
    return array;
  }
  // divide step of mergeSort
  const middle = Math.floor(array.length / 2);
  const left: T[] = array.slice(0, middle);
  const right: T[] = array.slice(middle);

  return merge(mergeSort(left, comparatorFn), mergeSort(right, comparatorFn), comparatorFn);
}

/** Merge (conquer) step of mergeSort */
function merge<T>(left: T[], right: T[], comparatorFn: Comparator<T>): T[] {
  const array: T[] = [];
  let lIndex = 0;
  let rIndex = 0;
  while (lIndex + rIndex < left.length + right.length) {
    const lItem = left[lIndex];
    const rItem = right[rIndex];
    if (lItem == null) {
      array.push(rItem);
      rIndex++;
    } else if (rItem == null) {
      array.push(lItem);
      lIndex++;
    } else if (comparatorFn(lItem, rItem) < 0) {
      // lItem < rItem
      array.push(lItem);
      lIndex++;
    } else {
      array.push(rItem);
      rIndex++;
    }
  }
  return array;
}
