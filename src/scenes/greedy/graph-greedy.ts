import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/greedy/cut_check.py?raw'
import out from '../../../examples/greedy/cut_check.out?raw'

// §11.6 — Kruskal's choices checked against the cut property edge by edge, then the course's greedy
// algorithms side by side with the argument that justifies each.
export const graphGreedy: Scene = {
  id: 'graph-greedy',
  title: 'Greedy graph algorithms',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'cut_check.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), pattern: 'external' },
    {
      id: 'proofs',
      kind: 'table',
      label: 'Greedy algorithms and what justifies them',
      headers: ['algorithm', 'greedy rule', 'proof'],
      values: [
        ['Kruskal, Prim', 'lightest safe edge', 'cut property'],
        ['Dijkstra', 'closest unfinished vertex', 'nonnegative weights'],
        ['interval scheduling', 'earliest finish', 'exchange'],
        ['Huffman', 'merge two rarest', 'exchange'],
        ['most parcels', 'lightest first', 'exchange'],
      ],
    },
  ],
  edges: [
    { source: 'code', target: 'out', label: 'run' },
    { source: 'out', target: 'proofs' },
  ],
}
