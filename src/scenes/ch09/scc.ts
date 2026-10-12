import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch09/scc.py?raw'
import out from '../../../examples/ch09/scc_demo.out?raw'

// §9.7 — one-way streets grouped into strongly connected components (each group: every stop reaches
// every other), and the condensation between groups, which is always acyclic.
export const scc: Scene = {
  id: 'scc',
  title: 'Strongly connected components',
  flow: 'TB',
  nodes: [
    {
      id: 'groups',
      label: 'Components, and the DAG between them',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'abc', label: 'A · B · C', sub: 'A→B→C→A', pattern: 'service', icon: 'repeat' },
        { id: 'de', label: 'D · E', sub: 'D→E→D', pattern: 'network', icon: 'repeat' },
        { id: 'f', label: 'F', sub: 'alone', pattern: 'storage', icon: 'box' },
      ],
      edges: [
        { source: 'abc', target: 'de', label: 'C→D' },
        { source: 'de', target: 'f', label: 'E→F' },
      ],
    },
    { id: 'code', kind: 'code', filename: 'scc.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'scc_demo.py output', label: out.trimEnd() },
  ],
  edges: [
    { source: 'groups', target: 'code' },
    { source: 'code', target: 'out', label: 'run scc_demo.py' },
  ],
}
