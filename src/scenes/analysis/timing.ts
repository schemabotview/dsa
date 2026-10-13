import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/analysis/timing.py?raw'
import measured from '../../../examples/analysis/timing.measured?raw'

// §2.8 — a timing experiment and ONE recorded run of it. Timings are not reproducible, so this card
// is a `.measured` file (never diffed by `npm run examples`) and is labelled as a single run.
export const timing: Scene = {
  id: 'timing',
  title: 'Measuring, and what it cannot prove',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'timing.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'one recorded run · CPython 3.14.6', label: measured.trimEnd(), pattern: 'warn' },
  ],
  edges: [{ source: 'code', target: 'out', label: 'run once' }],
}
