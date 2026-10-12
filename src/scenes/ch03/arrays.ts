import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch03/prefix_sums.py?raw'
import out from '../../../examples/ch03/prefix_sums.out?raw'

// §3.1 — the layout model (a contiguous block, address = base + i × width, so any index is one step)
// beside the payoff of indexed access: prefix sums answer any range total in O(1).
export const arrays: Scene = {
  id: 'arrays',
  title: 'Indexed access and prefix sums',
  flow: 'TB',
  nodes: [
    {
      id: 'layout',
      label: 'Layout model',
      pattern: 'group',
      flow: 'LR',
      children: [
        {
          id: 'block',
          kind: 'memory',
          label: 'hourly: one block, 8-byte slots',
          slots: [
            { at: 'base + 0', name: '1200', note: 'i = 0' },
            { at: 'base + 8', name: '800', note: 'i = 1' },
            { at: 'base + 16', name: '2500', note: 'i = 2' },
            { at: 'base + 8i', name: '…', note: 'one step' },
          ],
        },
        { id: 'pylist', label: 'Python list', sub: 'a block of references to objects', pattern: 'service', icon: 'link' },
      ],
    },
    { id: 'code', kind: 'code', filename: 'prefix_sums.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
  ],
  edges: [
    { source: 'layout', target: 'code', label: 'O(1) indexing enables' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
