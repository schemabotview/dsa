import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/graphs/models.py?raw'
import out from '../../../examples/graphs/models.out?raw'

// §9.1 — the depot road network (undirected: each road usable both ways) with its separate
// Airfield–Annex piece, then the four graph models in code.
export const graphModels: Scene = {
  id: 'graph-models',
  title: 'Graph models',
  flow: 'TB',
  nodes: [
    {
      id: 'row',
      label: 'The network, and the four models in code',
      pattern: 'group',
      flow: 'LR',
      children: [
        {
          id: 'roads',
          label: 'Depot roads: 8 vertices, 7 undirected edges',
          pattern: 'group',
          flow: 'TB',
          children: [
            { id: 'north', label: 'North', pattern: 'storage', icon: 'warehouse' },
            { id: 'east', label: 'East', pattern: 'storage', icon: 'warehouse' },
            { id: 'hub', label: 'Hub', pattern: 'service', icon: 'network' },
            { id: 'west', label: 'West', pattern: 'storage', icon: 'warehouse' },
            { id: 'south', label: 'South', pattern: 'storage', icon: 'warehouse' },
            { id: 'port', label: 'Port', pattern: 'storage', icon: 'warehouse' },
            { id: 'airfield', label: 'Airfield', pattern: 'external', icon: 'warehouse' },
            { id: 'annex', label: 'Annex', pattern: 'external', icon: 'warehouse' },
          ],
          edges: [
            { source: 'north', target: 'hub', bidirectional: true },
            { source: 'east', target: 'hub', bidirectional: true },
            { source: 'north', target: 'east', bidirectional: true },
            { source: 'hub', target: 'west', bidirectional: true },
            { source: 'west', target: 'south', bidirectional: true },
            { source: 'south', target: 'port', bidirectional: true },
            { source: 'airfield', target: 'annex', bidirectional: true },
          ],
        },
        { id: 'code', kind: 'code', filename: 'models.py', label: code.trimEnd() },
      ],
    },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
  ],
  edges: [{ source: 'row', target: 'out', label: 'run' }],
}
