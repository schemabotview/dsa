import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch06/skew.py?raw'
import out from '../../../examples/ch06/skew.out?raw'

// §6.5 — same keys, different insertion order, different shape: sorted inserts build a chain whose
// height is n − 1, a shuffle builds a bushy tree near log₂ n.
export const skew: Scene = {
  id: 'skew',
  title: 'Height decides the cost',
  flow: 'TB',
  nodes: [
    {
      id: 'shapes',
      label: 'Keys 1, 2, 3, 4: two insertion orders, two shapes',
      pattern: 'group',
      flow: 'LR',
      children: [
        {
          id: 'sorted',
          label: 'Order 1, 2, 3, 4: height 3',
          pattern: 'group',
          flow: 'TB',
          children: [
            { id: 'c1', label: '1', sub: 'depth 0', pattern: 'warn', icon: 'box' },
            { id: 'c2', label: '2', sub: 'depth 1', pattern: 'warn', icon: 'box' },
            { id: 'c3', label: '3', sub: 'depth 2', pattern: 'warn', icon: 'box' },
            { id: 'c4', label: '4', sub: 'depth 3', pattern: 'warn', icon: 'box' },
          ],
          edges: [
            { source: 'c1', target: 'c2', label: 'right' },
            { source: 'c2', target: 'c3', label: 'right' },
            { source: 'c3', target: 'c4', label: 'right' },
          ],
        },
        {
          id: 'mixed',
          label: 'Order 3, 1, 4, 2: height 2',
          pattern: 'group',
          flow: 'TB',
          children: [
            { id: 'm3', label: '3', sub: 'depth 0', pattern: 'external', icon: 'box' },
            { id: 'm1', label: '1', sub: 'depth 1', pattern: 'external', icon: 'box' },
            { id: 'm4', label: '4', sub: 'depth 1', pattern: 'external', icon: 'box' },
            { id: 'm2', label: '2', sub: 'depth 2', pattern: 'external', icon: 'box' },
          ],
          edges: [
            { source: 'm3', target: 'm1', label: 'left' },
            { source: 'm3', target: 'm4', label: 'right' },
            { source: 'm1', target: 'm2', label: 'right' },
          ],
        },
      ],
    },
    { id: 'code', kind: 'code', filename: 'skew.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), pattern: 'warn' },
  ],
  edges: [
    { source: 'shapes', target: 'code', label: 'at n = 1000' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
