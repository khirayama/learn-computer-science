#include <iostream>
#include <stdio.h>
#include <math.h>

using namespace std;

void calc(double r, double result[2]) {
  result[0] = r * r * M_PI;
  result[1] = 2 * r * M_PI;
}

int main() {
  double r;
  cin >> r;

  double result[2];
  calc(r, result);

  printf("%.6lf %.6lf\n", result[0], result[1]);

  return 0;
}
