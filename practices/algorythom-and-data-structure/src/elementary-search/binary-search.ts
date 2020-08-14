/***
 * [二分探索 - Wikipedia](https://ja.wikipedia.org/wiki/%E4%BA%8C%E5%88%86%E6%8E%A2%E7%B4%A2)
 * ソート済みのリストや配列に入ったデータ（同一の値はないものとする）に対する検索を行うにあたって、 中央の値を見て、検索したい値との大小関係を用いて、検索したい値が中央の値の右にあるか、左にあるかを判断して、片側には存在しないことを確かめながら検索していく。
 *
 * リストの探索
 *
 * n個のデータがある場合、時間計算量は O(logn) である。
 * n個のデータの中央の値を見ることで、1回の操作でn/2個程度（奇数の場合は(n-1)/2個、偶数の場合はn/2個または(n/2)-1個）の要素を無視することができる。
 ***/
import { proc, assert } from '../utils';

function binarySearch<T>(items: T[], target: T): T[] {
  return [];
}
binarySearch.proc = proc;

assert(binarySearch(1, 2, 3));
