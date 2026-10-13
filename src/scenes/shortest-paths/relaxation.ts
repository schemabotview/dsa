import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/shortest-paths/relax.py?raw'
import out from '../../../examples/shortest-paths/relax.out?raw'

// §10.1 — the one operation every shortest-path algorithm repeats: relax an edge if the route through
// it beats the best known. The triangle shows the two relaxations that do not improve anything.
export const relaxation: Scene = {
  id: 'relaxation',
  title: 'Relaxation',
  flow: 'TB',
  nodes: [
    {
      id: 'row',
      label: 'Best known minutes from North',
      pattern: 'group',
      flow: 'LR',
      children: [
        {
          id: 'tri',
          kind: 'memory',
          label: 'dist and pred after the relaxations',
          slots: [
            { at: 'North', name: '0    pred None', note: 'source' },
            { at: 'East', name: '4    pred North' },
            { at: 'Hub', name: '12   pred North', note: 'via East: 13, rejected' },
            { at: 'Airfield', name: '∞    pred None', note: 'unreachable' },
          ],
        },
        { id: 'code', kind: 'code', filename: 'relax.py', label: code.trimEnd() },
      ],
    },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
  ],
  edges: [{ source: 'row', target: 'out', label: 'run' }],
}
