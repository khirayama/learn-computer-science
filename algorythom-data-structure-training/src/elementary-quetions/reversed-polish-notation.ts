import { assert } from '../utils';
import { Stack } from '../data-structure/stack';

// Stack Question - Reverse Polish Notation
function reversePolishNotation(code: string) {
  const tokens = code.split(' ');
  const stack = new Stack<number>();

  for (let token of tokens) {
    if (['+', '-', '*', '/'].indexOf(token) !== -1) {
      const num1 = stack.pop();
      const num2 = stack.pop();
      if (num1 && num2) {
        switch (token) {
          case '+': {
            stack.push(num2 + num1);
            break;
          }
          case '-': {
            stack.push(num2 - num1);
            break;
          }
          case '*': {
            stack.push(num2 * num1);
            break;
          }
          case '/': {
            stack.push(num2 / num1);
            break;
          }
        }
      }
    } else {
      stack.push(Number(token));
    }
  }
  return stack.pop();
}

assert(reversePolishNotation('1 2 + 3 4 - *'), -3);
assert(reversePolishNotation('1 2 + 3 -'), 0);
