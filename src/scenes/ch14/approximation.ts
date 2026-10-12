import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch14/approx.py?raw'
import out from '../../../examples/ch14/approx.out?raw'

// §14.4 — a delivery tour from a heuristic against the exact optimum on a small instance: 1.29 times
// longer here. An observed ratio is evidence about this instance, not a guarantee.
const stops: Record<string, [number, number]> = {
  Hub: [0, 0], N: [2, 2], E: [4, 4], S: [7, 3], W: [-4, 3], P: [-1, 8], A: [3, 6],
}
const path = (names: string[]): [number, number][] => [...names, names[0]].map((n) => stops[n])

export const approximation: Scene = {
  id: 'approximation',
  title: 'Approximation and heuristics',
  flow: 'TB',
  nodes: [
    {
      id: 'tours',
      kind: 'plot',
      label: 'Two tours of the same depots',
      sub: 'nearest neighbour 36.8 km · exact 28.6 km',
      plot: {
        x: { min: -6, max: 9, step: 3, label: 'km east' },
        y: { min: -1, max: 9, step: 2, label: 'km north' },
        axes: 'corner',
        equal: true,
        series: [
          { kind: 'line', points: path(['Hub', 'N', 'E', 'A', 'P', 'W', 'S']), color: 'warn', label: 'nearest neighbour', labelAt: [5.5, 1.2] },
          { kind: 'line', points: path(['Hub', 'N', 'S', 'E', 'A', 'P', 'W']), color: '#34d399', label: 'exact', labelAt: [-4.6, 5.4] },
          { kind: 'scatter', points: Object.values(stops) },
        ],
      },
    },
    {
      id: 'run',
      label: 'Heuristic against the exact optimum',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'code', kind: 'code', filename: 'approx.py', label: code.trimEnd(), hug: true },
        { id: 'out', kind: 'code', filename: 'output', label: out.trimEnd(), hug: true, pattern: 'warn' },
      ],
    },
  ],
  edges: [{ source: 'tours', target: 'run' }],
}
