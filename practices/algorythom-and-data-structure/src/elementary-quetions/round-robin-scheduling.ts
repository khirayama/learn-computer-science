import { assert } from '../utils';
import { Queue } from '../elementary-data-structure/queue';

type Proc = {
  name: string;
  time: number;
};

// Round-robin Schduling
function roundRobinScheduling(quantum: number, procs: Proc[]): Proc[] {
  const result: Proc[] = [];
  const queue = new Queue<Proc>();
  for (let proc of procs) {
    queue.enqueu(proc);
  }

  let time = 0;
  let proc = queue.dequeu();
  while (proc) {
    time += quantum;
    proc.time = proc.time - quantum;

    if (proc.time <= 0) {
      time = time + proc.time;
      result.push({
        name: proc.name,
        time,
      });
    } else {
      queue.enqueu(proc);
    }

    proc = queue.dequeu();
  }
  return result;
}

assert(
  roundRobinScheduling(100, [
    {
      name: 'p1',
      time: 150,
    },
    {
      name: 'p2',
      time: 80,
    },
    {
      name: 'p3',
      time: 200,
    },
    {
      name: 'p4',
      time: 350,
    },
    {
      name: 'p5',
      time: 20,
    },
  ]),
  [
    {
      name: 'p2',
      time: 180,
    },
    {
      name: 'p5',
      time: 400,
    },
    {
      name: 'p1',
      time: 450,
    },
    {
      name: 'p3',
      time: 550,
    },
    {
      name: 'p4',
      time: 800,
    },
  ],
);
