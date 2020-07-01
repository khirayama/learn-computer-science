#include <iostream>

using namespace std;

int main() {
  int x;
  int y;

  while (1) {
    cin >> x >> y;

    if (x == 0 && y == 0) {
      break;
    } else if (x > y) {
      cout << y << " " << x << endl;
    } else if (y > x) {
      cout << x << " " << y << endl;
    } else {
      cout << x << " " << y << endl;
    }
  }
  return 0;
}
