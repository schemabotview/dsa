import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch04/simple_sorts.py?raw'
import out from '../../../examples/ch04/simple_sorts.out?raw'

// §4.3 — the two quadratic baselines, instrumented: insertion sort adapts to its input, selection sort
// does not, and selection sort's long-distance swap breaks stability.
export const simpleSorts: Scene = {
  id: 'simple-sorts',
  title: 'Two quadratic baselines',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'simple_sorts.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), pattern: 'warn' },
  ],
  edges: [{ source: 'code', target: 'out', label: 'run' }],
}
