import type { Scene } from '@graphlearning/flow'
import slotsCode from '../../../examples/ch12/slots.py?raw'
import code from '../../../examples/ch12/recurrence.py?raw'
import out from '../../../examples/ch12/recurrence.out?raw'

// §12.2 — Chapter 11's weighted dock slots, extended to seven: the data and p(i), then the state and
// recurrence written as a comment beside the printed p values.
export const recurrence: Scene = {
  id: 'recurrence',
  title: 'State and recurrence',
  flow: 'TB',
  nodes: [
    { id: 'slots', kind: 'code', filename: 'slots.py', label: slotsCode.trimEnd() },
    {
      id: 'row',
      label: 'The state, the recurrence, and p(i)',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'code', kind: 'code', filename: 'recurrence.py', label: code.trimEnd(), hug: true },
        { id: 'out', kind: 'code', filename: 'output', label: out.trimEnd(), hug: true },
      ],
    },
  ],
  edges: [{ source: 'slots', target: 'row' }],
}
