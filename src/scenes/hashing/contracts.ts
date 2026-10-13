import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/hashing/contracts.py?raw'
import out from '../../../examples/hashing/contracts.out?raw'

// §5.1 — the map contract and the three ways it surprises: unhashable keys, keys that are equal
// across types, and a key mutated while it is stored.
export const contracts: Scene = {
  id: 'contracts',
  title: 'Keys, equality and hashability',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'contracts.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), pattern: 'warn' },
  ],
  edges: [{ source: 'code', target: 'out', label: 'run' }],
}
