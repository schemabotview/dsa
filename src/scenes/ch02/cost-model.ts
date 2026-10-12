import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch02/encoded_size.py?raw'
import out from '../../../examples/ch02/encoded_size.out?raw'

// §2.1 — the three choices a cost model makes, then the example where they disagree: trial division
// is ~√n steps in the VALUE n, which is exponential in the number of digits that encode it.
export const costModel: Scene = {
  id: 'cost-model',
  title: 'What a cost model counts',
  flow: 'TB',
  nodes: [
    {
      id: 'choices',
      label: 'A cost model fixes',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'size', label: 'Input size', sub: 'items, or digits, or bits', pattern: 'storage', icon: 'ruler' },
        { id: 'step', label: 'One step', sub: 'one comparison, one + or %', pattern: 'service', icon: 'gauge' },
        { id: 'count', label: 'What to count', sub: 'steps as size grows', pattern: 'network', icon: 'sigma' },
      ],
    },
    { id: 'code', kind: 'code', filename: 'encoded_size.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), pattern: 'warn' },
  ],
  edges: [
    { source: 'choices', target: 'code', label: 'applied to' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
