import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch14/reduction.py?raw'
import out from '../../../examples/ch14/reduction.out?raw'

// §14.2 — a reduction transforms instances of A into instances of B with the same answer. Here
// subset sum reduces to partition, so partition is at least as hard as subset sum.
export const reduction: Scene = {
  id: 'reduction',
  title: 'Polynomial reductions',
  flow: 'TB',
  nodes: [
    {
      id: 'direction',
      label: 'A reduction from A to B',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'a', label: 'Instance of A', sub: 'subset sum: nums, t', pattern: 'storage', icon: 'boxes' },
        { id: 'f', label: 'Transform', sub: 'polynomial time', pattern: 'service', icon: 'workflow' },
        { id: 'b', label: 'Instance of B', sub: 'partition: nums + 2', pattern: 'storage', icon: 'boxes' },
        { id: 'ans', label: 'Same answer', sub: 'yes exactly when yes', pattern: 'external', icon: 'circlecheck' },
      ],
      edges: [
        { source: 'a', target: 'f' },
        { source: 'f', target: 'b' },
        { source: 'b', target: 'ans', label: 'solve B' },
      ],
    },
    { id: 'code', kind: 'code', filename: 'reduction.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), pattern: 'external' },
  ],
  edges: [
    { source: 'direction', target: 'code' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
