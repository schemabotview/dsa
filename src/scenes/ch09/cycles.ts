import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch09/cycles.py?raw'
import out from '../../../examples/ch09/cycles.out?raw'

// §9.5 — the case that separates the two cycle tests: a diamond reaches d twice without any cycle, so
// a single visited flag reports a false cycle; tracking the active path does not.
export const cycles: Scene = {
  id: 'cycles',
  title: 'Reachability and cycles',
  flow: 'TB',
  nodes: [
    {
      id: 'diamond',
      label: 'Diamond: d is reached twice, no cycle',
      pattern: 'group',
      flow: 'TB',
      children: [
        { id: 'da', label: 'a', pattern: 'service', icon: 'workflow' },
        { id: 'db', label: 'b', sub: 'finished first', pattern: 'storage', icon: 'box' },
        { id: 'dc', label: 'c', sub: 'then reaches d', pattern: 'storage', icon: 'box' },
        { id: 'dd', label: 'd', sub: 'seen, not on path', pattern: 'warn', icon: 'box' },
      ],
      edges: [
        { source: 'da', target: 'db' },
        { source: 'da', target: 'dc' },
        { source: 'db', target: 'dd' },
        { source: 'dc', target: 'dd' },
      ],
    },
    { id: 'code', kind: 'code', filename: 'cycles.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), pattern: 'warn' },
  ],
  edges: [
    { source: 'diamond', target: 'code' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
