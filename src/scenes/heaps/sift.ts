import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/heaps/minheap.py?raw'
import out from '../../../examples/heaps/heap_demo.out?raw'

// §7.3 — push appends and sifts up; pop moves the last item to the root and sifts down. The demo
// prints the array after each push: watch 1 rise to the root.
export const sift: Scene = {
  id: 'sift',
  title: 'Sift up, sift down',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'minheap.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'heap_demo.py output', label: out.trimEnd() },
  ],
  edges: [{ source: 'code', target: 'out', label: 'run heap_demo.py' }],
}
