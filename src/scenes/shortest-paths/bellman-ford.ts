import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/shortest-paths/bellman_ford.py?raw'
import out from '../../../examples/shortest-paths/bellman_ford.out?raw'

// §10.4 — Bellman–Ford: V − 1 rounds of relaxing every edge, then a check for edges that still
// improve, spread to everything reachable from them. Negative edge fine; negative cycle reported.
export const bellmanFord: Scene = {
  id: 'bellman-ford',
  title: 'Bellman–Ford and negative cycles',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'bellman_ford.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), pattern: 'warn' },
  ],
  edges: [{ source: 'code', target: 'out', label: 'run' }],
}
