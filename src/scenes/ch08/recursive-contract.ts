import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch08/nested.py?raw'
import out from '../../../examples/ch08/nested.out?raw'

// §8.1 — a recursive function with its contract, base case and progress argument written down, and
// an output indented by depth so each call's state is visible.
export const recursiveContract: Scene = {
  id: 'recursive-contract',
  title: 'Recursive contracts',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'nested.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
  ],
  edges: [{ source: 'code', target: 'out', label: 'run' }],
}
