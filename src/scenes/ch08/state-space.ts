import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch08/state_space.py?raw'
import out from '../../../examples/ch08/state_space.out?raw'

// §8.2 — the state-space tree for two parcels and two vans: each level fixes one decision, each leaf
// is a complete plan. The script prints the eight leaves for three parcels.
export const stateSpace: Scene = {
  id: 'state-space',
  title: 'State-space trees',
  flow: 'TB',
  nodes: [
    {
      id: 'tree',
      label: 'Two parcels, vans A and B: 4 leaves',
      pattern: 'group',
      flow: 'TB',
      children: [
        { id: 'root', label: 'nothing decided', sub: 'depth 0', pattern: 'service', icon: 'workflow' },
        { id: 'a', label: '1A', sub: 'parcel 1 in A', pattern: 'network', icon: 'box' },
        { id: 'b', label: '1B', sub: 'parcel 1 in B', pattern: 'network', icon: 'box' },
        { id: 'aa', label: '1A 2A', sub: 'leaf: a plan', pattern: 'external', icon: 'circlecheck' },
        { id: 'ab', label: '1A 2B', sub: 'leaf: a plan', pattern: 'external', icon: 'circlecheck' },
        { id: 'ba', label: '1B 2A', sub: 'leaf: a plan', pattern: 'external', icon: 'circlecheck' },
        { id: 'bb', label: '1B 2B', sub: 'leaf: a plan', pattern: 'external', icon: 'circlecheck' },
      ],
      edges: [
        { source: 'root', target: 'a', label: 'A' },
        { source: 'root', target: 'b', label: 'B' },
        { source: 'a', target: 'aa', label: 'A' },
        { source: 'a', target: 'ab', label: 'B' },
        { source: 'b', target: 'ba', label: 'A' },
        { source: 'b', target: 'bb', label: 'B' },
      ],
    },
    {
      id: 'run',
      label: 'Three parcels: 2³ = 8 leaves',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'code', kind: 'code', filename: 'state_space.py', label: code.trimEnd(), hug: true },
        { id: 'out', kind: 'code', filename: 'output', label: out.trimEnd(), hug: true },
      ],
    },
  ],
  edges: [{ source: 'tree', target: 'run' }],
}
