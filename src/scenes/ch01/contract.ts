import type { Scene } from '@graphlearning/flow'

// §1.1 — the contract as two promises facing opposite ways: the caller owes the precondition, the
// function owes the postcondition. Framed list cards so the header/body rule reads as one object.
export const contract: Scene = {
  id: 'contract',
  title: 'Who promises what',
  flow: 'TB',
  framed: true,
  nodes: [
    {
      id: 'pre',
      kind: 'list',
      label: 'Precondition',
      sub: 'the caller guarantees',
      icon: 'usercheck',
      pattern: 'user',
      items: ['parcels is a finite list of Parcel records', 'every record has a string pid', 'target is a string'],
    },
    { id: 'fn', label: 'find_parcel', sub: '(parcels, target)', pattern: 'service', icon: 'search' },
    {
      id: 'post',
      kind: 'list',
      label: 'Postcondition',
      sub: 'the function guarantees',
      icon: 'shieldcheck',
      pattern: 'external',
      items: ['returns the least i with parcels[i].pid == target', 'returns None if no such i exists', 'leaves parcels unchanged'],
    },
  ],
  edges: [
    { source: 'pre', target: 'fn', label: 'if this holds' },
    { source: 'fn', target: 'post', label: 'then this holds' },
  ],
}
