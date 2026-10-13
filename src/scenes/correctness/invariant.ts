import type { Scene } from '@graphlearning/flow'

// §1.5 — the invariant drawn on the list (the bracketed prefix is what has been proved), then the
// three induction checks and the termination measure that complete the argument.
export const invariant: Scene = {
  id: 'invariant',
  title: 'Invariant, proof, termination',
  flow: 'TB',
  nodes: [
    {
      id: 'prefix',
      kind: 'memory',
      label: 'searching for P-458, top of the loop, i = 2',
      slots: [
        { at: '0', name: 'P-104', group: 'parcels[0:i]: no match' },
        { at: '1', name: 'P-221', group: 'parcels[0:i]: no match' },
        { at: '2', name: 'P-317', note: '<- i', group: 'not yet inspected' },
        { at: '3', name: 'P-458', group: 'not yet inspected' },
      ],
    },
    { id: 'statement', label: 'Invariant', sub: 'target is not in parcels[0:i]', pattern: 'service', icon: 'shieldcheck' },
    {
      id: 'proof',
      label: 'Proof by induction on i',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'init', label: 'Initialisation', sub: 'i = 0: empty prefix', pattern: 'storage', icon: 'power' },
        { id: 'maintain', label: 'Maintenance', sub: 'no return at i, so none up to i+1', pattern: 'network', icon: 'repeat' },
        { id: 'exit', label: 'Exit', sub: 'i = n: no index matches', pattern: 'external', icon: 'dooropen' },
      ],
      edges: [
        { source: 'init', target: 'maintain' },
        { source: 'maintain', target: 'exit' },
      ],
    },
    { id: 'terminate', label: 'Termination', sub: 'n − i falls by 1, stops at 0', pattern: 'warn', icon: 'clock' },
  ],
  edges: [
    { source: 'prefix', target: 'statement', label: 'holds every time' },
    { source: 'statement', target: 'proof', label: 'checked by' },
    { source: 'proof', target: 'terminate', label: 'and the loop stops' },
  ],
}
