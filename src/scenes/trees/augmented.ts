import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/trees/augmented.py?raw'
import out from '../../../examples/trees/augmented.out?raw'

// §6.7 — each node also stores the size of its subtree; rank and range counts then follow one path.
export const augmented: Scene = {
  id: 'augmented',
  title: 'Subtree sizes, ranks, ranges',
  flow: 'TB',
  nodes: [
    {
      id: 'sized',
      label: 'The depot tree with subtree sizes',
      pattern: 'group',
      flow: 'TB',
      children: [
        { id: 's317', label: '317', sub: 'size 7', pattern: 'service', icon: 'sigma' },
        { id: 's104', label: '104', sub: 'size 3', pattern: 'network', icon: 'sigma' },
        { id: 's458', label: '458', sub: 'size 3', pattern: 'network', icon: 'sigma' },
        { id: 's50', label: '50', sub: 'size 1', pattern: 'storage', icon: 'sigma' },
        { id: 's221', label: '221', sub: 'size 1', pattern: 'storage', icon: 'sigma' },
        { id: 's400', label: '400', sub: 'size 1', pattern: 'storage', icon: 'sigma' },
        { id: 's600', label: '600', sub: 'size 1', pattern: 'storage', icon: 'sigma' },
      ],
      edges: [
        { source: 's317', target: 's104' },
        { source: 's317', target: 's458' },
        { source: 's104', target: 's50' },
        { source: 's104', target: 's221' },
        { source: 's458', target: 's400' },
        { source: 's458', target: 's600' },
      ],
    },
    { id: 'code', kind: 'code', filename: 'augmented.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), hug: true },
  ],
  edges: [
    { source: 'sized', target: 'code' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
