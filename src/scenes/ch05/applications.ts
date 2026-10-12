import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch05/frequency.py?raw'
import out from '../../../examples/ch05/frequency.out?raw'

// §5.7 — the everyday uses: a frequency table, order-preserving deduplication, and a sliding window
// whose "last seen" map makes each step O(1).
export const applications: Scene = {
  id: 'applications',
  title: 'Counting, deduplication, windows',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'frequency.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
  ],
  edges: [{ source: 'code', target: 'out', label: 'run' }],
}
