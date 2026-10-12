import type { Scene } from '@graphlearning/flow'
import out from '../../../examples/ch04/lower_bound.out?raw'
import tp from '../../../examples/ch04/two_pointers.py?raw'
import tpOut from '../../../examples/ch04/two_pointers.out?raw'

// §4.8 — a comparison sort on three items is a decision tree: each internal node is one comparison,
// each leaf one of the 3! = 6 orders, so some path needs ⌈log2 6⌉ = 3 comparisons. Below it, two
// pointers: what order buys beyond sorting, and the same rule failing on unsorted input.
export const decisionTree: Scene = {
  id: 'decision-tree',
  title: 'The comparison lower bound',
  flow: 'TB',
  nodes: [
    {
      id: 'tree',
      label: 'Sorting a, b, c by comparisons: 6 leaves, depth 3',
      pattern: 'group',
      flow: 'TB',
      children: [
        { id: 'q1', label: 'a < b ?', pattern: 'service', icon: 'scale' },
        { id: 'q2', label: 'b < c ?', sub: 'a < b', pattern: 'service', icon: 'scale' },
        { id: 'q3', label: 'a < c ?', sub: 'b < a', pattern: 'service', icon: 'scale' },
        { id: 'l1', label: 'a b c', pattern: 'external', icon: 'sortarrows' },
        { id: 'q4', label: 'a < c ?', sub: 'a < b, c < b', pattern: 'service', icon: 'scale' },
        { id: 'l2', label: 'b a c', pattern: 'external', icon: 'sortarrows' },
        { id: 'q5', label: 'b < c ?', sub: 'b < a, c < a', pattern: 'service', icon: 'scale' },
        { id: 'l3', label: 'a c b', pattern: 'external', icon: 'sortarrows' },
        { id: 'l4', label: 'c a b', pattern: 'external', icon: 'sortarrows' },
        { id: 'l5', label: 'b c a', pattern: 'external', icon: 'sortarrows' },
        { id: 'l6', label: 'c b a', pattern: 'external', icon: 'sortarrows' },
      ],
      edges: [
        { source: 'q1', target: 'q2', label: 'yes' },
        { source: 'q1', target: 'q3', label: 'no' },
        { source: 'q2', target: 'l1', label: 'yes' },
        { source: 'q2', target: 'q4', label: 'no' },
        { source: 'q3', target: 'l2', label: 'yes' },
        { source: 'q3', target: 'q5', label: 'no' },
        { source: 'q4', target: 'l3', label: 'yes' },
        { source: 'q4', target: 'l4', label: 'no' },
        { source: 'q5', target: 'l5', label: 'yes' },
        { source: 'q5', target: 'l6', label: 'no' },
      ],
    },
    {
      id: 'beyond',
      label: 'The bound, and what order buys',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'out', kind: 'code', filename: 'lower_bound.py output', label: out.trimEnd(), hug: true },
        { id: 'tp', kind: 'code', filename: 'two_pointers.py', label: tp.trimEnd(), hug: true },
        { id: 'tp-out', kind: 'code', filename: 'output', label: tpOut.trimEnd(), hug: true, pattern: 'warn' },
      ],
    },
  ],
  edges: [{ source: 'tree', target: 'beyond', label: 'n! leaves need depth ⌈log2 n!⌉' }],
}
