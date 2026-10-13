import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/limits/online.py?raw'
import out from '../../../examples/limits/online.out?raw'

// §14.6 — rent-or-buy for a van: the online rule never knows the future, yet is never worse than
// 2 − 1/B times the offline optimum.
export const online: Scene = {
  id: 'online',
  title: 'Online decisions',
  flow: 'TB',
  nodes: [
    {
      id: 'ratio',
      kind: 'plot',
      label: 'Online cost ÷ offline cost, B = 10',
      plot: {
        x: { min: 0, max: 30, step: 5, label: 'days the van is needed' },
        y: { min: 0, max: 2.2, step: 0.5, label: 'ratio' },
        axes: 'corner',
        series: [
          {
            kind: 'line',
            points: Array.from({ length: 30 }, (_, i): [number, number] => {
              const d = i + 1
              return [d, (d < 10 ? d : 19) / Math.min(d, 10)]
            }),
            color: '#34d399',
            label: 'rent until day 10, then buy',
            labelAt: [16, 1.65],
          },
          { kind: 'line', points: [[0, 1.9], [30, 1.9]], color: 'warn', dashed: true, label: '2 − 1/B', labelAt: [3, 2.05] },
        ],
      },
    },
    { id: 'code', kind: 'code', filename: 'online.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
  ],
  edges: [
    { source: 'ratio', target: 'code' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
