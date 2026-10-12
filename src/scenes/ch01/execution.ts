import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch01/trace_search.py?raw'
import out from '../../../examples/ch01/trace_search.out?raw'

// §1.4 — a hit traced by the program itself, and the two no-match paths traced by hand beneath it.
export const execution: Scene = {
  id: 'execution',
  title: 'Tracing state, step by step',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'trace_search.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
    {
      id: 'misses',
      label: 'The paths with no match',
      pattern: 'group',
      flow: 'LR',
      children: [
        {
          id: 'miss',
          kind: 'table',
          label: 'target P-999',
          headers: ['i', 'pid', 'match'],
          values: [
            ['0', 'P-104', 'False'],
            ['1', 'P-221', 'False'],
            ['2', 'P-317', 'False'],
            ['3', 'P-458', 'False'],
            ['end', 'loop done', 'None'],
          ],
        },
        {
          id: 'empty',
          kind: 'table',
          label: 'empty list',
          sub: 'range(0) has no values',
          headers: ['i', 'pid', 'match'],
          values: [['end', 'body never ran', 'None']],
        },
      ],
    },
  ],
  edges: [
    { source: 'code', target: 'out', label: 'run' },
    { source: 'out', target: 'misses' },
  ],
}
