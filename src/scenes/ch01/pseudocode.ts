import type { Scene } from '@graphlearning/flow'
import pseudo from '../../../examples/ch01/find_parcel.pseudo?raw'

// §1.3 — the language-neutral version first, verbatim from examples/ch01/find_parcel.pseudo, with the
// table of notation changes the Python translation in the next section makes.
export const pseudocode: Scene = {
  id: 'pseudocode',
  title: 'Pseudocode',
  flow: 'TB',
  nodes: [
    { id: 'pseudo', kind: 'code', filename: 'find_parcel.pseudo', label: pseudo.trimEnd() },
    {
      id: 'mapping',
      kind: 'table',
      label: 'Pseudocode to Python',
      sub: 'the only changes the translation makes',
      headers: ['pseudocode', 'Python'],
      values: [
        ['i ← 0', 'i = 0'],
        ['a = b', 'a == b'],
        ['for i ← 0 to n − 1', 'for i in range(n)'],
        ['length(parcels)', 'len(parcels)'],
        ['NONE', 'None'],
        ['▷ pre / post', 'a docstring'],
      ],
    },
  ],
  edges: [{ source: 'pseudo', target: 'mapping', label: 'translate' }],
}
