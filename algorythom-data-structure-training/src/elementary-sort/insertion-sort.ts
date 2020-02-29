/***
 * 挿入ソート
 *
 ***/
function insertionSort(nums: number[]): number[][] {
  const result = [[...nums]];

  return result;
}

test('Insertion Sort', () => {
  expect(insertionSort([5, 2, 4, 6, 1, 3])).toBe([
    [5, 2, 4, 6, 1, 3],
    [2, 5, 4, 6, 1, 3],
    [2, 4, 5, 6, 1, 3],
    [2, 4, 5, 6, 1, 3],
    [1, 2, 4, 5, 6, 3],
    [1, 2, 3, 4, 5, 6],
  ]);
});
