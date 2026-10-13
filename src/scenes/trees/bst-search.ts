import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/trees/bst.py?raw'
import out from '../../../examples/trees/search_demo.out?raw'

// §6.3 — the BST property makes every lookup a single root-to-leaf path. The module (insert, search
// with its path) and the paths it reported, including the failed search for 300 that marks where an
// insert of 300 goes.
export const bstSearch: Scene = {
  id: 'bst-search',
  title: 'Search and insertion',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'bst.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'search_demo.py output', label: out.trimEnd() },
    {
      id: 'property',
      label: 'The BST property, at every node',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'left', label: 'Left subtree', sub: 'every key smaller', pattern: 'network', icon: 'sortarrows' },
        { id: 'node', label: 'Node', sub: 'compare, go one way', pattern: 'service', icon: 'scale' },
        { id: 'right', label: 'Right subtree', sub: 'every key larger', pattern: 'network', icon: 'sortarrows' },
      ],
    },
  ],
  edges: [
    { source: 'code', target: 'out', label: 'run search_demo.py' },
    { source: 'out', target: 'property', label: 'one path, O(height)' },
  ],
}
