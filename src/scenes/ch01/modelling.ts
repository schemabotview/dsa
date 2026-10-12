import type { Scene } from '@graphlearning/flow'

// §1.2 — the informal request, the model it becomes, and the assumptions every claim about that
// model rests on (label = assumption, sub = what breaks without it).
export const modelling: Scene = {
  id: 'modelling',
  title: 'From a task to a model',
  flow: 'TB',
  nodes: [
    { id: 'task', label: 'Where is P-317?', sub: 'a dispatcher at the North depot', pattern: 'user', icon: 'users' },
    {
      id: 'model',
      label: 'The model',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'data', label: 'Data', sub: 'a list of Parcel records', pattern: 'storage', icon: 'database' },
        { id: 'query', label: 'Query', sub: 'one pid string', pattern: 'service', icon: 'search' },
        { id: 'answer', label: 'Answer', sub: 'an index, or None', pattern: 'external', icon: 'circlecheck' },
        { id: 'left-out', label: 'Left out', sub: 'scanners, trucks, time of day', pattern: 'warn', icon: 'scissors' },
      ],
    },
    {
      id: 'assume',
      label: 'Assumed — and what breaks without it',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'exact', label: 'Exact match', sub: '"p-317 " is a miss', pattern: 'service', icon: 'search' },
        { id: 'frozen', label: 'No edits mid-search', sub: 'an index can go stale', pattern: 'warn', icon: 'lock' },
        { id: 'cheap', label: 'Cheap compare', sub: 'one step per check', pattern: 'network', icon: 'gauge' },
        { id: 'memory', label: 'Fits in memory', sub: 'no disk or network reads', pattern: 'external', icon: 'memory' },
      ],
    },
  ],
  edges: [
    { source: 'task', target: 'model', label: 'abstract' },
    { source: 'model', target: 'assume', label: 'claims hold only if' },
  ],
}
