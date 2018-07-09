#include <iostream>
#include <stdio.h>
#include <string>

using namespace std;

int main() {
  int a;
  int b;
  char op;
  int result;

  while(1) {
    cin >> a >> op >> b;

    if (op == '?') {
      break;
    } else if (op == '+') {
      result = a + b;
    } else if (op == '-') {
      result = a - b;
    } else if (op == '*') {
      result = a * b;
    } else if (op == '/') {
      result = a / b;
    }

    printf("%.1d\n", result);
  }

  return 0;
}
