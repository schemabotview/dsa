import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch04/merge_sort.py?raw'
import out from '../../../examples/ch04/merge_sort.out?raw'

// §4.4 — merge sort printing every merge, indented by recursion depth: three levels of merging for
// eight items, each level Θ(n) work.
export const mergeSort: Scene = {
  id: 'merge-sort',
  title: 'Divide, sort, merge',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'merge_sort.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
  ],
  edges: [{ source: 'code', target: 'out', label: 'run' }],
}
