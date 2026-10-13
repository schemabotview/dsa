import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/strings/kmp.py?raw'
import out from '../../../examples/strings/kmp_demo.out?raw'

// §13.4 — the prefix function of ABABAC as a table (what each entry means), then KMP, which never
// moves backwards in the text: on the naive worst case it takes 1901 steps instead of 90,100.
export const kmp: Scene = {
  id: 'kmp',
  title: 'Prefix functions and KMP',
  flow: 'TB',
  nodes: [
    {
      id: 'row',
      label: 'Precompute the pattern, then scan the text once',
      pattern: 'group',
      flow: 'LR',
      children: [
        {
          id: 'pi',
          kind: 'memory',
          label: 'pi for ABABAC',
          slots: [
            { at: 'A', name: '0' },
            { at: 'AB', name: '0' },
            { at: 'ABA', name: '1', note: 'A is a border' },
            { at: 'ABAB', name: '2', note: 'AB' },
            { at: 'ABABA', name: '3', note: 'ABA' },
            { at: 'ABABAC', name: '0', note: 'no border' },
          ],
        },
        { id: 'code', kind: 'code', filename: 'kmp.py', label: code.trimEnd() },
      ],
    },
    { id: 'out', kind: 'code', filename: 'kmp_demo.py output', label: out.trimEnd(), pattern: 'external' },
  ],
  edges: [{ source: 'row', target: 'out', label: 'run kmp_demo.py' }],
}
