import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/strings/trie.py?raw'
import out from '../../../examples/strings/trie_demo.out?raw'

// §13.2 — a trie over depot labels: shared prefixes share a path, so NORTH, NORTHEAST and NORTHHUB
// cost one path plus two short branches; prefix queries walk the prefix and collect below.
export const trie: Scene = {
  id: 'trie',
  title: 'Tries and prefix lookup',
  flow: 'TB',
  nodes: [
    {
      id: 'row',
      label: 'Shared prefixes share a path',
      pattern: 'group',
      flow: 'LR',
      children: [
        {
          id: 'tree',
          label: 'Part of the trie',
          pattern: 'group',
          flow: 'TB',
          children: [
            { id: 't-root', label: 'root', pattern: 'service', icon: 'tree' },
            { id: 't-n', label: 'N', sub: 'one shared node', pattern: 'network', icon: 'tag' },
            { id: 't-orth', label: 'O·R·T·H', sub: 'ends a word: NORTH', pattern: 'external', icon: 'tag' },
            { id: 't-aval', label: 'A·V·A·L', sub: 'NAVAL', pattern: 'storage', icon: 'tag' },
            { id: 't-east', label: 'E·A·S·T', sub: 'NORTHEAST', pattern: 'storage', icon: 'tag' },
            { id: 't-hub', label: 'H·U·B', sub: 'NORTHHUB', pattern: 'storage', icon: 'tag' },
          ],
          edges: [
            { source: 't-root', target: 't-n' },
            { source: 't-n', target: 't-orth' },
            { source: 't-n', target: 't-aval' },
            { source: 't-orth', target: 't-east' },
            { source: 't-orth', target: 't-hub' },
          ],
        },
        { id: 'code', kind: 'code', filename: 'trie.py', label: code.trimEnd() },
      ],
    },
    { id: 'out', kind: 'code', filename: 'trie_demo.py output', label: out.trimEnd() },
  ],
  edges: [{ source: 'row', target: 'out', label: 'run trie_demo.py' }],
}
