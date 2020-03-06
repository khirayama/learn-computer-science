/***
 * 挿入ソート
 *
 ***/
import { proc, swap, assert } from '../utils';

function insertionSort(nums: number[]): number[] {
  insertionSort.proc.reset();

  for (let i = 1; i < nums.length; i += 1) {
    for (let j = i; 0 <= j; j -= 1) {
      const num1 = nums[j];
      const num2 = nums[j - 1] || null;

      if (num2 === null) {
        break;
      }

      console.log(`i: ${i}(${num1}), j: ${j}(${num2}), nums: ${nums}`);

      if (num2 > num1) {
        console.log('swap', j, j - 1);
        swap(nums, j, j - 1);
      } else {
        break;
      }
    }
    insertionSort.proc.log(nums);
  }

  console.log(nums);
  return nums;
}
insertionSort.proc = proc;

assert(insertionSort([5, 2, 4, 6, 1, 3]), [1, 2, 3, 4, 5, 6]);
assert(insertionSort.proc.state, [
  [5, 2, 4, 6, 1, 3],
  [2, 5, 4, 6, 1, 3],
  [2, 4, 5, 6, 1, 3],
  [2, 4, 5, 6, 1, 3],
  [1, 2, 4, 5, 6, 3],
  [1, 2, 3, 4, 5, 6],
]);
