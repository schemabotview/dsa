import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/analysis/count_ops.py?raw'
import out from '../../../examples/analysis/count_ops.out?raw'

// §2.2 — count before naming: instrumented lookup (one loop) beside the all-pairs check (a loop in a
// loop), and the counts they produce as n doubles.
export const counting: Scene = {
  id: 'counting',
  title: 'Counting steps',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'count_ops.py', label: code.trimEnd() },
    {
      id: 'result',
      label: 'n doubles',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), hug: true },
        {
          id: 'rules',
          kind: 'table',
          label: 'Counting rules',
          headers: ['shape', 'steps'],
          values: [
            ['one loop over n', 'n'],
            ['two loops in a row', 'n + n'],
            ['loop in a loop', 'n · n'],
            ['j from i+1 to n−1', 'n(n−1)/2'],
          ],
        },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'result', label: 'run' }],
}
