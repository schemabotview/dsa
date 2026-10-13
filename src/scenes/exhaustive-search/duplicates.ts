import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/exhaustive-search/duplicates.py?raw'
import out from '../../../examples/exhaustive-search/duplicates.out?raw'

// §8.5 — two identical North stops make naive permutation repeat every route twice. Sorting and
// skipping a choice equal to its left sibling enumerates each distinct route once.
export const duplicates: Scene = {
  id: 'duplicates',
  title: 'Canonical enumeration',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'duplicates.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
    {
      id: 'rule',
      label: 'The skip rule',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'sort', label: 'Sort first', sub: 'equal items sit together', pattern: 'storage', icon: 'sortarrows' },
        { id: 'skip', label: 'Skip repeats', sub: 'same value at one level', pattern: 'warn', icon: 'ban' },
        { id: 'once', label: 'Each once', sub: '3!/2! = 3 routes', pattern: 'external', icon: 'circlecheck' },
      ],
    },
  ],
  edges: [
    { source: 'code', target: 'out', label: 'run' },
    { source: 'out', target: 'rule' },
  ],
}
