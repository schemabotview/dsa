import type { Scene } from '@graphlearning/flow'
import out from '../../../examples/ch02/recursion.out?raw'

// §2.6 — the branching recurrence as the tree of calls it makes (fib_calls(4): 9 calls, with fib(2)
// computed twice; ids written out literally so `npm run check` can see them), then the call counts for the halving and branching recursions side by side.
export const recursionTree: Scene = {
  id: 'recursion-tree',
  title: 'A recursion tree',
  flow: 'TB',
  nodes: [
    {
      id: 'tree',
      label: 'fib_calls(4): T(n) = T(n−1) + T(n−2) + 1',
      pattern: 'group',
      flow: 'TB',
      children: [
        { id: 'f4', label: 'fib(4)', sub: 'level 0', pattern: 'service' },
        { id: 'f3', label: 'fib(3)', sub: 'level 1', pattern: 'service' },
        { id: 'f2a', label: 'fib(2)', sub: 'level 1', pattern: 'warn' },
        { id: 'f2b', label: 'fib(2)', sub: 'level 2 · repeated', pattern: 'warn' },
        { id: 'f1a', label: 'fib(1)', sub: 'base case', pattern: 'storage' },
        { id: 'f1b', label: 'fib(1)', sub: 'base case', pattern: 'storage' },
        { id: 'f0a', label: 'fib(0)', sub: 'base case', pattern: 'storage' },
        { id: 'f1c', label: 'fib(1)', sub: 'base case', pattern: 'storage' },
        { id: 'f0b', label: 'fib(0)', sub: 'base case', pattern: 'storage' },
      ],
      edges: [
        { source: 'f4', target: 'f3' },
        { source: 'f4', target: 'f2a' },
        { source: 'f3', target: 'f2b' },
        { source: 'f3', target: 'f1a' },
        { source: 'f2a', target: 'f1b' },
        { source: 'f2a', target: 'f0a' },
        { source: 'f2b', target: 'f1c' },
        { source: 'f2b', target: 'f0b' },
      ],
    },
    { id: 'out', kind: 'code', filename: 'recursion.py output', label: out.trimEnd(), hug: true },
  ],
  edges: [{ source: 'tree', target: 'out', label: 'call counts' }],
}
