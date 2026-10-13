import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/dynamic-programming/reconstruct.py?raw'
import out from '../../../examples/dynamic-programming/reconstruct.out?raw'

// §12.4 — the filled table, and the walk back through it: at each i, which side of the max produced
// OPT(i). At a tie both are optimal, and the tie rule decides which plan comes out.
export const reconstruct: Scene = {
  id: 'reconstruct',
  title: 'Reconstructing the plan',
  flow: 'TB',
  nodes: [
    {
      id: 'row',
      label: 'Walk back from OPT(7)',
      pattern: 'group',
      flow: 'LR',
      children: [
        {
          id: 'table',
          kind: 'memory',
          label: 'OPT(i)',
          slots: [
            { at: '7', name: '15', note: 'take: 5 + OPT(5)' },
            { at: '6', name: '13' },
            { at: '5', name: '10', note: 'tie: 4 + 6 = 10 = OPT(4)' },
            { at: '4', name: '10', note: 'take: 10 + OPT(0)' },
            { at: '3', name: '6' },
            { at: '2', name: '4' },
            { at: '1', name: '2' },
            { at: '0', name: '0' },
          ],
        },
        { id: 'code', kind: 'code', filename: 'reconstruct.py', label: code.trimEnd() },
      ],
    },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
  ],
  edges: [{ source: 'row', target: 'out', label: 'run' }],
}
