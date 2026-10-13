import type { Section } from '../types'

export const recurrences: Section = {
  id: 'recurrences',
  title: 'Recursion, recurrences, and recursion-tree reasoning',
  scene: 'recursion-tree',
  focus: 'f2b',
  slide: `## Recurrences

A recursive function's cost is defined **in terms of itself**: a recurrence.

### Halving: one call on half the input
- \`T(n) = T(n/2) + 1\`, \`T(1) = 1\`: a path of \`log₂ n + 1\` calls
- 25 needs only 5 calls

### Branching: two calls on slightly smaller inputs
- \`T(n) = T(n − 1) + T(n − 2) + 1\`: a **tree** of calls
- Each level can double; \`fib(25)\` makes 242,785 calls
- The same subproblem, such as \`fib(2)\`, is solved **again and again**

### Recursion-tree reasoning
- Draw the calls; write the work at each node, excluding its children
- Total each level, then add the levels
- Halving: every level costs 1, \`log n\` levels; branching: the last level dominates`,
  narration:
    "When a function calls itself, its cost is naturally defined in terms of itself. Such a definition is called a recurrence, and the most reliable way to solve one is to draw the calls it makes. Consider two shapes of recursion. The first makes one call on half of its input, like binary search. Its cost is T of n equals T of n over two, plus one, with T of one equal to one. Each call does constant work and passes half the input down, so the calls form a single path, of length about log base two of n, plus one. In the output, an input of twenty-five needs only five calls. The second shape makes two calls on slightly smaller inputs, like the naive Fibonacci function. Its recurrence is T of n equals T of n minus one, plus T of n minus two, plus one. Now the calls form a tree, drawn on the board for an input of four. Each level of that tree can hold up to twice as many calls as the level above, so the total grows exponentially. For an input of twenty-five, the program makes two hundred and forty-two thousand, seven hundred and eighty-five calls. The tree also shows why. The call for two, highlighted, appears twice already at this small size, and its whole subtree is recomputed each time. That repetition is the waste that dynamic programming will remove, by solving each subproblem once and remembering the answer. The general method is called recursion-tree reasoning. Draw the tree of calls. Write the work done at each node, not counting its children. Total the work level by level. Then add up the levels. For the halving recursion, every level costs one, and there are log n levels. For the branching one, the levels grow geometrically, and the last level dominates.",
}
