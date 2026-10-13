import type { Scene } from '@graphlearning/flow'
import out from '../../../examples/trees/btree_cost.out?raw'

// §6.8 — a B-tree node holds many keys and many children, sized to one disk block, so a lookup reads
// one block per level. The cost model counts block reads, not comparisons.
export const btree: Scene = {
  id: 'btree',
  title: 'B-trees and block reads',
  flow: 'TB',
  nodes: [
    {
      id: 'tree',
      label: 'A B-tree: one node = one disk block',
      pattern: 'group',
      flow: 'TB',
      children: [
        { id: 'root', label: '317 · 600', sub: '3 children', pattern: 'service', icon: 'harddrive' },
        { id: 'kA', label: '50 · 104 · 221', sub: 'keys < 317', pattern: 'storage', icon: 'harddrive' },
        { id: 'kB', label: '400 · 458', sub: '317 to 600', pattern: 'storage', icon: 'harddrive' },
        { id: 'kC', label: '712 · 840', sub: 'keys > 600', pattern: 'storage', icon: 'harddrive' },
      ],
      edges: [
        { source: 'root', target: 'kA' },
        { source: 'root', target: 'kB' },
        { source: 'root', target: 'kC' },
      ],
    },
    {
      id: 'model',
      kind: 'table',
      label: 'What the cost model counts',
      headers: ['in memory', 'on disk'],
      values: [
        ['a comparison: ns', 'a block read: ms'],
        ['binary nodes are fine', 'wide nodes: fewer reads'],
        ['height log₂ n', 'height log_b n'],
      ],
    },
    { id: 'out', kind: 'code', filename: 'btree_cost.py output', label: out.trimEnd(), hug: true },
  ],
  edges: [
    { source: 'tree', target: 'model' },
    { source: 'model', target: 'out', label: 'n = 10⁹ keys' },
  ],
}
