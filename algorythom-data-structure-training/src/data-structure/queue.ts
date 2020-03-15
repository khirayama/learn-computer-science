/***
 * [キュー (コンピュータ) - Wikipedia](https://ja.wikipedia.org/wiki/%E3%82%AD%E3%83%A5%E3%83%BC_(%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF))
 * データを先入れ先出し[1]のリスト構造で保持するものである。キューからデータを取り出すときには、先に入れられたデータから順に取り出される。
 *
 * 探索アルゴリズムでスタックを使うかキューを使うかによって、深さ優先探索（スタック使用）か幅優先探索（キュー使用）になる。
 ***/

import { assert } from '../utils';

export class Queue<T> {
  public items: T[] = [];

  public enqueu(item: T) {
    this.items.unshift(item);
  }

  public dequeu(): T | null {
    const item = this.items.pop();
    return item === undefined ? null : item;
  }
}

const queue = new Queue();
queue.enqueu(1);
assert(queue.items, [1]);
queue.enqueu(2);
assert(queue.items, [2, 1]);
queue.enqueu(3);
assert(queue.items, [3, 2, 1]);
let val = queue.dequeu();
assert(val, 1);
assert(queue.items, [3, 2]);
val = queue.dequeu();
assert(val, 2);
assert(queue.items, [3]);
queue.enqueu(1);
assert(queue.items, [1, 3]);
val = queue.dequeu();
assert(val, 3);
