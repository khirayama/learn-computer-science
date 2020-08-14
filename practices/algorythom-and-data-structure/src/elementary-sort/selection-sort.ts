/***
 * [選択ソート - Wikipedia](https://ja.wikipedia.org/wiki/%E9%81%B8%E6%8A%9E%E3%82%BD%E3%83%BC%E3%83%88)
 * 配列された要素から、最大値やまたは最小値を探索し配列最後の要素と入れ替えをおこなうこと。最悪計算時間がO(n2)と遅いが、アルゴリズムが単純で実装が容易なため、しばしば用いられる。内部ソート。後述するように、安定ソートではない。
 *
 * 最悪計算時間がO(n2)と遅いが、アルゴリズムが単純で実装が容易なため、しばしば用いられる。
 *
 * 最悪計算時間: O(n2)
 * 最良計算時間: O(n2)
 * 平均計算時間: O(n2)
 * 最悪空間計算量: O(n) total, O(1) auxiliary
 * 不安定
 ***/
import { proc, assert } from '../utils';

function selectionSort(nums: number[]): number[] {
  selectionSort.proc.reset();
  selectionSort.proc.log(nums);

  for (let i = 0; i < nums.length; i += 1) {
    let mini = i;

    for (let j = i + 1; j < nums.length; j += 1) {
      let num = nums[j];
      if (nums[mini] > num) {
        mini = j;
      }
    }

    let tmp = nums[mini];
    nums[mini] = nums[i];
    nums[i] = tmp;

    selectionSort.proc.log(nums);
  }
  return nums;
}
selectionSort.proc = proc;

assert(selectionSort([5, 4, 8, 7, 9, 3, 1]), [1, 3, 4, 5, 7, 8, 9]);
assert(selectionSort.proc.state, [
  [5, 4, 8, 7, 9, 3, 1],
  [1, 4, 8, 7, 9, 3, 5],
  [1, 3, 8, 7, 9, 4, 5],
  [1, 3, 4, 7, 9, 8, 5],
  [1, 3, 4, 5, 9, 8, 7],
  [1, 3, 4, 5, 7, 8, 9],
  [1, 3, 4, 5, 7, 8, 9],
  [1, 3, 4, 5, 7, 8, 9],
]);
