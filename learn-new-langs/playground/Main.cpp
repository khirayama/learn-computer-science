// 入出力
// << 出力演算子、>> 入力演算子
#include <iostream>

using namespace std;

int main() {
  // [基本入出力](http://wisdom.sakura.ne.jp/programming/cpp/cpp2.html)
  char str[128];
  cout << "名前を入力してください>";
  cin >> str;
  cout << "ようこそ " << str << " さん";

  int i , j;
  cout << "二つの値を加算します>";
  cin >> i >> j;
	cout << i + j;
	return 0;
}
