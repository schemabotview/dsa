import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch01/aliasing.py?raw'
import out from '../../../examples/ch01/aliasing.out?raw'

// §1.7 — two names, one list, one parcel. The diagram is the object graph after the script runs.
export const aliasing: Scene = {
  id: 'aliasing',
  title: 'Names refer to objects',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'aliasing.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output', label: out.trimEnd(), hug: true },
    {
      id: 'objects',
      label: 'Objects after the run',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'today', label: 'today', sub: 'a name', pattern: 'user', icon: 'tag' },
        { id: 'route', label: 'route', sub: 'a name', pattern: 'user', icon: 'tag' },
        { id: 'list', label: 'one list', sub: 'two parcels', pattern: 'storage', icon: 'layers' },
        { id: 'parcel', label: 'P-104', sub: 'depot now South', pattern: 'service', icon: 'box' },
      ],
      edges: [
        { source: 'today', target: 'list' },
        { source: 'route', target: 'list' },
        { source: 'list', target: 'parcel', label: 'item 0' },
      ],
    },
  ],
  edges: [
    { source: 'code', target: 'out', label: 'run' },
    { source: 'out', target: 'objects' },
  ],
}
