import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/graphs/representations.py?raw'
import out from '../../../examples/graphs/representations.out?raw'

// §9.2 — the same road network as an adjacency list (only the edges that exist) and as an adjacency
// matrix (a cell for every pair), with the operation costs each makes cheap.
export const representations: Scene = {
  id: 'representations',
  title: 'Adjacency lists and matrices',
  flow: 'TB',
  nodes: [
    {
      id: 'both',
      label: 'One graph, two representations',
      pattern: 'group',
      flow: 'LR',
      children: [
        {
          id: 'list',
          kind: 'table',
          label: 'Adjacency list',
          headers: ['vertex', 'neighbours'],
          values: [
            ['Hub', 'North, East, West'],
            ['North', 'Hub, East'],
            ['East', 'Hub, North'],
            ['West', 'Hub, South'],
            ['South', 'West, Port'],
            ['Port', 'South'],
            ['Airfield', 'Annex'],
            ['Annex', 'Airfield'],
          ],
        },
        {
          id: 'matrix',
          kind: 'table',
          label: 'Adjacency matrix (first 4)',
          headers: ['', 'Hub', 'North', 'East', 'West'],
          values: [
            ['Hub', '0', '1', '1', '1'],
            ['North', '1', '0', '1', '0'],
            ['East', '1', '1', '0', '0'],
            ['West', '1', '0', '0', '0'],
          ],
        },
      ],
    },
    { id: 'code', kind: 'code', filename: 'representations.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
  ],
  edges: [
    { source: 'both', target: 'code' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
