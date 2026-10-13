import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/limits/formulations.py?raw'
import out from '../../../examples/limits/formulations.out?raw'

// §14.1 — the same van-loading problem as an optimisation and as a decision, and the optimum recovered from 14 decision calls by binary search on the threshold.
export const formulations: Scene = {
  id: 'formulations',
  title: 'Decision and optimisation',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'formulations.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), pattern: 'external' },
  ],
  edges: [{ source: 'code', target: 'out', label: 'run' }],
}
