import type { Scene } from '@graphlearning/flow'

// §1.2 — a constraint decides what is allowed, an objective ranks what is allowed. Two rows, one per
// job, so the feasible set is visible as its own thing between them and the board stays near 1:1.
export const constraintObjective: Scene = {
  id: 'constraint-objective',
  title: 'Constraint, then objective',
  flow: 'TB',
  nodes: [
    {
      id: 'step-constraint',
      label: '1 · Constraint: what is allowed',
      pattern: 'group',
      flow: 'LR',
      children: [
        {
          id: 'all',
          kind: 'memory',
          label: 'all parcels',
          slots: [
            { at: '0', name: 'P-104  North  2500 g' },
            { at: '1', name: 'P-221  East    800 g' },
            { at: '2', name: 'P-317  North  5000 g' },
            { at: '3', name: 'P-458  West   1200 g' },
          ],
        },
        { id: 'constraint', label: 'Constraint', sub: 'depot is North', pattern: 'warn', icon: 'funnel' },
        {
          id: 'feasible',
          kind: 'memory',
          label: 'feasible set',
          slots: [
            { at: '0', name: 'P-104  North  2500 g' },
            { at: '2', name: 'P-317  North  5000 g' },
          ],
        },
      ],
      edges: [
        { source: 'all', target: 'constraint' },
        { source: 'constraint', target: 'feasible', label: 'keeps' },
      ],
    },
    {
      id: 'step-objective',
      label: '2 · Objective: which is best',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'objective', label: 'Objective', sub: 'minimise weight', pattern: 'service', icon: 'scale' },
        { id: 'best', label: 'P-104', sub: 'the optimum, 2500 g', pattern: 'external', icon: 'star' },
      ],
      edges: [{ source: 'objective', target: 'best', label: 'ranks' }],
    },
  ],
  edges: [{ source: 'step-constraint', target: 'step-objective', label: 'feasible answers' }],
}
