import type { Scene } from '@graphlearning/flow'

// §2.3 — a cost function squeezed between two multiples of n from n₀ = 5 on: that picture IS Θ(n).
// The table separates the notation (a bound on a function) from the case (which function).
const f = (n: number) => 3 * n + 5
const pts = (g: (n: number) => number): [number, number][] => Array.from({ length: 13 }, (_, n) => [n, g(n)])

export const bounds: Scene = {
  id: 'bounds',
  title: 'O, Omega and Theta',
  flow: 'TB',
  nodes: [
    {
      id: 'squeeze',
      kind: 'plot',
      label: 'f(n) = 3n + 5 is Θ(n)',
      sub: '3n ≤ f(n) ≤ 4n for every n ≥ 5',
      plot: {
        x: { min: 0, max: 12, step: 1, label: 'n' },
        y: { min: 0, max: 50, step: 10, label: 'steps' },
        axes: 'corner',
        series: [
          { kind: 'line', points: pts((n) => 4 * n), label: '4n', color: 'warn', dashed: true, labelAt: [10.2, 46] },
          { kind: 'line', points: pts(f), label: 'f(n)', labelAt: [11.5, 36] },
          { kind: 'line', points: pts((n) => 3 * n), label: '3n', color: 'external', dashed: true, labelAt: [11.6, 30] },
          { kind: 'marker', at: [5, 20], label: 'n₀ = 5', labelAt: [5, 25] },
        ],
      },
    },
    {
      id: 'notation',
      kind: 'table',
      label: 'A bound is not a case',
      headers: ['claim', 'means, for large n'],
      values: [
        ['f is O(g)', 'f ≤ c·g: an upper bound'],
        ['f is Ω(g)', 'f ≥ c·g: a lower bound'],
        ['f is Θ(g)', 'both: the growth rate'],
        ['worst-case lookup', 'Θ(n): which f is chosen'],
        ['best-case lookup', 'Θ(1): a different f'],
      ],
    },
  ],
  edges: [{ source: 'squeeze', target: 'notation' }],
}
