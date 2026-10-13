import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/dynamic-programming/memo_vs_table.py?raw'
import out from '../../../examples/dynamic-programming/memo_vs_table.out?raw'

// §12.3 — the recurrence evaluated top-down with a cache and bottom-up in a table; the table is filled
// in an order where every OPT(p(i)) is already known.
export const memoTable: Scene = {
  id: 'memo-table',
  title: 'Memoisation and tabulation',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'memo_vs_table.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
    {
      id: 'compare',
      kind: 'table',
      label: 'Two ways to evaluate the same recurrence',
      headers: ['', 'memoisation', 'tabulation'],
      values: [
        ['order', 'recursion finds it', 'you choose it'],
        ['solves', 'only needed states', 'every state'],
        ['stack depth', 'up to n frames', 'none'],
        ['space saving', 'hard', 'easy: keep needed rows'],
      ],
    },
  ],
  edges: [
    { source: 'code', target: 'out', label: 'run' },
    { source: 'out', target: 'compare' },
  ],
}
