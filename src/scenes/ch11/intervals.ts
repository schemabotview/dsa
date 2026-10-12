import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch11/intervals.py?raw'
import out from '../../../examples/ch11/intervals.out?raw'

// §11.3 — the eleven dock slots as a timeline (one row each, sorted by finish), the four chosen by
// earliest-finish highlighted, then the code comparing three greedy rules against brute force.
const slots: [number, number][] = [
  [1, 4], [3, 5], [0, 6], [5, 7], [3, 9], [5, 9], [6, 10], [8, 11], [8, 12], [2, 14], [12, 16],
]
const chosen = new Set(['1,4', '5,7', '8,11', '12,16'])

export const intervals: Scene = {
  id: 'intervals',
  title: 'Interval scheduling',
  flow: 'TB',
  nodes: [
    {
      id: 'timeline',
      kind: 'plot',
      label: 'Dock slots, sorted by finish time',
      sub: 'earliest finish keeps 4: the most possible',
      plot: {
        x: { min: 0, max: 16, step: 2, label: 'time' },
        y: { min: 0, max: 12, step: 1, label: 'slot' },
        axes: 'corner',
        grid: false,
        series: slots.map(([s, f], i) => ({
          kind: 'line' as const,
          points: [[s, 11 - i], [f, 11 - i]] as [number, number][],
          color: chosen.has(`${s},${f}`) ? '#34d399' : '#5b6472',
        })),
      },
    },
    {
      id: 'run',
      label: 'Three rules against brute force',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'code', kind: 'code', filename: 'intervals.py', label: code.trimEnd(), hug: true },
        { id: 'out', kind: 'code', filename: 'output', label: out.trimEnd(), hug: true },
      ],
    },
  ],
  edges: [{ source: 'timeline', target: 'run' }],
}
