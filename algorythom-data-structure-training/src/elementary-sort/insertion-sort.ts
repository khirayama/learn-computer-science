/***
 * 挿入ソート
 *
 ***/
import { proc } from '../utils';

function insertionSort(nums: number[]): number[] {
  insertionSort.proc.reset();

  const result = [...nums];
  insertionSort.proc.log('log');

  return result;
}
insertionSort.proc = proc;

test('Insertion Sort', () => {
  expect(insertionSort([5, 2, 4, 6, 1, 3])).toBe([1, 2, 3, 4, 5, 6]);
  expect(insertionSort.proc.state).toBe([
    [5, 2, 4, 6, 1, 3],
    [2, 5, 4, 6, 1, 3],
    [2, 4, 5, 6, 1, 3],
    [2, 4, 5, 6, 1, 3],
    [1, 2, 4, 5, 6, 3],
    [1, 2, 3, 4, 5, 6],
  ]);
});
