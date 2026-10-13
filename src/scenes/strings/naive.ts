import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/strings/naive.py?raw'
import out from '../../../examples/strings/naive.out?raw'

// §13.3 — naive matching tries every start; overlapping occurrences are all reported, and a repeated
// near-miss pattern costs about n × m comparisons.
export const naive: Scene = {
  id: 'naive',
  title: 'Naive substring matching',
  flow: 'TB',
  nodes: [
    {
      id: 'slide',
      kind: 'table',
      label: 'Sliding ABA along ABABABA',
      headers: ['start', 'window', 'match'],
      values: [
        ['0', 'ABA', 'yes'],
        ['1', 'BAB', 'no, at once'],
        ['2', 'ABA', 'yes: overlaps 0'],
        ['3', 'BAB', 'no'],
        ['4', 'ABA', 'yes'],
      ],
    },
    { id: 'code', kind: 'code', filename: 'naive.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), pattern: 'warn' },
  ],
  edges: [
    { source: 'slide', target: 'code' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
