import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch02/space.py?raw'
import out from '../../../examples/ch02/space.out?raw'

// §2.7 — two recursive sums with the same answer and very different space: slices copy Θ(n²)
// elements in total, both keep n frames on the call stack, and Python caps that depth.
export const space: Scene = {
  id: 'space',
  title: 'Hidden copies and stack depth',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'space.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), pattern: 'warn' },
  ],
  edges: [{ source: 'code', target: 'out', label: 'run' }],
}
