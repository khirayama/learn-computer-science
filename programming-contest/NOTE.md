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

## Refs

- [計算量オーダーについて - Qiita](https://qiita.com/asksaito/items/59e0d48408f1eab081b5)
- [AtCoderで水色になるまでにやったこと＆あなたが緑色で停滞する3つの理由 - ホスフィンの日記](https://mine691.hatenablog.com/entry/2019/04/11/215129)
- [計算量オーダーの求め方を総整理！ 〜 どこから log が出て来るか 〜 - Qiita](https://qiita.com/drken/items/872ebc3a2b5caaa4a0d0#%E4%BE%8B-1-%E7%B7%9A%E5%BD%A2%E6%8E%A2%E7%B4%A2-on)
- [アルゴリズムとデータ構造 | ++C++; // 未確認飛行 C](https://ufcpp.net/study/algorithm/)
