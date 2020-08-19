#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

string divide[4] = {"dream", "dreamer", "erase", "eraser"};

int main() {
  string S;
  cin >> S;

  reverse(S.begin(), S.end());
  for (int i = 0; i < 4; ++i) {
    reverse(divide[i].begin(), divide[i].end());
  }

  bool isOK = true;
  for (int i = 0; i < S.size();) {
    bool canDivided = false;

    for (int j = 0; j < 4; ++j) {
      string d = divide[j];
      if (S.substr(i, d.size()) == d) {
        canDivided = true;
        i += d.size();
      }
    }

    if (!canDivided) {
      isOK = false;
      break;
    }
  }

  if (isOK) {
    cout << "YES" << endl;
  } else {
    cout << "NO" << endl;
  }
}
