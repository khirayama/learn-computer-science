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