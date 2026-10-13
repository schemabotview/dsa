import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/sequences/aliasing_rows.py?raw'
import out from '../../../examples/sequences/aliasing_rows.out?raw'

// §3.8 — the chapter's representations side by side by operation cost, then the aliasing trap that
// list repetition sets: [[0] * 3] * 3 is three references to one row.
export const tradeoffs: Scene = {
  id: 'tradeoffs',
  title: 'Choosing a representation',
  flow: 'TB',
  nodes: [
    {
      id: 'costs',
      kind: 'table',
      label: 'Cost per operation',
      sub: 'amortised where marked *',
      headers: ['', 'index', 'front', 'back', 'after a node'],
      values: [
        ['Python list', 'O(1)', 'O(n)', 'O(1)*', 'O(n)'],
        ['linked list', 'O(n)', 'O(1)', 'O(n)', 'O(1)'],
        ['deque', 'O(n)', 'O(1)', 'O(1)', 'O(n)'],
        ['ring buffer', 'O(1)', 'O(1)', 'O(1)', 'O(n)'],
      ],
    },
    { id: 'code', kind: 'code', filename: 'aliasing_rows.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), pattern: 'warn' },
  ],
  edges: [
    { source: 'costs', target: 'code' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
