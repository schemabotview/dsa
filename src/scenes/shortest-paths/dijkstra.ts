import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/shortest-paths/dijkstra.py?raw'
import out from '../../../examples/shortest-paths/dijkstra.out?raw'
import neg from '../../../examples/shortest-paths/negative.out?raw'

// §10.3 — Dijkstra with a lazy heap on the depot roads, finalising depots in order of distance, and
// beside it the three-vertex negative-edge counterexample where finalising early is wrong.
export const dijkstra: Scene = {
  id: 'dijkstra',
  title: "Dijkstra's algorithm",
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'dijkstra.py', label: code.trimEnd() },
    {
      id: 'results',
      label: 'Nonnegative minutes: correct · one negative edge: not',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), hug: true },
        {
          id: 'counter',
          label: 'A→C: 2 direct, or 5 + (−4) = 1',
          pattern: 'group',
          flow: 'TB',
          children: [
            { id: 'n-a', label: 'A', sub: 'start', pattern: 'service', icon: 'box' },
            { id: 'n-b', label: 'B', sub: 'popped after C', pattern: 'storage', icon: 'box' },
            { id: 'n-c', label: 'C', sub: 'finalised at 2', pattern: 'warn', icon: 'box' },
          ],
          edges: [
            { source: 'n-a', target: 'n-b', label: '5' },
            { source: 'n-a', target: 'n-c', label: '2' },
            { source: 'n-b', target: 'n-c', label: '−4' },
          ],
        },
        { id: 'neg', kind: 'code', filename: 'negative.py output', label: neg.trimEnd(), hug: true, pattern: 'warn' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'results', label: 'run' }],
}
