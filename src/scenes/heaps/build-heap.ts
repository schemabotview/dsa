import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/heaps/build_heap.py?raw'
import out from '../../../examples/heaps/build_heap.out?raw'

// §7.4 — why bottom-up construction is linear: most nodes are near the bottom, where sifting down is
// cheap. The table charges each level its real height; the code counts both strategies.
export const buildHeap: Scene = {
  id: 'build-heap',
  title: 'Building a heap in linear time',
  flow: 'TB',
  nodes: [
    {
      id: 'levels',
      kind: 'table',
      label: 'Sift-down work by height, n = 1023',
      sub: 'nodes × height, summed: below n',
      headers: ['height h', 'nodes', 'max swaps each', 'total'],
      values: [
        ['0 (leaves)', '512', '0', '0'],
        ['1', '256', '1', '256'],
        ['2', '128', '2', '256'],
        ['3', '64', '3', '192'],
        ['…', '…', '…', '…'],
        ['9 (root)', '1', '9', '9'],
      ],
    },
    { id: 'code', kind: 'code', filename: 'build_heap.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), pattern: 'external' },
  ],
  edges: [
    { source: 'levels', target: 'code' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
