import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch13/rolling.py?raw'
import out from '../../../examples/ch13/rolling.out?raw'

// §13.5 — Rabin–Karp with a deliberately tiny modulus: verified, it finds the three real PORTs and
// reports four false alarms; trusting the hash alone reports seven "matches".
export const rolling: Scene = {
  id: 'rolling',
  title: 'Rolling hashes',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'rolling.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), pattern: 'warn' },
  ],
  edges: [{ source: 'code', target: 'out', label: 'run' }],
}
