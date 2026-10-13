import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/shortest-paths/dsu.py?raw'
import out from '../../../examples/shortest-paths/dsu_demo.out?raw'

// §10.7 — disjoint-set union: each set is a tree of parent pointers; find follows them to the root and
// compresses the path, union hangs the smaller tree under the larger root.
export const unionFind: Scene = {
  id: 'union-find',
  title: 'Disjoint-set union',
  flow: 'TB',
  nodes: [
    {
      id: 'row',
      label: 'After four unions: two sets',
      pattern: 'group',
      flow: 'LR',
      children: [
        {
          id: 'forest',
          kind: 'memory',
          label: 'parent pointers after the unions',
          slots: [
            { at: 'North', name: 'North', note: 'root, size 4', group: 'set 1' },
            { at: 'East', name: 'North', group: 'set 1' },
            { at: 'Hub', name: 'North', note: 'moved under North', group: 'set 1' },
            { at: 'West', name: 'North', note: 'was Hub: compressed', group: 'set 1' },
            { at: 'South', name: 'South', note: 'root, size 1', group: 'set 2' },
          ],
        },
        { id: 'code', kind: 'code', filename: 'dsu.py', label: code.trimEnd() },
      ],
    },
    { id: 'out', kind: 'code', filename: 'dsu_demo.py output', label: out.trimEnd() },
  ],
  edges: [{ source: 'row', target: 'out', label: 'run dsu_demo.py' }],
}
