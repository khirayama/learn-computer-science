# LeetCodeで学ぶデータ構造とアルゴリズムの学習指針

## 入門

### データ構造

- 抽象データ型、配列、連結リスト、その他
  - スタック
  - キュー
  - 両端キュー
  - 優先度付きキュー
  - 連結リスト
    - 単方向
    - 双方向
  - セット 
  - 素集合データ構造(Union-Find)
- 木構造
  - 二分木
    - 二分探索木
    - 平衡二分木
  - ヒープ
  - トライ木
- ハッシュ
  - 連想配列、マップ
    - ハッシュテーブル
- グラフ
  - グラフ
  - 有向グラフ
  - オイラー路
  - オイラー閉路
  - ハミルトン路
  - ハミルトン閉路

### アルゴリズム設計パラダイム

- 力任せ探索、力任せ法
- 分割統治法
- 動的計画法
- 貪欲法

### 実装

- 再帰
- 2ポインタ
- 移動窓
- トポロジカルソート

### アルゴリズム

- 探索
  - 全探索
  - 線形探索
  - 二分探索(分割統治法)
  - 幅優先探索
  - 深さ優先探索
    - 行きがけ順
    - 帰りがけ順
    - 通りがけ順
- ソート
  - 選択ソート
  - 挿入ソート
  - バブルソート
  - ヒープソート
  - マージソート
  - クイックソート


## 有名問題

### 問題分類

- ビット操作
- 文字列操作
- 数値操作
- 設計

### 有名問題

- 最大フロー(最大流) / 最小カット問題
  - フォードファルカーソン法
- 最短経路問題
  - ダイクストラ法(貪欲法)
  - ベルマン-フォード法(TODO)
  - A\*アルゴリズム(推定値つきダイクストラ法)
- 最小全域木問題
  - クラスカル法(貪欲法)
  - プリム法(貪欲法)
- ナップザック問題
  - 動的計画法
- 8クイーン問題(制約充足問題)
  - バックトラック法(力まかせ法)
- 最大公約数計算
  - ユークリッド互除法
- 素数計算
  - エラストテレスの篩
- 迷路探索
  - 右手法(深さ優先探索)
  - 番兵
- フィボナッチ数列計算
  - 動的計画法
- 累積和
  - いもす法
- ハノイの塔
  - 再帰
- 基数変換(ビット演算)
- 3目並べ
  - ミニマックス法
- 文字列探索
  - KMP法
  - BM(Boyer-Moore)法
- 逆ポーランド記法
  - スタック
- 組み合わせ最適化問題
  - 巡回セールスマン問題
  - スケジューリング問題
- 編集距離(レーベンシュタイン距離)問題
  - 再帰
  - Wagner-Fischer法(動的計画法)

- 入門以降
  - 線型計画法
  - 線形計画問題
    - シンプレックス法(線形計画法)
    - カーマーカー法
  - スキップリスト
  - 隠れマルコフモデル
  - ラスベガス法
  - モンテカルロ法
  - 赤黒木
  - マトロイド
  - 有限オートマトン
  - 組み合わせ数学
  - 並列アルゴリズム
  - 文章分かち書き
  - NP完全問題
  - 露天採鉱問題
  - ネットワークフロー理論
- 不要
  - FizzBuzz
  - 自動販売機お釣り計算
  - ファイル探し
  - 発電計画問題

## LeetCode Topics

```
[
  // 問題分類
  "String",
  "Math",
  "Design",
  "Bit Manipulation",

  // データ構造
  "Array",
  "Tree",
  "Hash Table",
  "Stack",
  "Graph",
  "Heap",
  "Linked List",
  "Union Find",
  "Trie",
  "Queue",

  // 設計パラダイム
  "Dynamic Programming",
  "Greedy",
  "Divide and Conquer",

  // 探索
  "Depth-first Search",
  "Binary Search",
  "Breadth-first Search",

  // ソート
  "Sort",

  // 実装
  "Two Pointers",
  "Backtracking",
  "Recursion",
  "Sliding Window",


  // 中級
  "Binary Indexed Tree",
  "Segment Tree",
  "Binary Search Tree",
  "Dequeue",
  "Suffix Array",
  "Topological Sort",
  "Brainteaser",
  "Minimax",
  "Geometry",
  "OOP",
  "Line Sweep",
  "Reservoir Sampling",
  "Rejection Sampling",
  "Ordered Map",
  "Random",
  "Rolling Hash",
  "Meet in the Middle"
  "Memoization",
]
```
