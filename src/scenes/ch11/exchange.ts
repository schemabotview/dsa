import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch11/most_parcels.py?raw'
import out from '../../../examples/ch11/most_parcels.out?raw'

// §11.2 — the exchange argument for "most parcels in one van: lightest first", as a chain of steps,
// beside the code that checks the claim on 200 random instances.
export const exchange: Scene = {
  id: 'exchange',
  title: 'Exchange arguments',
  flow: 'TB',
  nodes: [
    {
      id: 'row',
      label: 'Proof, and evidence',
      pattern: 'group',
      flow: 'LR',
      children: [
        {
          id: 'argument',
          label: 'The exchange argument',
          pattern: 'group',
          flow: 'TB',
          children: [
            { id: 'opt', label: 'Take any optimum O', sub: 'k parcels, within capacity', pattern: 'storage', icon: 'star' },
            { id: 'diff', label: 'First difference', sub: 'greedy took g, O took o', pattern: 'network', icon: 'search' },
            { id: 'swap', label: 'Swap o for g', sub: 'g ≤ o: still fits, still k', pattern: 'warn', icon: 'swap' },
            { id: 'done', label: 'Repeat', sub: 'O becomes greedy: greedy is optimal', pattern: 'external', icon: 'circlecheck' },
          ],
          edges: [
            { source: 'opt', target: 'diff' },
            { source: 'diff', target: 'swap' },
            { source: 'swap', target: 'done' },
          ],
        },
        { id: 'code', kind: 'code', filename: 'most_parcels.py', label: code.trimEnd() },
      ],
    },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), pattern: 'external' },
  ],
  edges: [{ source: 'row', target: 'out', label: 'run' }],
}
