import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch09/traversal_cost.py?raw'
import out from '../../../examples/ch09/traversal_cost.out?raw'

// §9.8 — a sparse random graph traversed both ways: the list touches V + E cells, the matrix V + V².
export const traversalCost: Scene = {
  id: 'traversal-cost',
  title: 'Costs depend on representation',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'traversal_cost.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), pattern: 'warn' },
    {
      id: 'summary',
      kind: 'table',
      label: 'Choosing a representation',
      headers: ['', 'list', 'matrix'],
      values: [
        ['memory', 'Θ(V + E)', 'Θ(V²)'],
        ['is (u, v) an edge?', 'O(deg u)', 'Θ(1)'],
        ['neighbours of u', 'Θ(deg u)', 'Θ(V)'],
        ['BFS / DFS', 'Θ(V + E)', 'Θ(V²)'],
      ],
    },
  ],
  edges: [
    { source: 'code', target: 'out', label: 'run' },
    { source: 'out', target: 'summary' },
  ],
}
