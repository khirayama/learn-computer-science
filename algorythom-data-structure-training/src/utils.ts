import deepEqual from 'fast-deep-equal';

export const proc: {
  state: any[];
  reset: () => void;
  log: (arg: any) => void;
} = {
  state: [],
  reset: () => {
    proc.state = [];
  },
  log: (arg: any) => {
    let data = arg;
    if (typeof arg === 'object') {
      data = JSON.parse(JSON.stringify(arg));
    }
    proc.state.push(data);
  },
};

export function assert(actual: any, expected: any, options: { verbose: boolean } = { verbose: false }) {
  const red = '\u001b[31m';
  const green = '\u001b[32m';

  const result = deepEqual(actual, expected);
  if (result) {
    console.log(`${green}Success.`);
  } else {
    console.log(`${red}Failed.`);
    if (options.verbose) {
      console.log(`Actual: ${JSON.stringify(actual)}`);
      console.log(`Expected: ${JSON.stringify(expected)}`);
    }
  }
  return result;
}

export function swap(items: any[], i: number, j: number): void {
  let tmp = items[i];
  items[i] = items[j];
  items[j] = tmp;
}
