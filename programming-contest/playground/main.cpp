#include <iostream>
#include <set>
using namespace std;

int main() {
  int N;
  int d[101];

  cin >> N;
  for (int i = 0; i < N; ++i) {
    cin >> d[i];
  }

  set<int> values;
  for (int i = 0; i < N; ++i) {
    values.insert(d[i]);
  }
  cout << values.size() << endl;
}
