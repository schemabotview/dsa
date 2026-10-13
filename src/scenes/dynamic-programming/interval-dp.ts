import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/dynamic-programming/merge_batches.py?raw'
import out from '../../../examples/dynamic-programming/merge_batches.out?raw'

// §12.7 — an interval DP (state = a range i..j, choice = where the last merge splits it), checked
// against brute force; and the general view: every DP is a path problem on its state DAG.
export const intervalDp: Scene = {
  id: 'interval-dp',
  title: 'Interval DP and state DAGs',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'merge_batches.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), pattern: 'external' },
    {
      id: 'dag',
      label: 'Every DP is a DAG',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'states', label: 'States', sub: 'vertices', pattern: 'storage', icon: 'box' },
        { id: 'choices', label: 'Choices', sub: 'edges, with costs', pattern: 'network', icon: 'workflow' },
        { id: 'order', label: 'Evaluation', sub: 'a topological order', pattern: 'service', icon: 'sortarrows' },
      ],
    },
  ],
  edges: [
    { source: 'code', target: 'out', label: 'run' },
    { source: 'out', target: 'dag' },
  ],
}
