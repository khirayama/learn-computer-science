## コンピュータ科学基礎

- [x] 情報表現
  - [x] 基数変換
  - [x] 負数表現
  - [x] 浮動小数点数
  - [x] 文字コード
  - [x] 誤り制御
- [x] 論理と集合
  - [x] 論理
  - [x] 論理回路
  - [x] 集合
- [x] プログラムの基礎理論
  - [x] オートマトン
  - [x] BNF(Backus-Naur Form)
  - [x] コンパイル手順
- [x] 数理応用
  - [x] 対数
  - [x] 順列と組合せ
  - [x] 確率
  - [x] 確率分布

## メモ

- 1の歩数だと、表現できる数が少なくなるので2の歩数が使われる
- 浮動小数点数はちょっと苦手っぽい
  - [ビットで表す数字の世界～浮動小数点編～](http://www.altima.jp/column/fpga_edison/bit_number_float.html)
- 文字コードはもうちょっと理解深めたいので気が向いた時に
- 誤り制御のCRC方式がよくわからないので調べる
  - [Cyclic Redundancy Check(CRC)を理解する - Qiita](https://qiita.com/tobira-code/items/dbcffc41f54201130b6c)
  - 思ったよりむずい。基本は、ビット列を多項式と考え、事前に決めた生成多項式で割算をすると誤りが検出できる。という感じ
  - 誤り検出符号は、割算したときに余りがでないようにしておき、余りがある場合は誤りが発生したということ
