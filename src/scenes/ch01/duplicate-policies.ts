import type { Scene } from '@graphlearning/flow'

// §1.1 — the same list admits several reasonable contracts. The memory card is the instance; the
// table is the decision the specification has to make before any code is written.
export const duplicatePolicies: Scene = {
  id: 'duplicate-policies',
  title: 'Duplicates and misses need a rule',
  flow: 'TB',
  nodes: [
    {
      id: 'dupes',
      kind: 'memory',
      label: 'parcels',
      sub: 'two records share a pid',
      slots: [
        { at: '0', name: 'P-221  East', group: 'same pid' },
        { at: '1', name: 'P-221  West', group: 'same pid' },
        { at: '2', name: 'P-458  West' },
      ],
    },
    {
      id: 'policies',
      kind: 'table',
      label: 'Candidate contracts',
      sub: 'find P-221 · find P-999',
      headers: ['policy', 'P-221', 'P-999'],
      values: [
        ['first match', '0', 'None'],
        ['all matches', '[0, 1]', '[]'],
        ['unique or error', 'ValueError', 'KeyError'],
      ],
    },
  ],
  edges: [{ source: 'dupes', target: 'policies', label: 'choose one' }],
}
