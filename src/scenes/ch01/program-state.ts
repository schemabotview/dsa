import type { Scene } from '@graphlearning/flow'

// §1.4 — state is a snapshot: every name and the value it is bound to, at one point in the run.
export const programState: Scene = {
  id: 'program-state',
  title: 'A snapshot of state',
  flow: 'TB',
  nodes: [
    {
      id: 'loop',
      kind: 'code',
      filename: 'paused before the comparison',
      label: `for i in range(len(parcels)):
    if parcels[i].pid == target:   # <- here
        return i
return None`,
    },
    {
      id: 'state',
      kind: 'memory',
      label: 'state at this moment',
      sub: 'second time round the loop',
      slots: [
        { at: 'parcels', name: '[P-104, P-221, P-317, P-458]' },
        { at: 'target', name: '"P-317"' },
        { at: 'i', name: '1', note: 'changes every iteration' },
        { at: 'parcels[i].pid', name: '"P-221"', note: 'derived from i' },
      ],
    },
  ],
  edges: [{ source: 'loop', target: 'state', label: 'snapshot' }],
}
