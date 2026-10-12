import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch04/counting_radix.py?raw'
import out from '../../../examples/ch04/counting_radix.out?raw'

// §4.6 — counting sort as a stable building block, and radix sort as three stable passes over the
// digits of the parcel numbers, least significant first.
export const countingRadix: Scene = {
  id: 'counting-radix',
  title: 'Sorting by key range',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'counting_radix.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
  ],
  edges: [{ source: 'code', target: 'out', label: 'run' }],
}
