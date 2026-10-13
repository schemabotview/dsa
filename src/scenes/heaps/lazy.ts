import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/heaps/lazy.py?raw'
import out from '../../../examples/heaps/lazy.out?raw'

// §7.7 — changing a priority without decrease-key: push a new entry, remember the live priority, skip
// stale entries on pop. Compared with an indexed heap that updates in place.
export const lazy: Scene = {
  id: 'lazy',
  title: 'Changing priorities',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'lazy.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
    {
      id: 'designs',
      kind: 'table',
      label: 'Two designs for decrease-key',
      headers: ['', 'update', 'memory', 'needs'],
      values: [
        ['indexed heap', 'O(log n) in place', 'n entries', 'item → index map'],
        ['lazy entries', 'O(log n) push', 'n + updates', 'a live-priority map'],
      ],
    },
  ],
  edges: [
    { source: 'code', target: 'out', label: 'run' },
    { source: 'out', target: 'designs' },
  ],
}
