import type { Scene } from '@graphlearning/flow'

// §1.5 — the three obligations as a chain, which is the shape of the induction: base case, step,
// and what the invariant gives you when the loop stops.
export const invariantProof: Scene = {
  id: 'invariant-proof',
  title: 'Three checks make a proof',
  flow: 'TB',
  nodes: [
    { id: 'init', label: 'Initialisation', sub: 'i = 0: the empty prefix has no match', pattern: 'storage', icon: 'power' },
    { id: 'maintain', label: 'Maintenance', sub: 'no return at i, so prefix i+1 has none', pattern: 'network', icon: 'repeat' },
    { id: 'end', label: 'Exit', sub: 'i = n: no index in 0..n-1 matches', pattern: 'service', icon: 'dooropen' },
    { id: 'post', label: 'Postcondition', sub: 'returning None is correct', pattern: 'external', icon: 'circlecheck' },
  ],
  edges: [
    { source: 'init', target: 'maintain', label: 'base case' },
    { source: 'maintain', target: 'end', label: 'induction on i' },
    { source: 'end', target: 'post', label: 'implies' },
  ],
}
