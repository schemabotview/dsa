import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch12/edit_distance.py?raw'
import out from '../../../examples/ch12/edit_distance.out?raw'
import lcsOut from '../../../examples/ch12/lcs.out?raw'

// §12.5 — edit distance DEPOT → DEPART as a printed table (each cell from its three neighbours), and
// the longest common subsequence of two pairs of labels.
export const sequences: Scene = {
  id: 'sequences',
  title: 'Edit distance and LCS',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'edit_distance.py', label: code.trimEnd() },
    {
      id: 'results',
      label: 'Tables over prefixes',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'out', kind: 'code', filename: 'edit_distance.py output', label: out.trimEnd(), hug: true },
        { id: 'lcs', kind: 'code', filename: 'lcs.py output', label: lcsOut.trimEnd(), hug: true },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'results', label: 'run' }],
}
