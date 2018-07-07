#include <iostream>

using namespace std;

void insertionSort(int A[], int N) {
  int j, i, v;
  for (i = 1; i < N; i++) {
    v = A[i];
    j = i - 1;
    while (j >= 0 && A[j] > v) {
      A[j + 1] = A[j];
      j--;
    }
    A[j + 1] = v;
  }
}

int main() {
  int nums[3];
  cin >> nums[0] >> nums[1] >> nums[2];

  insertionSort(nums, sizeof(nums) / sizeof(int));

  cout << nums[0] << ' ' << nums[1] << ' ' << nums[2] << endl;
  return 0;
}
