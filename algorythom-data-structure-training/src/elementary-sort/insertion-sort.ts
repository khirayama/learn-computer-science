/***
 * 挿入ソート
 *
 ***/
import { proc, swap } from '../utils';

function insertionSort(nums: number[]): number[] {
  insertionSort.proc.reset();

  for (let i = 1; i < nums.length - 1; i += 1) {
    const num1 = nums[i];

    for (let j = i - 1; 0 <= j; j -= 1) {
      const num2 = nums[j];

      if (num2 > num1) {
        swap(nums, i, j);
      }
    }
  }

  console.log(nums);
  return nums;
}
insertionSort.proc = proc;

test('Insertion Sort', () => {
  expect(insertionSort([5, 2, 4, 6, 1, 3])).toBe([1, 2, 3, 4, 5, 6]);
  // expect(insertionSort.proc.state).toBe([
  //   [5, 2, 4, 6, 1, 3],
  //   [2, 5, 4, 6, 1, 3],
  //   [2, 4, 5, 6, 1, 3],
  //   [2, 4, 5, 6, 1, 3],
  //   [1, 2, 4, 5, 6, 3],
  //   [1, 2, 3, 4, 5, 6],
  // ]);
});
