import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/graphs/bfs.py?raw'
import out from '../../../examples/graphs/bfs.out?raw'

// §9.3 — BFS from North, each depot labelled with its hop count (its layer); the parent pointers along
// the path to Port are the warn-coloured chain.
export const bfs: Scene = {
  id: 'bfs',
  title: 'Breadth-first search',
  flow: 'TB',
  nodes: [
    {
      id: 'row',
      label: 'The BFS tree from North, and the search',
      pattern: 'group',
      flow: 'LR',
      children: [
        {
          id: 'layers',
          label: 'BFS tree: hops and parents',
          pattern: 'group',
          flow: 'TB',
          children: [
            { id: 'l-north', label: 'North', sub: 'hops 0 · start', pattern: 'service', icon: 'warehouse' },
            { id: 'l-hub', label: 'Hub', sub: 'hops 1', pattern: 'warn', icon: 'network' },
            { id: 'l-east', label: 'East', sub: 'hops 1', pattern: 'storage', icon: 'warehouse' },
            { id: 'l-west', label: 'West', sub: 'hops 2', pattern: 'warn', icon: 'warehouse' },
            { id: 'l-south', label: 'South', sub: 'hops 3', pattern: 'warn', icon: 'warehouse' },
            { id: 'l-port', label: 'Port', sub: 'hops 4', pattern: 'warn', icon: 'warehouse' },
          ],
          edges: [
            { source: 'l-north', target: 'l-hub', label: 'parent' },
            { source: 'l-north', target: 'l-east' },
            { source: 'l-hub', target: 'l-west', label: 'parent' },
            { source: 'l-west', target: 'l-south', label: 'parent' },
            { source: 'l-south', target: 'l-port', label: 'parent' },
          ],
        },
        { id: 'code', kind: 'code', filename: 'bfs.py', label: code.trimEnd() },
      ],
    },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
  ],
  edges: [{ source: 'row', target: 'out', label: 'run' }],
}
