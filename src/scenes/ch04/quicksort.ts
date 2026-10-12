import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch04/quicksort.py?raw'
import out from '../../../examples/ch04/quicksort_demo.out?raw'

// §4.5 — the Lomuto partition invariant as regions of the subarray, then quicksort with a fixed and a
// random pivot on already-sorted input.
export const quicksort: Scene = {
  id: 'quicksort',
  title: 'Partition and pivot choice',
  flow: 'TB',
  nodes: [
    {
      id: 'regions',
      kind: 'memory',
      label: 'during partition, pivot = xs[hi]',
      slots: [
        { at: 'lo', name: '≤ pivot', group: 'xs[lo:i]' },
        { at: 'i', name: '> pivot', group: 'xs[i:j]' },
        { at: 'j', name: 'not yet seen', group: 'xs[j:hi]' },
        { at: 'hi', name: 'pivot', note: 'swapped to i at the end' },
      ],
    },
    { id: 'code', kind: 'code', filename: 'quicksort.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'quicksort_demo.py output', label: out.trimEnd(), pattern: 'warn' },
  ],
  edges: [
    { source: 'regions', target: 'code' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
