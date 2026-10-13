import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/dynamic-programming/overlap.py?raw'
import out from '../../../examples/dynamic-programming/overlap.out?raw'

// §12.1 — the same function with and without a memo: 242,785 calls against 26, because the memo turns
// the recursion tree into its dependency DAG (one node per distinct n).
export const overlap: Scene = {
  id: 'overlap',
  title: 'Overlapping subproblems',
  flow: 'TB',
  nodes: [
    {
      id: 'memo',
      kind: 'memory',
      label: 'the memo after fib_memo(6)',
      slots: [
        { at: 'n = 6', name: '8', note: 'needs 5 and 4' },
        { at: 'n = 5', name: '5', note: 'needs 4 and 3' },
        { at: 'n = 4', name: '3', note: 'needs 3 and 2' },
        { at: 'n = 3', name: '2' },
        { at: 'n = 2', name: '1' },
        { at: 'n = 1', name: '1', note: 'base case' },
        { at: 'n = 0', name: '0', note: 'base case' },
      ],
    },
    { id: 'code', kind: 'code', filename: 'overlap.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), pattern: 'external' },
  ],
  edges: [
    { source: 'memo', target: 'code' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
