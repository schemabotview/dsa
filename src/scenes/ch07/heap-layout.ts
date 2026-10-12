import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch07/heap_layout.py?raw'
import out from '../../../examples/ch07/heap_layout.out?raw'

// §7.2 — one heap, two views: the complete binary tree the invariant talks about, and the array it is
// actually stored in, linked by index arithmetic. Min-heap, not sorted.
export const heapLayout: Scene = {
  id: 'heap-layout',
  title: 'A tree stored in an array',
  flow: 'TB',
  nodes: [
    {
      id: 'views',
      label: 'heap = [1, 3, 2, 7, 4, 5, 9]',
      pattern: 'group',
      flow: 'LR',
      children: [
        {
          id: 'tree',
          label: 'As a tree: parent ≤ children',
          pattern: 'group',
          flow: 'TB',
          children: [
            { id: 'h0', label: '1', sub: 'index 0', pattern: 'service', icon: 'zap' },
            { id: 'h1', label: '3', sub: 'index 1', pattern: 'network', icon: 'box' },
            { id: 'h2', label: '2', sub: 'index 2', pattern: 'network', icon: 'box' },
            { id: 'h3', label: '7', sub: 'index 3', pattern: 'storage', icon: 'box' },
            { id: 'h4', label: '4', sub: 'index 4', pattern: 'storage', icon: 'box' },
            { id: 'h5', label: '5', sub: 'index 5', pattern: 'storage', icon: 'box' },
            { id: 'h6', label: '9', sub: 'index 6', pattern: 'storage', icon: 'box' },
          ],
          edges: [
            { source: 'h0', target: 'h1' },
            { source: 'h0', target: 'h2' },
            { source: 'h1', target: 'h3' },
            { source: 'h1', target: 'h4' },
            { source: 'h2', target: 'h5' },
            { source: 'h2', target: 'h6' },
          ],
        },
        {
          id: 'array',
          kind: 'memory',
          label: 'As an array',
          slots: [
            { at: '0', name: '1', note: 'root' },
            { at: '1', name: '3', group: 'children of 0' },
            { at: '2', name: '2', group: 'children of 0' },
            { at: '3', name: '7', group: 'children of 1' },
            { at: '4', name: '4', group: 'children of 1' },
            { at: '5', name: '5', group: 'children of 2' },
            { at: '6', name: '9', group: 'children of 2' },
          ],
        },
      ],
    },
    { id: 'code', kind: 'code', filename: 'heap_layout.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
  ],
  edges: [
    { source: 'views', target: 'code' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
