import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch03/linked_list.py?raw'
import out from '../../../examples/ch03/linked_list.out?raw'

// §3.3 — insertion after a located node: find() walks the links to P-221 (Θ(n)), then two pointer
// writes splice P-317 in (Θ(1)). The chain is the list after the insert; the numbers on the edges are
// the order of the writes.
export const singlyLinked: Scene = {
  id: 'singly-linked',
  title: 'Locating versus changing',
  flow: 'TB',
  nodes: [
    {
      id: 'chain',
      label: 'After inserting P-317 behind the located P-221',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'n-104', label: 'P-104', sub: 'head', pattern: 'user', icon: 'box' },
        { id: 'n-221', label: 'P-221', sub: 'located: Θ(n)', pattern: 'service', icon: 'search' },
        { id: 'n-317', label: 'P-317', sub: 'new node', pattern: 'external', icon: 'box' },
        { id: 'n-458', label: 'P-458', sub: 'next is None', pattern: 'storage', icon: 'box' },
      ],
      edges: [
        { source: 'n-104', target: 'n-221' },
        { source: 'n-221', target: 'n-317', label: 'write 2' },
        { source: 'n-317', target: 'n-458', label: 'write 1' },
      ],
    },
    { id: 'code', kind: 'code', filename: 'linked_list.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
  ],
  edges: [
    { source: 'chain', target: 'code' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
