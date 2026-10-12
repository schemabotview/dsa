import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch12/knapsack.py?raw'
import out from '../../../examples/ch12/knapsack_demo.out?raw'

// §12.6 — 0/1 knapsack with a state of (items considered, capacity left), and subset sum as the
// yes/no version; the demo reconstructs which parcels to take.
export const knapsack: Scene = {
  id: 'knapsack',
  title: 'Knapsack and subset sum',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'knapsack.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'knapsack_demo.py output', label: out.trimEnd(), pattern: 'external' },
  ],
  edges: [{ source: 'code', target: 'out', label: 'run knapsack_demo.py' }],
}
