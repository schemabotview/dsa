import type { Scene } from '@graphlearning/flow'
import pseudo from '../../../examples/ch01/find_parcel.pseudo?raw'
import code from '../../../examples/ch01/find_parcel.py?raw'
import out from '../../../examples/ch01/find_parcel.out?raw'

// §1.3 — the baseline three ways: language-neutral pseudocode, its line-for-line Python translation,
// and what that Python printed. All three cards are the example files verbatim.
export const baseline: Scene = {
  id: 'baseline',
  title: 'The baseline: pseudocode, Python, output',
  flow: 'TB',
  nodes: [
    { id: 'pseudo', kind: 'code', filename: 'find_parcel.pseudo', label: pseudo.trimEnd() },
    { id: 'code', kind: 'code', filename: 'find_parcel.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), hug: true },
  ],
  edges: [
    { source: 'pseudo', target: 'code', label: 'translate' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
