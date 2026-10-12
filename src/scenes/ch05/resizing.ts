import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch05/probing_set.py?raw'
import out from '../../../examples/ch05/resizing.out?raw'

// §5.5 — load factor as a sawtooth: it climbs to 0.5, the table doubles, it halves. Then the set that
// does it and the rehash count over 1000 inserts.
const saw: [number, number][] = []
for (let n = 1, m = 8; n <= 70; n++) {
  if (n / m > 0.5) m *= 2
  saw.push([n, n / m])
}

export const resizing: Scene = {
  id: 'resizing',
  title: 'Load factor and resizing',
  flow: 'TB',
  nodes: [
    {
      id: 'load',
      kind: 'plot',
      label: 'Load factor n / m as keys arrive',
      sub: 'double m whenever it would pass 0.5',
      plot: {
        x: { min: 0, max: 70, step: 10, label: 'keys inserted' },
        y: { min: 0, max: 0.6, step: 0.1, label: 'n / m' },
        axes: 'corner',
        series: [
          { kind: 'line', points: saw, label: 'drops by half at each resize', labelAt: [40, 0.56] },
          { kind: 'line', points: [[0, 0.5], [70, 0.5]], color: 'warn', dashed: true, label: 'threshold', labelAt: [6, 0.53] },
        ],
      },
    },
    { id: 'code', kind: 'code', filename: 'probing_set.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'resizing.py output', label: out.trimEnd() },
  ],
  edges: [
    { source: 'load', target: 'code' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
