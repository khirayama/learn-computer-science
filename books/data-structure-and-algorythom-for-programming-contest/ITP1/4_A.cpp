#include <stdio.h>
#include <iostream>

using namespace std;

void compareOK(double actual, double expect) {
  if (actual == expect) {
    cout << "Pass" << endl;
  } else {
    cout << "Failure: " << actual << " and " << expect << " don't match." << endl;
  }
}

void calc(int a, int b, double result[3]) {
  double d = a / b;
  double r = a % b;
  double f = 1.000 * a / b;

  result[0] = d;
  result[1] = r;
  result[2] = f;
}

int main() {
  int a;
  int b;
  cin >> a >> b;

  double result[3];
  // calc(3, 2, result);
  // compareOK(result[0], 1);
  // compareOK(result[1], 1);
  // compareOK(result[2], 1.5);
  // calc(12300, 99, result);
  // compareOK(result[0], 124);
  // compareOK(result[1], 24);
  // compareOK(result[2], 124.24242424);
  calc(a, b, result);

  printf("%.0lf %.0lf %.8lf\n", result[0], result[1], result[2]);

  return 0;
}
