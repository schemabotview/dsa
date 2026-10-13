import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/exhaustive-search/explicit_stack.py?raw'
import out from '../../../examples/exhaustive-search/explicit_stack.out?raw'

// §8.7 — depth and breadth are separate limits: an explicit stack removes the recursion-depth limit,
// but nothing removes the 2ⁿ leaves.
export const explicitStack: Scene = {
  id: 'explicit-stack',
  title: 'Depth limits and exponential growth',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'explicit_stack.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), pattern: 'warn' },
  ],
  edges: [{ source: 'code', target: 'out', label: 'run' }],
}
