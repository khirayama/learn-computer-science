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

### 実装とアルゴリズム設計パラダイム

- 力任せ探索、力任せ法
- 分割統治法
- 動的計画法
- 貪欲法

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

### 問題分類

- ビット操作
- 文字列操作
- 数値操作
- 設計

### 実装

- 再帰
- 2ポインタ
- 移動窓
- トポロジカルソート


## 肩慣らしと有名問題

- 最大フロー(最大流)問題
- 最短経路問題
  - ダイクストラ法(貪欲法)
  - ベルマン-フォード法(TODO)
  - A\*アルゴリズム(推定値つきダイクストラ法)
- 最小全域木問題
  - クラスカル法(貪欲法)
  - プリム法(貪欲法)
- ネットワークフロー問題、理論
- ナップザック問題
- 8クイーン問題(制約充足問題)
  - バックトラック法(力まかせ法)

## 未整理

- フォードファルカーソン法
- 線型計画法
- 線形計画問題
  - シンプレックス法(線形計画法)
  - カーマーカー法(TODO)

- 肩慣らし問題
  - FizzBuzz
  - 自動販売機お釣り計算
  - 基数変換
  - 素数判定
  - フィボナッチ数列
- 有名問題
  - 迷路探索(番兵)
  - ハノイの塔
  - ファイル探し
  - 3目並べ
  - 文字列探索
  - Boyer-Moore法
  - 逆ポーランド記法
  - ユークリッド互除法
  - ミニマックス法
  - 最小カット問題
  - 露天採鉱問題
  - 巡回セールスマン問題
  - スケジューリング問題
  - 発電計画問題
- 赤黒木
- 累積和
- マトロイド
- エラストテレスの篩
- いもす法
- 右手法
- スキップリスト
- 有限オードマトン
- ハミルトン路
- オイラー路
- NP完全問題
- 組み合わせ数学
- 並列アルゴリズム
- 編集距離
- 文章分かち書き
- 隠れマルコフモデル
- ラスベガス法
- モンテカルロ法

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
