import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/shortest-paths/dag_paths.py?raw'
import out from '../../../examples/shortest-paths/dag_paths.out?raw'

// §10.2 — in a DAG, relaxing each vertex's edges once, in topological order, settles every distance.
// The cheap route to A goes through B (3 + 1), not the direct leg (5).
export const dagPaths: Scene = {
  id: 'dag-paths',
  title: 'Shortest paths in a DAG',
  flow: 'TB',
  nodes: [
    {
      id: 'row',
      label: 'One-way legs, processed in topological order',
      pattern: 'group',
      flow: 'LR',
      children: [
        {
          id: 'legs',
          kind: 'table',
          label: 'In topological order',
          sub: 'one pass, each leg relaxed once',
          headers: ['vertex', 'legs out', 'dist', 'pred'],
          values: [
            ['Depot', 'A 5 · B 3', '0', '—'],
            ['B', 'A 1 · C 9', '3', 'Depot'],
            ['A', 'C 6', '4', 'B'],
            ['C', 'Drop 2', '10', 'A'],
            ['Drop', '—', '12', 'C'],
          ],
        },
        { id: 'code', kind: 'code', filename: 'dag_paths.py', label: code.trimEnd() },
      ],
    },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
  ],
  edges: [{ source: 'row', target: 'out', label: 'run' }],
}
