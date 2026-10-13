import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/correctness/buggy_find.py?raw'
import out from '../../../examples/correctness/buggy_find.out?raw'

// §1.6 — a plausible bug that passes its tests, the one instance that refutes it, and the boundary
// checklist that would have reached it.
export const evidence: Scene = {
  id: 'evidence',
  title: 'Passing tests, wrong function',
  flow: 'TB',
  framed: true,
  nodes: [
    { id: 'code', kind: 'code', filename: 'buggy_find.py', label: code.trimEnd() },
    {
      id: 'result',
      label: 'What the run shows',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), pattern: 'warn', hug: true },
        {
          id: 'checklist',
          kind: 'list',
          label: 'Boundary checklist',
          sub: 'pick these on purpose',
          icon: 'circlecheck',
          pattern: 'network',
          items: ['empty list, single item', 'target first, last, absent', 'duplicate pids', 'caller: test is not None'],
        },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'result', label: 'run' }],
}
