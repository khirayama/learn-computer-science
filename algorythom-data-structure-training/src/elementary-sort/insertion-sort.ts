/***
 * [挿入ソート - Wikipedia](https://ja.wikipedia.org/wiki/%E6%8C%BF%E5%85%A5%E3%82%BD%E3%83%BC%E3%83%88)
 * 挿入ソート（インサーションソート）は、ソートのアルゴリズムの一つ。整列してある配列に追加要素を適切な場所に挿入すること。平均計算時間・最悪計算時間がともにO(n2)と遅いが、アルゴリズムが単純で実装が容易なため、しばしば用いられる。安定な内部ソート。基本挿入法ともいう。in-placeアルゴリズムであり、オンラインアルゴリズムである。挿入ソートを高速化したソート法として、シェルソートが知られている。
 *
 * 平均計算時間・最悪計算時間がともにO(n2)と遅いが、アルゴリズムが単純で実装が容易なため、しばしば用いられる。
 *
 * 最悪計算時間: O(n2)
 * 最良計算時間: O(n)
 * 平均計算時間: O(n2)
 * 最悪空間計算量: O(n) total, O(1) auxiliary
 * 安定
 ***/
import { proc, assert } from '../utils';

function insertionSort(nums: number[]): number[] {
  insertionSort.proc.reset();
  insertionSort.proc.log(nums);

  for (let i = 1; i < nums.length; i += 1) {
    const num1 = nums[i];

    let j = i - 1;
    let num2 = nums[j];
    while (num2 !== undefined && num2 > num1) {
      j -= 1;
      num2 = nums[j];
    }
    const num = nums.splice(i, 1)[0];
    nums.splice(j + 1, 0, num);
    insertionSort.proc.log(nums);
  }

  return nums;
}
insertionSort.proc = proc;

assert(insertionSort([0, 2, 4, 6, 1, 0]), [0, 0, 1, 2, 4, 6]);
assert(insertionSort([5, 2, 4, 6, 1, 3]), [1, 2, 3, 4, 5, 6]);
assert(insertionSort.proc.state, [
  [5, 2, 4, 6, 1, 3],
  [2, 5, 4, 6, 1, 3],
  [2, 4, 5, 6, 1, 3],
  [2, 4, 5, 6, 1, 3],
  [1, 2, 4, 5, 6, 3],
  [1, 2, 3, 4, 5, 6],
]);
