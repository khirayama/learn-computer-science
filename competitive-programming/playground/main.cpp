#include <iostream>
using namespace std;

int main() {
  int N;
  int t[100001];
  int x[100001];
  int y[100001];

  t[0] = 0;
  x[0] = 0;
  y[0] = 0;

  cin >> N;
  for (int i = 0; i < N; ++i) {
    cin >> t[i + 1] >> x[i + 1] >> y[i + 1];
  }

  bool isOK = true;
  for (int i = 0; i < N; ++i) {
    int dt = t[i + 1] - t[i];
    int dist = abs(x[i + 1] - x[i]) + abs(y[i + 1] - y[i]);

    if (dt < dist) {
      isOK = false;
    }
    if (dist % 2 != dt % 2) {
      isOK = false;
    }
  }

  if (isOK) {
    cout << "Yes" << endl;
  } else {
    cout << "No" << endl;
  }
}
