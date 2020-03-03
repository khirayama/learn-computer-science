/***
 * 挿入ソート
 *
 ***/
import { proc, swap } from '../utils';

function insertionSort(nums: number[]): number[] {
  insertionSort.proc.reset();

  for (let i = 1; i < nums.length - 1; i += 1) {
    for (let j = i; 0 <= j; j -= 1) {
      const num1 = nums[j];
      const num2 = nums[j - 1] || null;

      if (num2 === null) {
        break;
      }
      console.log(`i: ${i}, j: ${j}, num1: ${num1}, num2: ${num2}, nums: ${nums}`);

      if (num2 > num1) {
        console.log('swap', i, j - 1);
        swap(nums, i, j - 1);
        console.log('swaped', nums);
      } else {
        break;
      }
    }
    insertionSort.proc.log(nums);
  }

  console.log(nums);
  console.log(insertionSort.proc.state);
  return nums;
}
insertionSort.proc = proc;

insertionSort([5, 2, 4, 6, 1, 3]);
// test('Insertion Sort', () => {
//   expect(insertionSort([5, 2, 4, 6, 1, 3])).toBe([1, 2, 3, 4, 5, 6]);
//   // expect(insertionSort.proc.state).toBe([
//   //   [5, 2, 4, 6, 1, 3],
//   //   [2, 5, 4, 6, 1, 3],
//   //   [2, 4, 5, 6, 1, 3],
//   //   [2, 4, 5, 6, 1, 3],
//   //   [1, 2, 4, 5, 6, 3],
//   //   [1, 2, 3, 4, 5, 6],
//   // ]);
// });
