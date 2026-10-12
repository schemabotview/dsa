import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch11/weighted_fail.py?raw'
import out from '../../../examples/ch11/weighted_fail.out?raw'

// §11.5 — give each slot a value and the earliest-finish rule fails: it keeps three small slots worth
// 6 and loses the single long slot worth 10.
export const weightedFail: Scene = {
  id: 'weighted-fail',
  title: 'When greedy fails',
  flow: 'TB',
  nodes: [
    {
      id: 'timeline',
      kind: 'plot',
      label: 'Slots with values (parcels carried)',
      sub: 'greedy keeps the three short ones: 6; best is the long one: 10',
      plot: {
        x: { min: 0, max: 10, step: 1, label: 'time' },
        y: { min: 0, max: 5, step: 1, label: 'slot' },
        axes: 'corner',
        grid: false,
        series: [
          { kind: 'line', points: [[0, 4], [3, 4]], color: 'warn', label: 'value 2', labelAt: [1.5, 4.4] },
          { kind: 'line', points: [[2, 3], [9, 3]], color: '#34d399', label: 'value 10', labelAt: [5.5, 3.4] },
          { kind: 'line', points: [[4, 2], [6, 2]], color: 'warn', label: 'value 2', labelAt: [5, 2.4] },
          { kind: 'line', points: [[7, 1], [8, 1]], color: 'warn', label: 'value 2', labelAt: [7.5, 1.4] },
        ],
      },
    },
    {
      id: 'run',
      label: 'Earliest finish against brute force',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'code', kind: 'code', filename: 'weighted_fail.py', label: code.trimEnd(), hug: true },
        { id: 'out', kind: 'code', filename: 'output', label: out.trimEnd(), hug: true, pattern: 'warn' },
      ],
    },
  ],
  edges: [{ source: 'timeline', target: 'run' }],
}
