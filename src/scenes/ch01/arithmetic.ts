import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch01/arithmetic.py?raw'
import out from '../../../examples/ch01/arithmetic.out?raw'

// §1.7 — the arithmetic the rest of the course leans on, with the CPython version stated because
// line 8's output changed in 3.12.
export const arithmetic: Scene = {
  id: 'arithmetic',
  title: 'Arithmetic assumptions',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'arithmetic.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
  ],
  edges: [{ source: 'code', target: 'out', label: 'run' }],
}
