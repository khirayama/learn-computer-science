#include <iostream>
#include <set>
using namespace std;

int main() {
  int N;
  int Y;

  cin >> N;
  cin >> Y;

  for (int a = 0; a <= N; ++a) {
    for (int b = 0; b <= N - a; ++b) {
      int c = N - a - b;

      int total = a * 10000 + b * 5000 + c * 1000;
      if (total == Y) {
        cout << a << " " << b << " " << c << endl;
        return 0;
      }
    }
  }
  cout << "-1 -1 -1" << endl;
}
