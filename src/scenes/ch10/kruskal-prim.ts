import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch10/mst.py?raw'
import out from '../../../examples/ch10/mst_demo.out?raw'

// §10.8 — Kruskal (sorted edges + union-find) and Prim (grow one tree with a heap), agreeing on 36,
// and Kruskal producing a spanning forest when the input is disconnected.
export const kruskalPrim: Scene = {
  id: 'kruskal-prim',
  title: 'Kruskal and Prim',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'mst.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'mst_demo.py output', label: out.trimEnd() },
    {
      id: 'costs',
      kind: 'table',
      label: 'Costs with these implementations',
      headers: ['', 'main work', 'total'],
      values: [
        ['Kruskal', 'sort E edges, E finds', 'O(E log E)'],
        ['Prim (lazy heap)', 'E heap pushes and pops', 'O(E log E)'],
        ['union-find op', 'amortised', 'nearly O(1)'],
      ],
    },
  ],
  edges: [
    { source: 'code', target: 'out', label: 'run mst_demo.py' },
    { source: 'out', target: 'costs' },
  ],
}
