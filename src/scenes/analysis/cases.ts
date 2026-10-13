import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/analysis/avg_case.py?raw'
import out from '../../../examples/analysis/avg_case.out?raw'

// §2.4 — one algorithm, three numbers: the worst case, the exact average over a stated distribution,
// and a seeded random experiment that estimates the same expectation.
export const cases: Scene = {
  id: 'cases',
  title: 'Worst, average, expected',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'avg_case.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
    {
      id: 'kinds',
      label: 'Each number needs its own assumption',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'worst', label: 'Worst case', sub: 'max over all inputs of size n', pattern: 'warn', icon: 'ban' },
        { id: 'average', label: 'Average case', sub: 'over an input distribution', pattern: 'storage', icon: 'sigma' },
        { id: 'expected', label: 'Expected', sub: 'over the algorithm’s own coin flips', pattern: 'network', icon: 'zap' },
      ],
    },
  ],
  edges: [
    { source: 'code', target: 'out', label: 'run' },
    { source: 'out', target: 'kinds' },
  ],
}
