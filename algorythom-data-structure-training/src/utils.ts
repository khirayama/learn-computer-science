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
    proc.state.push(arg);
  },
};

export function swap(items: number[], i: number, j: number): void {
  let tmp = items[i];
  items[i] = items[j];
  items[j] = tmp;
}
