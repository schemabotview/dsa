import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch08/backtrack.py?raw'
import out from '../../../examples/ch08/backtrack_demo.out?raw'

// §8.3 — backtracking with one mutable state: make a choice, recurse, undo it. The copying version
// builds two new lists per step instead; same plans, more allocation.
export const backtracking: Scene = {
  id: 'backtracking',
  title: 'Choose, explore, undo',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'backtrack.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'backtrack_demo.py output', label: out.trimEnd() },
  ],
  edges: [{ source: 'code', target: 'out', label: 'run backtrack_demo.py' }],
}
