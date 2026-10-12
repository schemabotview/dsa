import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch14/certificate.py?raw'
import out from '../../../examples/ch14/certificate.out?raw'

// §14.3 — verifying a certificate is fast, finding one is (as far as anyone knows) not; and the four
// class names as nested sets, with the open question stated as open.
export const classes: Scene = {
  id: 'classes',
  title: 'P, NP, NP-hard, NP-complete',
  flow: 'TB',
  nodes: [
    {
      id: 'names',
      kind: 'table',
      label: 'The class names',
      headers: ['class', 'meaning'],
      values: [
        ['P', 'decision problems solvable in polynomial time'],
        ['NP', 'a yes-answer has a certificate checkable in polynomial time'],
        ['NP-hard', 'every NP problem reduces to it'],
        ['NP-complete', 'in NP and NP-hard: subset sum, partition'],
        ['P = NP?', 'open: unresolved'],
      ],
    },
    { id: 'code', kind: 'code', filename: 'certificate.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
  ],
  edges: [
    { source: 'names', target: 'code' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
