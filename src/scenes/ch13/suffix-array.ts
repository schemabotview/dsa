import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch13/suffix_array.py?raw'
import out from '../../../examples/ch13/suffix_array.out?raw'

// §13.6 — the suffix array of BANANA with its LCP column, and a pattern search: all occurrences of a
// pattern are one contiguous block of sorted suffixes.
export const suffixArray: Scene = {
  id: 'suffix-array',
  title: 'Suffix arrays and LCP',
  flow: 'TB',
  nodes: [
    {
      id: 'row',
      label: 'Sort every suffix once, then search many times',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'code', kind: 'code', filename: 'suffix_array.py', label: code.trimEnd(), hug: true },
        { id: 'out', kind: 'code', filename: 'output', label: out.trimEnd(), hug: true },
      ],
    },
    {
      id: 'block',
      kind: 'memory',
      label: 'occurrences of ANA: one block',
      slots: [
        { at: '5', name: 'A' },
        { at: '3', name: 'ANA', group: 'starts with ANA' },
        { at: '1', name: 'ANANA', group: 'starts with ANA' },
        { at: '0', name: 'BANANA' },
      ],
    },
  ],
  edges: [{ source: 'row', target: 'block', label: 'binary search' }],
}
