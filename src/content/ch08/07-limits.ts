import type { Section } from '../types'

export const limits: Section = {
  id: 'depth-limits-and-growth',
  title: 'Explicit stacks, depth limits, and exponential growth',
  scene: 'explicit-stack',
  focus: 'out',
  slide: `## Depth limits and growth

Two separate limits: how **deep** the search goes, and how **many** nodes it visits.

### Depth: the call stack
- CPython's recursion limit is 1000 frames by default
- An explicit stack of pending states has no such limit: depth 5000
- Same search, same order: the stack holds what calls would hold

### Breadth: the size of the tree
- 2²⁰ = 1,048,576 leaves runs in about a second
- 2⁴⁰ is a million times more; 2⁶⁰ a million times more again
- No stack, loop or language removes exponential growth

### What actually helps
- Pruning, canonical rules, and a better formulation: Chapters 11–12`,
  narration:
    "An exhaustive search runs into two separate limits, and it is important not to confuse them. The first is depth: how many decisions deep the search goes. In a recursive search, each level holds a frame on the call stack, and CPython stops at a recursion limit of one thousand frames by default. A search that must make five thousand decisions in sequence fails with a recursion error, regardless of how fast the computer is. The fix for depth is mechanical. Replace the recursion with a loop and an explicit stack of pending states. The loop pops a state, processes it, and pushes the states that would have been recursive calls. It explores the tree in the same order, and the stack holds exactly what the call stack would have held, but it lives in an ordinary list, so it has no recursion limit. The script follows a path five thousand deep this way without any trouble. The second limit is breadth: how many nodes the tree contains. Here no trick helps. The script counts the two to the twenty leaves of a full subset tree, just over a million, which finishes in about a second. Two to the forty is a million times more, which would take weeks. Two to the sixty is a million times more again, longer than any computer has existed. Replacing recursion with iteration changes how depth is stored. It does not reduce the number of nodes at all. So when exhaustive search is too slow, the remedies are the ones from this chapter and the next ones: prune sound subtrees, avoid duplicate work with canonical rules, and above all, find a better formulation of the problem. Greedy choices in chapter eleven and dynamic programming in chapter twelve both start from exactly that question.",
}
