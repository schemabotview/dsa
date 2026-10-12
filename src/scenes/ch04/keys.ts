import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch04/keys.py?raw'
import out from '../../../examples/ch04/keys.out?raw'

// §4.1 — a key decides the order, ties keep their input order (stability), and two stable passes
// equal one sort by a tuple key. The table reads the ties the output contains.
export const keys: Scene = {
  id: 'keys',
  title: 'Keys, ties and stability',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'keys.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
    {
      id: 'ties',
      kind: 'table',
      label: 'The three 800 g parcels stay in input order',
      headers: ['input position', 'pid', 'depot'],
      values: [
        ['1', 'P-221', 'East'],
        ['4', 'P-512', 'East'],
        ['5', 'P-600', 'North'],
      ],
    },
  ],
  edges: [
    { source: 'code', target: 'out', label: 'run' },
    { source: 'out', target: 'ties', label: 'line 1, first three' },
  ],
}
