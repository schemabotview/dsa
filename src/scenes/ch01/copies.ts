import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch01/shallow_copy.py?raw'
import out from '../../../examples/ch01/shallow_copy.out?raw'

// §1.7 — shallow and deep copies: the script, what it printed, and the object graph that explains
// the output — which copies share the parcel and which do not.
export const copies: Scene = {
  id: 'copies',
  title: 'Shallow and deep copies',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'shallow_copy.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output', label: out.trimEnd(), hug: true },
    {
      id: 'graph',
      label: 'After today.copy() and copy.deepcopy(today)',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'n-today', label: 'today', sub: 'list, 1 item', pattern: 'user', icon: 'tag' },
        { id: 'n-shallow', label: 'shallow', sub: 'new list, 2 items', pattern: 'user', icon: 'copy' },
        { id: 'n-deep', label: 'deep', sub: 'new list, 1 item', pattern: 'user', icon: 'copy' },
        { id: 'p-shared', label: 'P-104', sub: 'shared, now South', pattern: 'warn', icon: 'box' },
        { id: 'p-copy', label: 'P-104 copy', sub: 'independent, North', pattern: 'external', icon: 'box' },
      ],
      edges: [
        { source: 'n-today', target: 'p-shared' },
        { source: 'n-shallow', target: 'p-shared', label: 'same object' },
        { source: 'n-deep', target: 'p-copy', label: 'new object' },
      ],
    },
  ],
  edges: [
    { source: 'code', target: 'out', label: 'run' },
    { source: 'out', target: 'graph' },
  ],
}
