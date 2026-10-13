import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/sequences/deque_demo.py?raw'
import out from '../../../examples/sequences/deque_demo.out?raw'

// §3.7 — collections.deque: both ends O(1), plus maxlen as a bounded history.
export const deque: Scene = {
  id: 'deque',
  title: 'Operations at both ends',
  flow: 'TB',
  nodes: [
    {
      id: 'ends',
      label: 'Both ends are cheap',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'front', label: 'Front', sub: 'appendleft, popleft', pattern: 'network', icon: 'dooropen' },
        { id: 'middle', label: 'Middle', sub: 'd[i] is O(n) near the centre', pattern: 'warn', icon: 'ruler' },
        { id: 'back', label: 'Back', sub: 'append, pop', pattern: 'network', icon: 'dooropen' },
      ],
    },
    { id: 'code', kind: 'code', filename: 'deque_demo.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
  ],
  edges: [
    { source: 'ends', target: 'code' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
