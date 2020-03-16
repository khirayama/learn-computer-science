/***
 * [連結リスト - Wikipedia](https://ja.wikipedia.org/wiki/%E9%80%A3%E7%B5%90%E3%83%AA%E3%82%B9%E3%83%88)
 * 一連のノードが、任意のデータフィールド群を持ち、1つか2つの参照（リンク）により次（および前）のノードを指している。
 *
 * 連結リストの主な利点は、リスト上のノードを様々な順番で検索可能な点である。連結リストは自己参照型のデータ型であり、同じデータ型の別のノードへのリンク（またはポインタ）を含んでいる。連結リストは場所が分かっていれば、ノードの挿入や削除を定数時間で行うことができる（場所を探すのにかかる時間はリスト上の順番の条件などにも依存するし、後述する片方向リストなのか双方向リストなのかにも依存する）。
 ***/
import { assert } from '../utils';

class Node<T> {
  public value: T;

  public prev: Node<T> | null = null;

  public next: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export class LinkedList<T> {
  public head: Node<T> | null = null;

  public insert(value: T) {
    const newNode = new Node<T>(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let node = this.head;

      while (node && node.prev) {
        node = node.prev;
      }
      node.prev = newNode;
      newNode.next = node;
      if (node === this.head) {
        this.head = newNode;
      }
    }
  }

  public delete(value: T) {
    let node = this.head;
    while (node) {
      if (node.value === value) {
        const prev = node.prev;
        const next = node.next;
        prev?.next = next;
        next?.prev = prev;
        break;
      }
      node = node.next;
    }
  }

  public show() {
    let node = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }
}

const linkedList = new LinkedList<number>();
linkedList.insert(5);
linkedList.insert(2);
linkedList.insert(3);
linkedList.insert(1);
linkedList.delete(3);
linkedList.insert(6);
linkedList.delete(5);
assert(linkedList.head?.value, 6);
assert(linkedList.head?.next?.value, 1);
assert(linkedList.head?.next?.next?.value, 2);
