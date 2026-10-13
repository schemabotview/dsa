import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/hashing/chain.py?raw'
import out from '../../../examples/hashing/chaining.out?raw'

// §5.3 — separate chaining with m = 4: the buckets after six inserts (three keys share bucket 0), the
// class, and the demo's output.
export const chaining: Scene = {
  id: 'chaining',
  title: 'Separate chaining',
  flow: 'TB',
  nodes: [
    {
      id: 'buckets',
      kind: 'memory',
      label: 'buckets, m = 4',
      slots: [
        { at: '0', name: 'P-104 → P-221 → P-317', note: 'three collide' },
        { at: '1', name: 'P-512 → P-600' },
        { at: '2', name: 'P-458' },
        { at: '3', name: '(empty)' },
      ],
    },
    { id: 'code', kind: 'code', filename: 'chain.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'chaining.py output', label: out.trimEnd() },
  ],
  edges: [
    { source: 'buckets', target: 'code' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
