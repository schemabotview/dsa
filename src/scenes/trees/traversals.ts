import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/trees/traversals.py?raw'
import out from '../../../examples/trees/traversals.out?raw'

// §6.2 — in-order traversal two ways: recursion with an explicit base case, and a loop that keeps the
// same pending nodes on its own stack. The memory card is that stack just before 50 is visited.
export const traversals: Scene = {
  id: 'traversals',
  title: 'Recursive and iterative traversal',
  flow: 'TB',
  nodes: [
    {
      id: 'stack',
      kind: 'memory',
      label: 'the explicit stack, about to visit 50',
      slots: [
        { at: 'top', name: '50', note: 'popped next' },
        { at: '', name: '104', note: 'then its right: 221' },
        { at: 'bottom', name: '317', note: 'then 458 and its subtree' },
      ],
    },
    { id: 'code', kind: 'code', filename: 'traversals.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
  ],
  edges: [
    { source: 'stack', target: 'code' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
