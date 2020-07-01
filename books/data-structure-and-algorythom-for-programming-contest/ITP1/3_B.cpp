#include <iostream>

using namespace std;

int main() {
  int count = 0;
  int x;

  while (1) {
      cin >> x;
      count += 1;

      if (x == 0) {
        break;
      } else {
        cout << "Case " << count << ": " << x << endl;
      }
  }
  return 0;
}
