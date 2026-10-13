import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/heaps/pq_ties.py?raw'
import out from '../../../examples/heaps/pq_ties.out?raw'

// §7.1 — a priority queue compares entries, and on a tie Python compares the next tuple field: the
// parcels themselves. A sequence number breaks ties first and makes equal priorities first-in-first-out.
export const pqContract: Scene = {
  id: 'pq-contract',
  title: 'Priority queues and ties',
  flow: 'TB',
  nodes: [
    {
      id: 'ops',
      label: 'The contract',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'push', label: 'push', sub: 'add with a priority', pattern: 'network', icon: 'box' },
        { id: 'pop', label: 'pop', sub: 'remove the most urgent', pattern: 'service', icon: 'zap' },
        { id: 'peek', label: 'peek', sub: 'look without removing', pattern: 'storage', icon: 'search' },
      ],
    },
    { id: 'code', kind: 'code', filename: 'pq_ties.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), pattern: 'warn' },
  ],
  edges: [
    { source: 'ops', target: 'code' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
