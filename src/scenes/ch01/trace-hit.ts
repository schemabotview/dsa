import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch01/trace_search.py?raw'
import out from '../../../examples/ch01/trace_search.out?raw'

// §1.4 — the same loop, instrumented to print its own state each iteration.
export const traceHit: Scene = {
  id: 'trace-hit',
  title: 'Tracing a hit',
  flow: 'TB',
  nodes: [
    { id: 'code', kind: 'code', filename: 'trace_search.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd() },
  ],
  edges: [{ source: 'code', target: 'out', label: 'run' }],
}
