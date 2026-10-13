import type { Scene } from '@graphlearning/flow'

// §1.1 — instances on top, the two-sided contract they must all satisfy in the middle, and the
// choice the awkward instances force at the bottom.
export const problemContract: Scene = {
  id: 'problem-contract',
  title: 'Instances, contract, policy',
  flow: 'TB',
  framed: true,
  nodes: [
    {
      id: 'instances',
      label: 'Instances of one problem',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'inst-hit', label: '4 parcels', sub: 'target P-317 → 2', pattern: 'storage', icon: 'boxes' },
        { id: 'inst-miss', label: '4 parcels', sub: 'target P-999 → None', pattern: 'storage', icon: 'boxes' },
        { id: 'inst-empty', label: 'Empty list', sub: 'target P-317 → None', pattern: 'storage', icon: 'box' },
      ],
    },
    {
      id: 'contract',
      label: 'The contract',
      pattern: 'group',
      flow: 'LR',
      children: [
        {
          id: 'pre',
          kind: 'list',
          label: 'Precondition',
          sub: 'the caller promises',
          icon: 'usercheck',
          pattern: 'user',
          items: ['a finite list of Parcel records', 'each with a string pid'],
        },
        { id: 'fn', label: 'find_parcel', sub: '(parcels, target)', pattern: 'service', icon: 'search' },
        {
          id: 'post',
          kind: 'list',
          label: 'Postcondition',
          sub: 'the function promises',
          icon: 'shieldcheck',
          pattern: 'external',
          items: ['least i with a matching pid', 'None if there is none', 'parcels unchanged'],
        },
      ],
      edges: [
        { source: 'pre', target: 'fn' },
        { source: 'fn', target: 'post' },
      ],
    },
    {
      id: 'policies',
      kind: 'table',
      label: 'Duplicates and misses need a rule',
      sub: 'parcels = [P-221 East, P-221 West, P-458 West]',
      headers: ['policy', 'find P-221', 'find P-999'],
      values: [
        ['first match', '0', 'None'],
        ['all matches', '[0, 1]', '[]'],
        ['unique or error', 'ValueError', 'KeyError'],
      ],
    },
  ],
  edges: [
    { source: 'instances', target: 'contract', label: 'every one must satisfy' },
    { source: 'contract', target: 'policies', label: 'awkward inputs decide' },
  ],
}
