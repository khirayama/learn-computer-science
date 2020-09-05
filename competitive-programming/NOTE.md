## Index

- [Tips](#Tips)
- [Knowledge](#Knowledge)
- [Syntax and Methods](#Syntax-and-Methods)
  - [JavaScript](#JavaScript)
  - [Python](#Python)
  - [C++](#C++)
- [Snippets](#Snippets)
- [Checklist](#Checklist)
- [Refs](#Refs)

## Tips

- はじめに
  - 問題をよく読み特性を理解する
    - ソート済みか
    - 計算量の指定をxxxとする
    - 最大量、最小量
    - 境界条件、特殊条件のテストを書く
  - 不恰好、不効率でも一度答えに行き着く
    - 問題の理解
    - テストケースを増やせる
  - 与えられた条件を整理する
    - emptyはありえる？
    - nagativeはありえる？
  - 流れ
    - 問題を理解する
    - シンプルなアイデアを作る
    - 基本的なテストケースを考慮する
    - 実装する
    - 実装を確認する
    - テストケースを与えて、流れを確認する
    - エッジケースを考慮する
- アプローチ
  - 再帰
    - 問題を小さくする方法
    - 終了条件を見極める
  - 総当たり
    - 愚直に解く
    - 計算量は一旦気にしない
  - スライディングウインドウ
    - start/endやleft/rightなどを利用して範囲を探索する
- 逆引き解き方
  - 文字列
    - 総当たり
    - スライディングウインドウ
    - 回文 palindrome
      - 鏡写しの特性を利用して中心から左右の文字も同じかチェックするように広げればよい
  - 配列
    - ソート済みか
    - 総当たり
    - スライディングウインドウ
    - ループをやめてみる
    - n^2はMapやSetを使うことで2nにできることが多い
- やること
  - 自分のコードの計算量を理解する


## Knowledge

- Topics
  - Intro by Google
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
  - LeetCode
    - Linked List
    - Two Points
    - Math
    - String
    - Stack
    - Heap
    - Hash Table
    - Array
    - Depth-first Search
    - Breadth-first Search
    - Union Find
    - Tree
    - Binary Search
    - Dynamic Programming
    - Divide and Conquer
    - Recursion
    - Sliding Window
    - Two Pointers
    - Backtracking
    - Bit Manipulation
    - Greedy

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
- 基礎的なやり方と計算量は暗記が早そう
  - https://ja.wikipedia.org/wiki/%E3%82%BD%E3%83%BC%E3%83%88
  - ソート
    - 安定ソート
    - 内部ソート・外部ソート
    - 比較ソート
    - 手法(挿入・交換・選択・マージ)
    - 再帰


## Syntax and Methods

### JavaScript

- String https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String
  - アクセサメソッド
    - substring(start, end) 部分文字列
  - 変更メソッド
    - substr(start, len) 部分文字列
- Math https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math
  - round 四捨五入
  - ceil 切り上げ
  - floor 切り捨て
- Array https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array
  - 変更メソッド
    - splice(start, count, items) https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    - push 末尾追加
    - pop 末尾削除
    - unshift 先頭追加
    - shift 先頭削除
    - reverse
    - sort
  - アクセサメソッド
    - concat
    - slice(start, end)
- Set https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Set
  - add
  - clear
  - delete
  - forEach
  - has
  - size
- Map https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Map
  - set(key, value):
  - get(key):
  - delete(key):
  - has(key):
- その他
  - JavaScriptのsortは？
    - [Array.prototype.sort について | メモログ](https://memolog.org/2018/about-array-prototype-sort.html)

### Python

- Set {} https://note.nkmk.me/python-set/
  - add
  - discard
  - remove
  - pop
  - clear
  - union |
  - intersection &
  - difference -
  - symmetic_difference ^
- Array
  - append 末尾追加
  - extend / + 末尾に別のリストやタプルを結合
  - insert 指定位置に要素を追加
- Math
  - round 整数に丸める場合、2の倍数に丸める 1.5 -> 2, 2.5 -> 2
  - math.ceil
  - math.floor
- Syntax
  - while:
  - in:
  - A if condition else B


## Checklist

- [ ] Intro to Data Structures and Algorithms の Technical Interviewing Techniques を見直す
- [ ] 各メソッド覚える
- [ ] 二分探索の実装をすらすらかけるとよい https://leetcode.com/problems/search-insert-position/
  - [ ] 単純な挿入のケースもあるけど、HashMapの値を利用するようなケースもある https://leetcode.com/problems/top-k-frequent-elements/
  - [ ] 参考 [Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/)

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
