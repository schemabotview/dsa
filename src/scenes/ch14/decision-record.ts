import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch14/decision_record.py?raw'
import out from '../../../examples/ch14/decision_record.out?raw'

// §14.9 — the planner's whole design as one decision record: each sub-problem matched to a chapter's
// technique, with the evidence behind it and the limits stated.
export const decisionRecord: Scene = {
  id: 'decision-record',
  title: 'The integrated decision record',
  flow: 'TB',
  nodes: [
    {
      id: 'map',
      label: 'The delivery planner, part by part',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'r-lookup', label: 'Lookups', sub: 'hash map: Ch. 5', pattern: 'storage', icon: 'hash' },
        { id: 'r-urgent', label: 'Urgency', sub: 'heap: Ch. 7', pattern: 'storage', icon: 'zap' },
        { id: 'r-routes', label: 'Routes', sub: 'Dijkstra: Ch. 10', pattern: 'network', icon: 'network' },
        { id: 'r-load', label: 'Loading', sub: 'knapsack DP: Ch. 12', pattern: 'service', icon: 'package' },
        { id: 'r-tour', label: 'Touring', sub: 'heuristic: Ch. 14', pattern: 'warn', icon: 'workflow' },
        { id: 'r-proof', label: 'Evidence', sub: 'proofs + runs: Ch. 1–2', pattern: 'external', icon: 'shieldcheck' },
      ],
    },
    {
      id: 'row',
      label: 'Written down, with its limits',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'code', kind: 'code', filename: 'decision_record.py', label: code.trimEnd(), hug: true },
        { id: 'out', kind: 'code', filename: 'output', label: out.trimEnd(), hug: true, pattern: 'external' },
      ],
    },
  ],
  edges: [{ source: 'map', target: 'row' }],
}
