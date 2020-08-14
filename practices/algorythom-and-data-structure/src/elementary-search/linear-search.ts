/***
 * [線型探索 - Wikipedia](https://ja.wikipedia.org/wiki/%E7%B7%9A%E5%9E%8B%E6%8E%A2%E7%B4%A2)
 * リストや配列に入ったデータに対する検索を行うにあたって、 先頭から順に比較を行い、それが見つかれば終了する。
 *
 * リストの探索
 *
 * n個のデータからm個のデータを検索する場合、時間計算量は O(nm) 、空間計算量は O(1) である。
 ***/
import { proc, assert } from '../utils';

function linearSearch<T>(items: T[], target: T): T[] {
  const results: T[] = [];
  for (const item of items) {
    if (item === target) {
      results.push(item);
    }
  }
  return results;
}
linearSearch.proc = proc;

assert(linearSearch([1, 2, 3], 1), [1]);
assert(linearSearch([1, 2, 3, 1], 1), [1, 1]);
assert(linearSearch([1, 2, 3], 4), []);
