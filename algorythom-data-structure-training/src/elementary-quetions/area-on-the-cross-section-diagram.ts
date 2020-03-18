import { assert } from '../utils';
import { Stack } from '../elementary-data-structure/stack';

function areasOnTheCrossSectionDiagram(input: string): number {
  const tokens = input.split('');

  let area = 0;

  const stack = new Stack<number>();
  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];

    if (token === '\\') {
      stack.push(i);
    } else if (token === '/') {
      const j = stack.pop();
      if (j !== null) {
        area += i - j;
      }
    }
  }

  return area;
}

assert(areasOnTheCrossSectionDiagram('\\\\///'), 4);
assert(areasOnTheCrossSectionDiagram('\\\\\\////'), 9);
assert(areasOnTheCrossSectionDiagram('\\\\\\_////'), 12);
assert(areasOnTheCrossSectionDiagram('\\\\\\__////'), 15);
assert(areasOnTheCrossSectionDiagram('\\\\\\__/_///'), 17);
assert(areasOnTheCrossSectionDiagram('\\\\////\\_/\\/\\\\\\\\/_/\\\\///'), 26, { verbose: true });
assert(areasOnTheCrossSectionDiagram('\\\\///\\_/\\/\\\\\\\\/_/\\\\///__\\\\\\_\\\\/_\\/_/\\'), 35, { verbose: true });
