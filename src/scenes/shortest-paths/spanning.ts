import type { Scene } from '@graphlearning/flow'
import out from '../../../examples/shortest-paths/mst_demo.out?raw'

// §10.6 — two different trees from the same roads: the minimum spanning tree (cheapest network,
// 36 min of road) and the shortest-path tree from North (fastest routes from one depot, 59).
export const spanning: Scene = {
  id: 'spanning',
  title: 'Spanning trees versus shortest-path trees',
  flow: 'TB',
  nodes: [
    {
      id: 'trees',
      label: 'Same 6 depots, two objectives',
      pattern: 'group',
      flow: 'LR',
      children: [
        {
          id: 'mst',
          label: 'Minimum spanning tree: 36',
          pattern: 'group',
          flow: 'TB',
          children: [
            { id: 'm-north', label: 'North', pattern: 'storage', icon: 'warehouse' },
            { id: 'm-east', label: 'East', pattern: 'storage', icon: 'warehouse' },
            { id: 'm-hub', label: 'Hub', pattern: 'storage', icon: 'network' },
            { id: 'm-west', label: 'West', pattern: 'storage', icon: 'warehouse' },
            { id: 'm-south', label: 'South', pattern: 'storage', icon: 'warehouse' },
            { id: 'm-port', label: 'Port', pattern: 'storage', icon: 'warehouse' },
          ],
          edges: [
            { source: 'm-north', target: 'm-east', label: '4' },
            { source: 'm-east', target: 'm-hub', label: '9' },
            { source: 'm-hub', target: 'm-west', label: '7' },
            { source: 'm-west', target: 'm-south', label: '6' },
            { source: 'm-south', target: 'm-port', label: '10' },
          ],
        },
        {
          id: 'spt',
          label: 'Shortest paths from North: 59',
          pattern: 'group',
          flow: 'TB',
          children: [
            { id: 's-north', label: 'North', sub: '0', pattern: 'service', icon: 'warehouse' },
            { id: 's-east', label: 'East', sub: '4', pattern: 'network', icon: 'warehouse' },
            { id: 's-hub', label: 'Hub', sub: '12', pattern: 'network', icon: 'network' },
            { id: 's-port', label: 'Port', sub: '34', pattern: 'network', icon: 'warehouse' },
            { id: 's-west', label: 'West', sub: '19', pattern: 'network', icon: 'warehouse' },
            { id: 's-south', label: 'South', sub: '25', pattern: 'network', icon: 'warehouse' },
          ],
          edges: [
            { source: 's-north', target: 's-east', label: '4' },
            { source: 's-north', target: 's-hub', label: '12' },
            { source: 's-east', target: 's-port', label: '30' },
            { source: 's-hub', target: 's-west', label: '7' },
            { source: 's-west', target: 's-south', label: '6' },
          ],
        },
      ],
    },
    { id: 'out', kind: 'code', filename: 'mst_demo.py output', label: out.trimEnd() },
  ],
  edges: [{ source: 'trees', target: 'out' }],
}
