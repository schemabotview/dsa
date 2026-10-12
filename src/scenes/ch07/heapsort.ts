import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch07/heapsort.py?raw'
import out from '../../../examples/ch07/heapsort.out?raw'

// §7.5 — heapsort in place: build a max-heap, then repeatedly swap the maximum to the end. Sorted
// keys, but the three 800 g parcels come out in a new relative order: not stable.
export const heapsort: Scene = {
  id: 'heapsort',
  title: 'Heapsort',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'heapsort.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), pattern: 'warn' },
    {
      id: 'tradeoffs',
      kind: 'table',
      label: 'Heapsort against Chapter 4',
      headers: ['', 'worst time', 'extra space', 'stable'],
      values: [
        ['heapsort', 'Θ(n log n)', 'Θ(1)', 'no'],
        ['merge sort', 'Θ(n log n)', 'Θ(n)', 'yes'],
        ['quicksort', 'Θ(n²)', 'Θ(log n)', 'no'],
      ],
    },
  ],
  edges: [
    { source: 'code', target: 'out', label: 'run' },
    { source: 'out', target: 'tradeoffs' },
  ],
}
