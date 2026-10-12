import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch01/find_parcel.py?raw'
import out from '../../../examples/ch01/find_parcel.out?raw'

// §1.3 — the Python baseline and the output it printed. Both cards import the example files
// verbatim, and `npm run examples` re-runs the script and diffs it against the .out file.
export const pythonBaseline: Scene = {
  id: 'python-baseline',
  title: 'The Python baseline',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'find_parcel.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
  ],
  edges: [{ source: 'code', target: 'out', label: 'run' }],
}
