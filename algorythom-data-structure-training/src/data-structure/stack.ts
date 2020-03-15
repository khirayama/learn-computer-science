/***
 * [スタック - Wikipedia](https://ja.wikipedia.org/wiki/%E3%82%B9%E3%82%BF%E3%83%83%E3%82%AF)
 * データを後入れ先出し（LIFO: Last In First Out; FILO: First In Last Out）の構造で保持するものである。
 ***/
import { assert } from '../utils';

class Stack<T> {
  public items: T[] = [];

  public isEmpty() {
    return this.items.length === 0;
  }

  public push(item: T) {
    this.items.push(item);
  }

  public pop(): T | null {
    return this.items.pop() || null;
  }
}

const stack = new Stack();
stack.push(1);
assert(stack.items, [1]);
stack.push(2);
assert(stack.items, [1, 2]);
stack.push(3);
assert(stack.items, [1, 2, 3]);
let val = stack.pop();
assert(val, 3);
assert(stack.items, [1, 2]);
val = stack.pop();
assert(val, 2);
assert(stack.items, [1]);
val = stack.push(3);
assert(stack.items, [1, 3]);
