#include <iostream>
#include <algorithm>
using namespace std;

int main() {
  int N;
  cin >> N;

  int a[101];
  for (int i = 0; i < N; ++i) {
    cin >> a[i];
  }

  sort(a, a + N, greater<int>());

  int Alice = 0;
  int Bob = 0;

  for (int i = 0; i < N; ++i) {
    if (i % 2 == 0) {
      Alice += a[i];
    }
    else {
      Bob += a[i];
    }
  }

  cout << Alice - Bob << endl;
}
