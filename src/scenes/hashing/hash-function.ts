import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/hashing/hashing.py?raw'
import out from '../../../examples/hashing/hashing.out?raw'

// §5.2 — from key to bucket: a deterministic polynomial hash reduced modulo m (Python's own str hash is
// randomised per process, so it cannot produce a checkable output), beside direct addressing.
export const hashFunction: Scene = {
  id: 'hash-function',
  title: 'From key to bucket',
  flow: 'TB',
  nodes: [
    {
      id: 'pipeline',
      label: 'Lookup in two steps',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'key', label: 'Key', sub: '"P-317"', pattern: 'user', icon: 'tag' },
        { id: 'hash', label: 'Hash', sub: 'a big integer', pattern: 'service', icon: 'hash' },
        { id: 'bucket', label: 'Bucket', sub: 'hash % m', pattern: 'storage', icon: 'database' },
      ],
      edges: [
        { source: 'key', target: 'hash', label: 'h' },
        { source: 'hash', target: 'bucket', label: 'mod m' },
      ],
    },
    { id: 'code', kind: 'code', filename: 'hashing.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
  ],
  edges: [
    { source: 'pipeline', target: 'code' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
