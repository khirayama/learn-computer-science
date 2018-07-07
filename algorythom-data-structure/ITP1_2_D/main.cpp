#include <iostream>

using namespace std;

/*
 * (0, 0) - (W, H)
 * x, y, r
*/

string calculate(int W, int H, int x, int y, int r) {
  if (0 <= x  - r && x + r <= W && 0 <= y - r && y + r <= H) {
    return "Yes";
  } else {
    return "No";
  }
}

int main() {
  // int W;
  // int H;
  // int x;
  // int y;
  // int r;
  //
  // cin >> W >> H >> x >> y >> r;
  // cout << calculate(W, H, x, y, r) << endl;

  cout << (calculate(5, 4, 2, 2, 1) == "Yes") << endl;
  cout << (calculate(5, 4, 2, 4, 1) == "No") << endl;
  cout << (calculate(2, 2, 1, 1, 1) == "Yes") << endl;

  return 0;
}
