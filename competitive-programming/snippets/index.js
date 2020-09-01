/*
 * Binary Search
 * Priority Queue
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

// Priority Queue
class PriorityQueueForKSmallestPairs {
  constructor() {
    this.items = [];
  }
  
  enqueue(item/* { pos1, pos2, num1, num2 } */) {
    let left = 0;
    let right = this.items.length;
    let mid = Math.floor((left + right) / 2);

    while (left < right && this.items.length !== 0) {
      const tmp = this.items[mid];

      if (tmp.num1 + tmp.num2 <= item.num1 + item.num2) {
        mid += 1;
        left = mid;
      } else {
        right = mid;
      }
      mid = Math.floor((left + right) / 2);
    }
    this.items.splice(mid, 0, item);
  }
  
  dequeue() {
    return this.items.shift();
  }
}
