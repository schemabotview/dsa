import type { Scene } from '@graphlearning/flow'

// §1.1 — one problem, many instances. The problem is the contract; each instance is one concrete
// input to it, and the algorithm has to be right for every one of them, including the empty list.
export const problemInstances: Scene = {
  id: 'problem-instances',
  title: 'One problem, many instances',
  flow: 'TB',
  nodes: [
    { id: 'problem', label: 'Find a parcel', sub: 'a contract over all inputs', pattern: 'service', icon: 'scroll' },
    {
      id: 'instances',
      label: 'Instances',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'inst-four', label: '4 parcels', sub: 'target P-317', pattern: 'storage', icon: 'boxes' },
        { id: 'inst-miss', label: '4 parcels', sub: 'target P-999', pattern: 'storage', icon: 'boxes' },
        { id: 'inst-empty', label: 'Empty list', sub: 'target P-317', pattern: 'storage', icon: 'box' },
      ],
    },
    {
      id: 'answers',
      label: 'Required output',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'out-two', label: '2', sub: 'index of the match', pattern: 'external', icon: 'circlecheck' },
        { id: 'out-none-a', label: 'None', sub: 'no parcel matches', pattern: 'external', icon: 'circleslash' },
        { id: 'out-none-b', label: 'None', sub: 'nothing to inspect', pattern: 'external', icon: 'circleslash' },
      ],
    },
  ],
  edges: [
    { source: 'problem', target: 'instances', label: 'admits' },
    { source: 'instances', target: 'answers', label: 'must map to' },
  ],
}
