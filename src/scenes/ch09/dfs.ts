import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch09/dfs.py?raw'
import out from '../../../examples/ch09/dfs.out?raw'

// §9.4 — DFS over the task-dependency graph with the discovery/finish interval of each task as its
// sub. Nested intervals = descendants; the order of finishing is the order chapter 9.6 reverses.
export const dfs: Scene = {
  id: 'dfs',
  title: 'Depth-first search',
  flow: 'TB',
  nodes: [
    {
      id: 'tasks',
      label: 'Task dependencies, [discovered, finished]',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'weigh', label: 'weigh', sub: '[1, 8]', pattern: 'service', icon: 'scale' },
        { id: 'label', label: 'label', sub: '[2, 7]', pattern: 'network', icon: 'tag' },
        { id: 'scan', label: 'scan', sub: '[9, 12]', pattern: 'service', icon: 'search' },
        { id: 'sort', label: 'sort', sub: '[10, 11]', pattern: 'network', icon: 'sortarrows' },
        { id: 'load', label: 'load', sub: '[3, 6]', pattern: 'storage', icon: 'package' },
        { id: 'inspect', label: 'inspect', sub: '[13, 14]', pattern: 'service', icon: 'shieldcheck' },
        { id: 'dispatch', label: 'dispatch', sub: '[4, 5]', pattern: 'external', icon: 'dooropen' },
      ],
      edges: [
        { source: 'weigh', target: 'label' },
        { source: 'label', target: 'load' },
        { source: 'scan', target: 'sort' },
        { source: 'sort', target: 'load', dashed: true, label: 'cross' },
        { source: 'load', target: 'dispatch' },
        { source: 'inspect', target: 'dispatch', dashed: true, label: 'cross' },
      ],
    },
    { id: 'code', kind: 'code', filename: 'dfs.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
  ],
  edges: [
    { source: 'tasks', target: 'code' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
