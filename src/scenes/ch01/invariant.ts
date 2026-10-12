import type { Scene } from '@graphlearning/flow'

// §1.5 — the invariant drawn on the list itself: the bracketed prefix is what has been proved.
export const invariant: Scene = {
  id: 'invariant',
  title: 'The invariant, at i = 2',
  flow: 'TB',
  nodes: [
    {
      id: 'prefix',
      kind: 'memory',
      label: 'searching for P-458',
      sub: 'at the top of the loop, i = 2',
      slots: [
        { at: '0', name: 'P-104', group: 'parcels[0:i]: no match' },
        { at: '1', name: 'P-221', group: 'parcels[0:i]: no match' },
        { at: '2', name: 'P-317', note: '<- i', group: 'not yet inspected' },
        { at: '3', name: 'P-458', group: 'not yet inspected' },
      ],
    },
    {
      id: 'statement',
      label: 'Invariant',
      sub: 'target is not in parcels[0:i]',
      pattern: 'service',
      icon: 'shieldcheck',
    },
  ],
  edges: [{ source: 'statement', target: 'prefix', label: 'describes' }],
}
