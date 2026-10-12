import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch03/dynamic_array.py?raw'
import out from '../../../examples/ch03/dynamic_array.out?raw'

// §3.2 — a teaching model of a doubling array (not CPython's actual growth policy), counting every
// element copied by a resize. The output shows copies per append staying below 2.
export const dynamicArray: Scene = {
  id: 'dynamic-array',
  title: 'Doubling and amortised cost',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'dynamic_array.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), pattern: 'external' },
  ],
  edges: [{ source: 'code', target: 'out', label: 'run' }],
}
