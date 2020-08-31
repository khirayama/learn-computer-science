/*
 * Binary Search
 */

// Binary Search
let left = 0;
let right = nums.length;
let mid = Math.floor((left + right) / 2);

while (left < right) {
  if (nums[mid] < target) {
    left = mid + 1;
  } else if (target <= nums[mid]) {
    right = mid;
  }
  mid = Math.floor((left + right) / 2);
}
return mid;
