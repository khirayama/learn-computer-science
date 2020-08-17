#include <iostream>
#include <string>
using namespace std;

int main() {
    int N;
    cin >> N;

    int A[201];

    for (int i = 0; i < N; ++i) {
      cin >> A[i];
    }

    int res = 0;

    while (true) {
      bool exist_odd = false;

      for (int i = 0; i < N; ++i) {
        cout << A[i] << endl;
        if (A[i] % 2 != 0) {
          exist_odd = true;
        }
      }

      if (exist_odd) {
        break;
      }

      for (int i = 0; i < N; ++i) {
        A[i] /= 2;
      }

      ++res;
    }

    cout << res << endl;
}
