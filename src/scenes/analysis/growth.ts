import type { Scene } from '@graphlearning/flow'
import out from '../../../examples/analysis/growth.out?raw'

// §2.5 — the common growth rates drawn on one pair of axes, then the exact values the script printed
// (including the two closed-form sums).
const curve = (g: (n: number) => number, max: number): [number, number][] => {
  const pts: [number, number][] = []
  for (let n = 1; n <= 16; n += 0.25) if (g(n) <= max) pts.push([n, g(n)])
  return pts
}

export const growth: Scene = {
  id: 'growth',
  title: 'Common growth rates',
  flow: 'TB',
  nodes: [
    {
      id: 'curves',
      kind: 'plot',
      label: 'Steps as n grows',
      plot: {
        x: { min: 1, max: 16, step: 1, label: 'n' },
        y: { min: 0, max: 100, step: 20, label: 'steps' },
        axes: 'corner',
        series: [
          { kind: 'line', points: curve((n) => 2 ** n, 100), label: '2ⁿ', color: 'warn', labelAt: [7.2, 96] },
          { kind: 'line', points: curve((n) => n * n, 100), label: 'n²', labelAt: [10.6, 94] },
          { kind: 'line', points: curve((n) => n * Math.log2(n), 100), label: 'n log n', labelAt: [15, 70] },
          { kind: 'line', points: curve((n) => n, 100), label: 'n', labelAt: [15.4, 22] },
          { kind: 'line', points: curve((n) => Math.log2(n), 100), label: 'log n', labelAt: [15, 9] },
        ],
      },
    },
    { id: 'out', kind: 'code', filename: 'growth.py output', label: out.trimEnd() },
  ],
  edges: [{ source: 'curves', target: 'out', label: 'exact values' }],
}
