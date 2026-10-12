import type { Scene } from '@graphlearning/flow'

// §1.2 — modelling is deciding what to keep. The informal question on the left becomes a model of
// three named parts, and the things deliberately left out are part of the model too.
export const taskToModel: Scene = {
  id: 'task-to-model',
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
  ],
  edges: [{ source: 'task', target: 'model', label: 'abstract' }],
}
