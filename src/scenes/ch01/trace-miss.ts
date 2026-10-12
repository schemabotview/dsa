import type { Scene } from '@graphlearning/flow'

// §1.4 — the two traces that end without a match. Hand-traced tables: the miss runs the body four
// times, the empty list runs it zero times, and both reach the same final `return None`.
export const traceMiss: Scene = {
  id: 'trace-miss',
  title: 'Tracing a miss and an empty list',
  flow: 'LR',
  nodes: [
    {
      id: 'miss',
      kind: 'table',
      label: 'target P-999',
      sub: 'four parcels',
      headers: ['step', 'i', 'pid', 'match'],
      values: [
        ['1', '0', 'P-104', 'False'],
        ['2', '1', 'P-221', 'False'],
        ['3', '2', 'P-317', 'False'],
        ['4', '3', 'P-458', 'False'],
        ['end', '—', 'loop done', 'None'],
      ],
    },
    {
      id: 'empty',
      kind: 'table',
      label: 'empty list',
      sub: 'range(0) has no values',
      headers: ['step', 'i', 'pid', 'match'],
      values: [['end', '—', 'body never ran', 'None']],
    },
  ],
  edges: [],
}
