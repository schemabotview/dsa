import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/shortest-paths/floyd.py?raw'
import out from '../../../examples/shortest-paths/floyd.out?raw'

// §10.5 — Floyd–Warshall: allow each vertex in turn as an intermediate stop. Three nested loops over a
// distance matrix; the output is the full table of shortest times.
export const floyd: Scene = {
  id: 'floyd',
  title: 'All pairs: Floyd–Warshall',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'floyd.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), pattern: 'external' },
    {
      id: 'choice',
      kind: 'table',
      label: 'All pairs: which method?',
      headers: ['method', 'time', 'suits'],
      values: [
        ['Floyd–Warshall', 'Θ(V³)', 'dense, small V, negatives ok'],
        ['Dijkstra from each', 'V × O((V + E) log V)', 'sparse, nonnegative'],
      ],
    },
  ],
  edges: [
    { source: 'code', target: 'out', label: 'run' },
    { source: 'out', target: 'choice' },
  ],
}
