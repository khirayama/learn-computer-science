/***
 * 挿入ソート
 *
 ***/
function add(a: number, b: number): number {
  return a + b;
}

test('add', () => {
  expect(add(1, 3)).toBe(4);
});
