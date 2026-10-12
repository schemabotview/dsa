import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch01/boundary_cases.py?raw'
import out from '../../../examples/ch01/boundary_cases.out?raw'

// §1.6 — the boundary checklist run against the baseline, plus the caller-side `if i:` trap.
export const boundaryCases: Scene = {
  id: 'boundary-cases',
  title: 'Boundary cases',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'boundary_cases.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
  ],
  edges: [{ source: 'code', target: 'out', label: 'run' }],
}
