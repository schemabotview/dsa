import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/strings/units.py?raw'
import out from '../../../examples/strings/units.out?raw'

// §13.1 — two strings that display identically and compare unequal: what a "character" is depends on
// the unit (code point, byte, grapheme), and normalisation belongs in the contract.
export const units: Scene = {
  id: 'units',
  title: 'Symbols and units of comparison',
  flow: 'TB',
  nodes: [
    {
      id: 'levels',
      kind: 'table',
      label: '"Café", three ways to count',
      headers: ['unit', 'precomposed é', 'e + accent'],
      values: [
        ['what you see', '4 letters', '4 letters'],
        ['code points: len()', '4', '5'],
        ['UTF-8 bytes', '5', '6'],
      ],
    },
    { id: 'code', kind: 'code', filename: 'units.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), pattern: 'warn' },
  ],
  edges: [
    { source: 'levels', target: 'code' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
