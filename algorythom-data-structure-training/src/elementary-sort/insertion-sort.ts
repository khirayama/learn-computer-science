/***
 * [挿入ソート - Wikipedia](https://ja.wikipedia.org/wiki/%E6%8C%BF%E5%85%A5%E3%82%BD%E3%83%BC%E3%83%88)
 * 挿入ソート（インサーションソート）は、ソートのアルゴリズムの一つ。整列してある配列に追加要素を適切な場所に挿入すること。平均計算時間・最悪計算時間がともにO(n2)と遅いが、アルゴリズムが単純で実装が容易なため、しばしば用いられる。安定な内部ソート。基本挿入法ともいう。in-placeアルゴリズムであり、オンラインアルゴリズムである。挿入ソートを高速化したソート法として、シェルソートが知られている。
 *
 * - 先頭の要素をソート済みとし、未ソート部分がなくなるまで以下を繰り返す。
 * - 未ソート部分の先頭から要素を1つ取り出す
 * - ソート部分に対して、末尾から要素が大きければ一つずつ移動する
 *
 * 最悪計算時間: O(n2)
 * 最良計算時間: O(n)
 * 平均計算時間: O(n2)
 * 最悪空間計算量: O(n) total, O(1) auxiliary
 * 安定
 ***/
import { proc, swap, assert } from '../utils';

function insertionSort(nums: number[]): number[] {
  insertionSort.proc.reset();
  insertionSort.proc.log(nums);

  for (let i = 1; i < nums.length; i += 1) {
    for (let j = i; 0 <= j; j -= 1) {
      const num1 = nums[j];
      const num2 = nums[j - 1] || null;

      if (num2 === null) {
        break;
      }

      if (num2 > num1) {
        swap(nums, j, j - 1);
      } else {
        break;
      }
    }
    insertionSort.proc.log(nums);
  }

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
