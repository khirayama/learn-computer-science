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
  - その他
    - Setを利用してunique値だけの配列を作れる
- その他
  - 基礎的なやり方と計算量は暗記が早そう
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

- 厳しかった
https://leetcode.com/problems/regular-expression-matching/
https://leetcode.com/problems/longest-palindromic-substring/
- とりあえずはOKだけどもっとクールにできた|できそう
https://leetcode.com/problems/palindrome-number/
https://leetcode.com/problems/string-to-integer-atoi/
https://leetcode.com/problems/zigzag-conversion/
https://leetcode.com/problems/integer-to-roman/
https://leetcode.com/problems/roman-to-integer/

## Refs

- [計算量オーダーについて - Qiita](https://qiita.com/asksaito/items/59e0d48408f1eab081b5)
