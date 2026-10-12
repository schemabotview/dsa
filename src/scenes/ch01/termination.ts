import type { Scene } from '@graphlearning/flow'

// §1.5 — termination as a measure that falls by one per iteration and cannot go below zero. A plot
// is the honest picture: a line of points that hits a floor.
export const termination: Scene = {
  id: 'termination',
  title: 'A measure that must run out',
  flow: 'TB',
  nodes: [
    {
      id: 'variant',
      kind: 'plot',
      label: 'Remaining work, n − i',
      sub: 'n = 4 parcels, target absent',
      plot: {
        x: { min: 0, max: 4, step: 1, label: 'iterations completed' },
        y: { min: 0, max: 4, step: 1, label: 'n − i' },
        axes: 'corner',
        series: [
          { kind: 'line', points: [[0, 4], [1, 3], [2, 2], [3, 1], [4, 0]], label: 'falls by 1 each time', labelAt: [2.3, 2.35] },
          { kind: 'scatter', points: [[0, 4], [1, 3], [2, 2], [3, 1]] },
          { kind: 'marker', at: [4, 0], color: 'warn', label: 'loop stops at 0', labelAt: [2.85, 0.3] },
        ],
      },
    },
  ],
  edges: [],
}
