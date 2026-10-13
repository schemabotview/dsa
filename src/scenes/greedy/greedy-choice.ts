import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/greedy/change.py?raw'
import out from '../../../examples/greedy/change.out?raw'

// §11.1 — the anatomy of a greedy algorithm, then the same rule (largest stamp first) optimal for one
// stamp set and wrong for another, checked against brute force.
export const greedyChoice: Scene = {
  id: 'greedy-choice',
  title: 'Greedy choices',
  flow: 'TB',
  nodes: [
    {
      id: 'parts',
      label: 'Every greedy algorithm has three parts',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'feasible', label: 'Feasibility', sub: 'what a valid answer is', pattern: 'storage', icon: 'shieldcheck' },
        { id: 'objective', label: 'Objective', sub: 'what "best" means', pattern: 'service', icon: 'star' },
        { id: 'rule', label: 'Greedy rule', sub: 'the local choice, never undone', pattern: 'warn', icon: 'zap' },
      ],
    },
    { id: 'code', kind: 'code', filename: 'change.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), pattern: 'warn' },
  ],
  edges: [
    { source: 'parts', target: 'code' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
