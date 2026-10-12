import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch01/buggy_find.py?raw'
import out from '../../../examples/ch01/buggy_find.out?raw'

// §1.6 — three passing tests and one counterexample. The output card carries `warn` because the
// last line is the refutation.
export const counterexample: Scene = {
  id: 'counterexample',
  title: 'Passing tests, wrong function',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'buggy_find.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), pattern: 'warn' },
  ],
  edges: [{ source: 'code', target: 'out', label: 'run' }],
}
