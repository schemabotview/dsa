import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/exhaustive-search/branch_bound.py?raw'
import out from '../../../examples/exhaustive-search/branch_bound.out?raw'
import wrong from '../../../examples/exhaustive-search/wrong_prune.py?raw'
import wrongOut from '../../../examples/exhaustive-search/wrong_prune.out?raw'

// §8.6 — a sound bound (the remaining parcels cannot beat the incumbent) cuts 98 nodes to 38 and keeps
// the optimum; an unsound prune returns a feasible plan that is not optimal.
export const branchBound: Scene = {
  id: 'branch-bound',
  title: 'Pruning: sound and unsound',
  flow: 'TB',
  nodes: [
    {
      id: 'sound',
      label: 'Sound: feasibility and bound prunes',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'code', kind: 'code', filename: 'branch_bound.py', label: code.trimEnd(), hug: true },
        { id: 'out', kind: 'code', filename: 'output', label: out.trimEnd(), hug: true, pattern: 'external' },
      ],
    },
    {
      id: 'unsound',
      label: 'Unsound: a prune that discards the optimum',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'wrong', kind: 'code', filename: 'wrong_prune.py', label: wrong.trimEnd(), hug: true },
        { id: 'wrong-out', kind: 'code', filename: 'output', label: wrongOut.trimEnd(), hug: true, pattern: 'warn' },
      ],
    },
  ],
  edges: [{ source: 'sound', target: 'unsound' }],
}
