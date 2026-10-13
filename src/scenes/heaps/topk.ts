import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/heaps/topk.py?raw'
import out from '../../../examples/heaps/topk.out?raw'

// §7.6 — heaps as a working tool: the k heaviest from one pass with a size-k heap, and a k-way merge
// of per-depot sorted lists.
export const topk: Scene = {
  id: 'topk',
  title: 'Top k and multiway merge',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'topk.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
  ],
  edges: [{ source: 'code', target: 'out', label: 'run' }],
}
