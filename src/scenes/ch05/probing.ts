import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch05/probing.py?raw'
import out from '../../../examples/ch05/probing.out?raw'

// §5.4 — linear probing, and why deletion needs a tombstone: P-317 hashes to slot 4, finds it taken by
// P-221, and lives in slot 5. Emptying slot 4 cuts the probe path; a tombstone keeps it.
export const probing: Scene = {
  id: 'probing',
  title: 'Open addressing and tombstones',
  flow: 'TB',
  nodes: [
    {
      id: 'slots',
      kind: 'memory',
      label: 'm = 8 after five inserts',
      slots: [
        { at: '0', name: 'P-104' },
        { at: '1', name: 'P-600' },
        { at: '2', name: 'P-458' },
        { at: '3', name: 'None' },
        { at: '4', name: 'P-221', note: 'delete this', group: 'probe path of P-317' },
        { at: '5', name: 'P-317', note: 'hash 4, stored at 5', group: 'probe path of P-317' },
        { at: '6', name: 'None' },
        { at: '7', name: 'None' },
      ],
    },
    { id: 'code', kind: 'code', filename: 'probing.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), pattern: 'warn' },
  ],
  edges: [
    { source: 'slots', target: 'code' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
