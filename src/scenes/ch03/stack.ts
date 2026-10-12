import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch03/balanced.py?raw'
import out from '../../../examples/ch03/balanced.out?raw'

// §3.5 — balanced delimiters: the stack's state midway through "{[()()]}", then the checker and
// what it reports, including where an error was found.
export const stack: Scene = {
  id: 'stack',
  title: 'A stack checks nesting',
  flow: 'TB',
  nodes: [
    {
      id: 'state',
      kind: 'memory',
      label: 'stack after reading "{[("',
      slots: [
        { at: 'top', name: "('(', 2)", note: 'closes first' },
        { at: '', name: "('[', 1)" },
        { at: 'bottom', name: "('{', 0)", note: 'closes last' },
      ],
    },
    { id: 'code', kind: 'code', filename: 'balanced.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
  ],
  edges: [
    { source: 'state', target: 'code' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
