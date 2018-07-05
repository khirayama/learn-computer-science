#include <iostream>

using namespace std;

int main() {
  int S;
  cin >> S;
  int oneHour = 60 * 60;
  int oneMin = 60;
  int h = S / oneHour;
  int m = (S - h * oneHour) / oneMin;
  int s = S - h * oneHour - m * oneMin;
  cout << h << ':' << m << ':' << s << endl;
  return 0;
}
