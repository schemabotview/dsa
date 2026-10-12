import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch04/binary_search.py?raw'
import out from '../../../examples/ch04/binary_search.out?raw'

// §4.2 — the interval invariant drawn on the sorted weights for target 800: everything left of lo is
// < target, everything from hi on is >= target, and the loop shrinks [lo, hi) until they meet.
export const binarySearch: Scene = {
  id: 'binary-search',
  title: 'Binary search and boundaries',
  flow: 'TB',
  nodes: [
    {
      id: 'interval',
      kind: 'memory',
      label: 'weights, searching for 2500',
      slots: [
        { at: '0', name: '800', group: '< 2500: left of lo' },
        { at: '1', name: '800', group: '< 2500: left of lo' },
        { at: '2', name: '800', group: '< 2500: left of lo' },
        { at: '3', name: '1200', group: '< 2500: left of lo' },
        { at: '4', name: '2500', note: 'lo = hi = 4: first ≥', group: '≥ 2500: from hi on' },
        { at: '5', name: '2500', group: '≥ 2500: from hi on' },
        { at: '6', name: '5000', note: 'bisect_right = 6', group: '≥ 2500: from hi on' },
      ],
    },
    { id: 'code', kind: 'code', filename: 'binary_search.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), hug: true },
  ],
  edges: [
    { source: 'interval', target: 'code' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
