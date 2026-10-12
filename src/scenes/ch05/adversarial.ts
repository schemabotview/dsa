import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch05/adversarial.py?raw'
import out from '../../../examples/ch05/adversarial.out?raw'

// §5.6 — expected O(1) assumes keys spread out. A weak hash (sum of characters) lets an adversary send
// anagrams that all share one bucket: average probes rise from about 2.4 to 24.
export const adversarial: Scene = {
  id: 'adversarial',
  title: 'When the hash is attacked',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'adversarial.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), pattern: 'warn' },
    {
      id: 'defences',
      label: 'Defences',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'mix', label: 'Mix all bits', sub: 'order matters: no anagram ties', pattern: 'service', icon: 'hash' },
        { id: 'seed', label: 'Random seed', sub: 'str hash differs per process', pattern: 'network', icon: 'key' },
        { id: 'tree', label: 'Bound the bucket', sub: 'tree buckets, or a cap', pattern: 'storage', icon: 'tree' },
      ],
    },
  ],
  edges: [
    { source: 'code', target: 'out', label: 'run' },
    { source: 'out', target: 'defences' },
  ],
}
