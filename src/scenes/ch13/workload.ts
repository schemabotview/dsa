import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch13/workload.py?raw'
import measured from '../../../examples/ch13/workload.measured?raw'

// §13.7 — choosing a text tool by workload; and one recorded timing run showing that a teaching
// algorithm in Python is not how the built-in search is implemented.
export const workload: Scene = {
  id: 'workload',
  title: 'Choosing a text structure',
  flow: 'TB',
  nodes: [
    {
      id: 'choice',
      kind: 'table',
      label: 'Which tool for which query?',
      headers: ['query', 'tool', 'preprocessing', 'per query'],
      values: [
        ['one search, short text', 'str.find / in', 'none', 'fast in practice'],
        ['guaranteed linear', 'KMP', 'O(m)', 'O(n)'],
        ['many patterns, one text', 'suffix array', 'O(n log n)+', 'O(m log n)'],
        ['prefix of a word set', 'trie', 'O(total letters)', 'O(prefix + output)'],
        ['near-duplicate blocks', 'rolling hash', 'O(m)', 'O(n) expected'],
      ],
    },
    {
      id: 'run',
      label: 'One recorded timing run',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'code', kind: 'code', filename: 'workload.py', label: code.trimEnd(), hug: true },
        { id: 'out', kind: 'code', filename: 'one recorded run', label: measured.trimEnd(), hug: true, pattern: 'warn' },
      ],
    },
  ],
  edges: [{ source: 'choice', target: 'run' }],
}
