import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/sequences/ring.py?raw'
import out from '../../../examples/sequences/ring_buffer.out?raw'

// §3.6 — a fixed array used as a circle: the state after the wrap (head at slot 2, the tail has come
// round to slot 0), then the code and its output, ending in the capacity error.
export const ringBuffer: Scene = {
  id: 'ring-buffer',
  title: 'A queue in a circular buffer',
  flow: 'TB',
  nodes: [
    {
      id: 'slots',
      kind: 'memory',
      label: 'capacity 4, after P-512 wraps round',
      slots: [
        { at: '0', name: 'P-512', note: 'newest', group: 'wrapped' },
        { at: '1', name: 'None', note: 'next tail' },
        { at: '2', name: 'P-317', note: '<- head', group: 'in order' },
        { at: '3', name: 'P-458', group: 'in order' },
      ],
    },
    { id: 'code', kind: 'code', filename: 'ring.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'ring_buffer.py output', label: out.trimEnd() },
  ],
  edges: [
    { source: 'slots', target: 'code' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
