import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch04/quickselect.py?raw'
import out from '../../../examples/ch04/quickselect.out?raw'

// §4.7 — quickselect for the median of 10,001 weights: same answer as sorting, about 3.5 n elements
// scanned in this seeded run.
export const quickselect: Scene = {
  id: 'quickselect',
  title: 'Order statistics without sorting',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'quickselect.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), hug: true },
  ],
  edges: [{ source: 'code', target: 'out', label: 'run' }],
}
