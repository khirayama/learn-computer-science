/***
 * [バブルソート - Wikipedia](https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%96%E3%83%AB%E3%82%BD%E3%83%BC%E3%83%88)
 * バブルソート (bubble sort) は、ソートのアルゴリズムの一つ。隣り合う要素の大小を比較しながら整列させること。最悪計算時間がO(n2)と遅いが、アルゴリズムが単純で実装が容易なため、また並列処理との親和性が高いことから、しばしば用いられる。安定な内部ソート。基本交換法、隣接交換法ともいう[1]。（単に交換法と言う場合もある）
 *
 * 最悪計算時間: O(n2)
 * 最良計算時間: O(n)
 * 平均計算時間: O(n2)
 * 最悪空間計算量: O(1) auxiliary
 * 安定
 ***/
import { proc, assert } from '../utils';

function bubbleSort(nums: number[]): number[] {
  bubbleSort.proc.reset();
  bubbleSort.proc.log(nums);

  for (let i = nums.length - 1; i > 0; i -= 1) {
    for (let j = nums.length - 1; j > 0; j -= 1) {
      const num1 = nums[j];
      const num2 = nums[j - 1];

      if (num1 < num2) {
        let tmp = nums[j];
        nums[j] = nums[j - 1];
        nums[j - 1] = tmp;
      }
    }
    bubbleSort.proc.log(nums);
  }

  return nums;
}
bubbleSort.proc = proc;

assert(bubbleSort([0, 2, 4, 6, 1, 0]), [0, 0, 1, 2, 4, 6]);
assert(bubbleSort([5, 2, 4, 6, 1, 3]), [1, 2, 3, 4, 5, 6]);
assert(bubbleSort.proc.state, [
  [5, 2, 4, 6, 1, 3],
  [1, 5, 2, 4, 6, 3],
  [1, 2, 5, 3, 4, 6],
  [1, 2, 3, 5, 4, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
]);
