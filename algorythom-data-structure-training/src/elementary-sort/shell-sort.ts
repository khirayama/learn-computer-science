/***
 * [シェルソート - Wikipedia](https://ja.wikipedia.org/wiki/%E3%82%B7%E3%82%A7%E3%83%AB%E3%82%BD%E3%83%BC%E3%83%88)
 * 間隔の離れた要素の組に対してソートを行い、だんだんと比較する要素間の間隔を小さくしながらソートを繰り返す、というものである。
 *
 * 最悪計算時間: O(n2)
 * 最良計算時間: O(nlogn)
 * 平均計算時間: 間隔列に依存
 * 最悪空間計算量: O(n) total, O(1) auxiliary
 * 不安定
 ***/
import { proc, assert } from '../utils';

function shellSort(nums: number[]): number[] {
  shellSort.proc.reset();
  shellSort.proc.log(nums);

  for (let interval = Math.floor(nums.length / 2); interval > 0; interval -= 1) {
    for (let i = 0; i < interval; i += 1) {
      let j = i;
      let k = j + interval;
      let num1 = nums[j];
      let num2 = nums[k];
      while (num2 !== undefined) {
        if (num2 < num1) {
          let tmp = nums[j];
          nums[j] = nums[k];
          nums[k] = tmp;
        }
        j = k;
        k = k + interval;
        num1 = nums[j];
        num2 = nums[k];
      }
      shellSort.proc.log(nums);
    }
  }

  return nums;
}
shellSort.proc = proc;

assert(shellSort([8, 3, 1, 2, 7, 5, 6, 4]), [1, 2, 3, 4, 5, 6, 7, 8]);
assert(
  shellSort.proc.state,
  [
    [8, 3, 1, 2, 7, 5, 6, 4],
    // 4
    [7, 3, 1, 2, 8, 5, 6, 4],
    [7, 3, 1, 2, 8, 5, 6, 4],
    [7, 3, 1, 2, 8, 5, 6, 4],
    [7, 3, 1, 2, 8, 5, 6, 4],
    // 3
    [2, 3, 1, 6, 8, 5, 7, 4],
    [2, 3, 1, 6, 4, 5, 7, 8],
    [2, 3, 1, 6, 4, 5, 7, 8],
    // 2
    [1, 3, 2, 6, 4, 5, 7, 8],
    [1, 3, 2, 5, 4, 6, 7, 8],
    // 1
    [1, 2, 3, 4, 5, 6, 7, 8],
  ],
  { verbose: true },
);
