- 以下の内容で再編成
  - 競技プログラミングアプローチ
  - データ構造とアルゴリズムの知識
  - 言語固有
    - テストの仕方
    - 配列、文字列の扱い方など
  - スニペット
    - Binary Search、Priority Queueなど
- アルゴリズムを覚えるのと、言語の幅を増やす意味で以下で解く
  - JavaScript
  - Python
  - C++
- 言語を学ぶとき
  - 変数定義
  - 配列
  - 連想配列
  - 関数
  - クラス
  - インターフェース
  - モジュール
  - 制御構文(if, for)
  - パッケージ管理

## Note

- Solution
  - 特性をメモしておく
    - sort済み？
    - なぜ引数が2つに分かれてる？
    - 特殊な要件(計算量をxxxとする)
    - maxlength, maxvalue
    - 問題をよく読む
    - 境界条件、特殊条件のテストを書く
  - 返り値の為の変数とそのreturnから書いてみる
  - 不恰好、不効率でも一度答えに行き着くこと
    - 問題を理解する
    - テストケースを増やせる
  - 与えられた条件を整理する
    - emptyはありえる？
    - nagativeはありえる？
  - 再帰
    - 問題を小さくする方法
    - 終了条件
  - Recursive Approach
  - Brute Force Approach
  - Sliding Window Approach
  - 計算量をメモする
- Optimize
  - 枝狩り
  - ループをやめる
- Approach
  - substring
    - 総当たり
    - window
  - palindrome 回文
    - 鏡写しの特性を利用して中心から左右の文字も同じかチェックするように広げればよい
- JavaScript Tips
  - 文字列
    - 部分文字列: substring(start, end) // 非破壊
    - 部分文字列: substr(start, len) // 非破壊、非推奨
  - 数字
    - 四捨五入: Math.round
    - 切り上げ: Math.ceil
    - 切り捨て: Math.floor
    - int変換: parseInt(num, 10)
  - 配列
    - 抜き出し: slice(start, end) // 非破壊
    - 置換: splice(start, count, items)
    - 先頭追加: unshift
    - 末尾追加: push
    - 先頭削除: shift
    - 末尾削除: pop
  - その他
    - Setを利用してunique値だけの配列を作れる
- その他
  - 基礎的なやり方と計算量は暗記が早そう
    - https://ja.wikipedia.org/wiki/%E3%82%BD%E3%83%BC%E3%83%88
    - ソート
      - 安定ソート
      - 内部ソート・外部ソート
      - 比較ソート
      - 手法(挿入・交換・選択・マージ)
      - 再帰
    - JavaScriptのsortは？
      - [Array.prototype.sort について | メモログ](https://memolog.org/2018/about-array-prototype-sort.html)
    - バブルソート

## Checklist
/*
- [ ] Understand the description
- [ ] Make an idea
- [ ] Add basic test cases
- [ ] Make an implementation
- [ ] Check the implementation
- [ ] Run code
- [ ] Add extra test cases
** Test cases **
*/

- JavaScript
  - Map: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Map
    - set(key, value):
    - get(key):
    - delete(key):
    - has(key):
  - Array: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array
    - 変更メソッド
      - splice(start, count, items): https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
      - push:
      - pop:
      - unshift:
      - shift:
      - reverse:
      - sort:
    - アクセサメソッド
      - concat:
      - slice:

- Stack & Queue
  - 順番に物事を処理するときに有効なことが多い。
  - 文字列の処理などでも有用。
  - Stackの場合順序の逆転ができる。
  - Stackの場合、深さ優先探索に。Queueの場合、幅優先探索に。
  - Queueには、Deques(双方向キュー、両端キュー)とPriority Queue(優先度付きキュー)に注意。
- Binary Search
  - 並び替えられた要素に対して、適切な位置を探すのに有効。
- Heap
  - ソート済み配列で、挿入に二分探索を利用するものと思えばよい。
- Tree
  - 幅優先探索と深さ優先探索をすぐ実装できるとよい
  - 再帰を適用できるケースが多い
  - stack/queueを使う場合、深さなど引き継いだ方がよい情報は一緒にstack/queueに入れる

- [ ] Intro to Data Structures and Algorithms の Technical Interviewing Techniques を見直す
- [ ] JSの各メソッド覚える
- [ ] 二分探索の実装をすらすらかけるとよい https://leetcode.com/problems/search-insert-position/
  - [ ] 単純な挿入のケースもあるけど、HashMapの値を利用するようなケースもある https://leetcode.com/problems/top-k-frequent-elements/
  - [ ] 参考 [Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/)
```
let left = 0;
let right = nums.length;
let mid = Math.floor((left + right) / 2);

while (left < right) {
  if (nums[mid] < target) {
    left = mid + 1;
  } else if (target <= nums[mid]) {
    right = mid;
  }
  mid = Math.floor((left + right) / 2);
}
return mid;
```
- [ ] 優先度付きキュー(ヒープ)もスムーズにかけるとよい
```
class PriorityQueueForKSmallestPairs {
  constructor() {
    this.items = [];
  }
  
  enqueue(item/* { pos1, pos2, num1, num2 } */) {
    let left = 0;
    let right = this.items.length;
    let mid = Math.floor((left + right) / 2);

    while (left < right && this.items.length !== 0) {
      const tmp = this.items[mid];

      if (tmp.num1 + tmp.num2 <= item.num1 + item.num2) {
        mid += 1;
        left = mid;
      } else {
        right = mid;
      }
      mid = Math.floor((left + right) / 2);
    }
    this.items.splice(mid, 0, item);
  }
  
  dequeue() {
    return this.items.shift();
  }
}
```

- List-Based Collections
  - Lists
  - Arrays
  - Linked Lists
  - Stacks
  - Queues
- Searching and Sorting
  - Binary Search
  - Recursion
  - Bubble Sort
  - Merge Sort
  - Quick Sort
- Maps and Hashing
- Trees
- Graphs

## Refs

- [計算量オーダーについて - Qiita](https://qiita.com/asksaito/items/59e0d48408f1eab081b5)
- [AtCoderで水色になるまでにやったこと＆あなたが緑色で停滞する3つの理由 - ホスフィンの日記](https://mine691.hatenablog.com/entry/2019/04/11/215129)
- [計算量オーダーの求め方を総整理！ 〜 どこから log が出て来るか 〜 - Qiita](https://qiita.com/drken/items/872ebc3a2b5caaa4a0d0#%E4%BE%8B-1-%E7%B7%9A%E5%BD%A2%E6%8E%A2%E7%B4%A2-on)
- [アルゴリズムとデータ構造 | ++C++; // 未確認飛行 C](https://ufcpp.net/study/algorithm/)
- [ワンランク上に行くプロコン講座 - YouTube](https://www.youtube.com/watch?v=_Je4rukUcqE&app=desktop)
- [コーディング面接対策のために解きたいLeetCode 60問 | 新井康平](https://1kohei1.com/leetcode/)
- [競技プログラミングの問題の解き方、そのマニュアル - うさぎ小屋](https://kimiyuki.net/blog/2016/06/21/how-to-solve-problems-in-competitive-programming/)
- [Google社へ入社した人の記事のまとめを作ってみた。 - エンジニアのブログ](https://takeshim.hatenablog.com/entry/2019/04/30/150658)
- [コーディング面接対策のために解きたいLeetCode 60問 | 新井康平](https://1kohei1.com/leetcode/)
- [Intro to Data Structures and Algorithms](https://www.udacity.com/course/data-structures-and-algorithms-in-python--ud513)
- [Refresh Your Resume](https://www.udacity.com/course/refresh-your-resume--ud243)
- [mre/the-coding-interview: Programming exercises, code katas and puzzles for your job interview training - or just for fun.](https://github.com/mre/the-coding-interview)
- [h5bp/Front-end-Developer-Interview-Questions: A list of helpful front-end related questions you can use to interview potential candidates, test yourself or completely ignore.](https://github.com/h5bp/Front-end-Developer-Interview-Questions)
