import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/sequences/dlist.py?raw'
import out from '../../../examples/sequences/doubly_linked.out?raw'

// §3.4 — the circular list with one sentinel: every real node has a prev and a next, so insertion
// and removal never special-case the ends. Drawn as a ring, then the code that asserts the invariant.
export const doublyLinked: Scene = {
  id: 'doubly-linked',
  title: 'Sentinels and structural invariants',
  flow: 'TB',
  nodes: [
    {
      id: 'ring',
      label: 'Invariant: node.next.prev is node, for every node',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'sentinel', label: 'sentinel', sub: 'no data; marks both ends', pattern: 'warn', icon: 'ban' },
        { id: 'd-317', label: 'P-317', pattern: 'storage', icon: 'box' },
        { id: 'd-221', label: 'P-221', sub: 'next is the sentinel', pattern: 'storage', icon: 'box' },
      ],
      edges: [
        { source: 'sentinel', target: 'd-317', bidirectional: true, label: 'next / prev' },
        { source: 'd-317', target: 'd-221', bidirectional: true },
      ],
    },
    { id: 'code', kind: 'code', filename: 'dlist.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'doubly_linked.py output', label: out.trimEnd(), hug: true },
  ],
  edges: [
    { source: 'ring', target: 'code' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
