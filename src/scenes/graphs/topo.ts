import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/graphs/topo.py?raw'
import out from '../../../examples/graphs/topo.out?raw'

// §9.6 — Kahn's algorithm: the in-degree of each task (prerequisites still pending), the order it
// produces, and the failure report when a dispatch → scan edge closes a cycle.
export const topo: Scene = {
  id: 'topo',
  title: 'Topological order',
  flow: 'TB',
  nodes: [
    {
      id: 'indeg',
      kind: 'table',
      label: 'Pending prerequisites at the start',
      headers: ['task', 'in-degree', 'ready?'],
      values: [
        ['weigh, scan, inspect', '0', 'yes: start here'],
        ['label, sort', '1', 'after one task'],
        ['load, dispatch', '2', 'after two tasks'],
      ],
    },
    { id: 'code', kind: 'code', filename: 'topo.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
  ],
  edges: [
    { source: 'indeg', target: 'code' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
