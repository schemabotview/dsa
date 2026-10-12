import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch06/bst_delete.py?raw'
import out from '../../../examples/ch06/bst_delete.out?raw'

// §6.4 — the three deletion cases side by side, then the code that handles them and the in-order
// sequence after each (it stays sorted: the property survives).
export const bstDelete: Scene = {
  id: 'bst-delete',
  title: 'Deletion, case by case',
  flow: 'TB',
  nodes: [
    {
      id: 'cases',
      label: 'Three cases',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'leaf', label: 'Leaf', sub: 'delete 50: just remove it', pattern: 'storage', icon: 'trash' },
        { id: 'one', label: 'One child', sub: 'delete 400: child 420 moves up', pattern: 'network', icon: 'merge' },
        { id: 'two', label: 'Two children', sub: 'delete 317: copy successor 420', pattern: 'warn', icon: 'swap' },
      ],
    },
    { id: 'code', kind: 'code', filename: 'bst_delete.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
  ],
  edges: [
    { source: 'cases', target: 'code' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
