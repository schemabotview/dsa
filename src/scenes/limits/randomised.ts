import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/limits/randomised.py?raw'
import out from '../../../examples/limits/randomised.out?raw'

// §14.5 — a randomised fingerprint check with one-sided error: "different" is always right, "same" is wrong with probability at most n/P per trial.
export const randomised: Scene = {
  id: 'randomised',
  title: 'Randomisation and failure probability',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'randomised.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), pattern: 'network' },
  ],
  edges: [{ source: 'code', target: 'out', label: 'run' }],
}
