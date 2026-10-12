import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch14/fenwick.py?raw'
import out from '../../../examples/ch14/ranges.out?raw'

// §14.7 — Chapter 3's prefix sums answer range totals in O(1) but go stale on an update; a Fenwick tree
// supports both operations in O(log n). The table compares the three range-query structures.
export const rangeQueries: Scene = {
  id: 'range-queries',
  title: 'Static and dynamic range queries',
  flow: 'TB',
  nodes: [
    {
      id: 'row',
      label: 'An update makes static prefix sums stale',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'code', kind: 'code', filename: 'fenwick.py', label: code.trimEnd(), hug: true },
        { id: 'out', kind: 'code', filename: 'ranges.py output', label: out.trimEnd(), hug: true, pattern: 'warn' },
      ],
    },
    {
      id: 'compare',
      kind: 'table',
      label: 'Range sums over n values',
      headers: ['structure', 'build', 'query', 'update', 'aggregates'],
      values: [
        ['prefix sums', 'O(n)', 'O(1)', 'O(n)', 'invertible: sum'],
        ['Fenwick tree', 'O(n log n)', 'O(log n)', 'O(log n)', 'invertible: sum'],
        ['segment tree', 'O(n)', 'O(log n)', 'O(log n)', 'any associative: min, max'],
      ],
    },
  ],
  edges: [{ source: 'row', target: 'compare' }],
}
