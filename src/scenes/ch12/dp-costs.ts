import type { Scene } from '@graphlearning/flow'
import rowCode from '../../../examples/ch12/one_row.py?raw'
import rowOut from '../../../examples/ch12/one_row.out?raw'
import out from '../../../examples/ch12/pseudo_poly.out?raw'

// §12.8 — keeping one row of the knapsack table works only with the right loop direction; and the
// table grows with the capacity's value, i.e. exponentially in its number of bits.
export const dpCosts: Scene = {
  id: 'dp-costs',
  title: 'Space, state count, and limits',
  flow: 'TB',
  nodes: [
    {
      id: 'space',
      label: 'One row instead of a table: direction matters',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'code', kind: 'code', filename: 'one_row.py', label: rowCode.trimEnd(), hug: true },
        { id: 'row-out', kind: 'code', filename: 'output', label: rowOut.trimEnd(), hug: true, pattern: 'warn' },
      ],
    },
    { id: 'out', kind: 'code', filename: 'pseudo_poly.py output', label: out.trimEnd(), pattern: 'warn' },
  ],
  edges: [{ source: 'space', target: 'out', label: 'and the table size' }],
}
