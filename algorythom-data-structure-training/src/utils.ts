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

export function swap(items: any[], i: number, j: number): void {
  let tmp = items[i];
  items[i] = items[j];
  items[j] = tmp;
}
