import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch06/avl_insert.py?raw'
import out from '../../../examples/ch06/avl_insert.out?raw'

// §6.6 — one left rotation repairing a right-right imbalance (in-order 50, 104, 221 is unchanged), then
// the insert that detects imbalance from stored heights and the result of inserting sorted keys.
export const avl: Scene = {
  id: 'avl',
  title: 'Rotations keep the tree balanced',
  flow: 'TB',
  nodes: [
    {
      id: 'rotation',
      label: 'Insert 50, 104, 221: balance −2 at 50, so rotate left',
      pattern: 'group',
      flow: 'LR',
      children: [
        {
          id: 'before',
          label: 'Before: height 2',
          pattern: 'group',
          flow: 'TB',
          children: [
            { id: 'b50', label: '50', sub: 'balance −2', pattern: 'warn', icon: 'box' },
            { id: 'b104', label: '104', pattern: 'storage', icon: 'box' },
            { id: 'b221', label: '221', pattern: 'storage', icon: 'box' },
          ],
          edges: [
            { source: 'b50', target: 'b104', label: 'right' },
            { source: 'b104', target: 'b221', label: 'right' },
          ],
        },
        {
          id: 'after',
          label: 'After: height 1',
          pattern: 'group',
          flow: 'TB',
          children: [
            { id: 'a104', label: '104', sub: 'new root', pattern: 'external', icon: 'tree' },
            { id: 'a50', label: '50', pattern: 'storage', icon: 'box' },
            { id: 'a221', label: '221', pattern: 'storage', icon: 'box' },
          ],
          edges: [
            { source: 'a104', target: 'a50', label: 'left' },
            { source: 'a104', target: 'a221', label: 'right' },
          ],
        },
      ],
      edges: [{ source: 'before', target: 'after', label: 'rotate_left(50)' }],
    },
    { id: 'code', kind: 'code', filename: 'avl_insert.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), pattern: 'external' },
  ],
  edges: [
    { source: 'rotation', target: 'code' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
