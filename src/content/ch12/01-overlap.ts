import type { Section } from '../types'

export const overlap: Section = {
  id: 'overlapping-subproblems',
  title: 'Overlapping subproblems, optimal substructure, and dependency graphs',
  scene: 'overlap',
  focus: 'memo',
  slide: `## Overlapping subproblems

Dynamic programming: solve each **distinct** subproblem once, and reuse it.

### Two conditions
- **Optimal substructure**: an optimal answer is built from optimal answers to subproblems
- **Overlapping subproblems**: the same subproblems recur many times

### The waste, and the fix
- Plain recursion recomputes: \`fib(25)\` makes 242,785 calls
- A memo stores each answer by its input: 26 calls
- The recursion **tree** collapses into a dependency **DAG**: one node per n

### Why greedy was not enough
- Weighted slots, Chapter 11: one local choice loses value
- DP keeps the best answer for **every** subproblem, then chooses`,
  narration:
    "Chapter eleven ended with problems where no single local choice is safe. Dynamic programming handles them by keeping more information: instead of committing to one choice, it computes the best answer to every relevant subproblem, and then chooses among them. Two conditions make this work. The first is optimal substructure: an optimal answer to the whole problem can be built from optimal answers to smaller subproblems. The second is overlapping subproblems: the same smaller subproblems come up again and again, so solving each of them once saves a great deal of work. Chapter two showed the waste that overlap causes. The plain recursive Fibonacci function recomputes the same values over and over, and the script counts two hundred and forty-two thousand, seven hundred and eighty-five calls for fib of twenty-five. Adding a memo, a dictionary from input to answer, here provided by Python's cache decorator, means each distinct value of n is computed once and then looked up. The call count drops to twenty-six. The memory card shows the memo after computing fib of six: one entry per value of n, each depending only on the two below it. That picture is the real idea. Memoisation turns the exponential recursion tree into a small dependency graph with one node per distinct subproblem and edges to the subproblems it needs. That graph is a DAG, because a subproblem only ever depends on smaller ones, and the cost of the whole computation is roughly the number of nodes times the work per node. Every dynamic program in this chapter is built the same way. Define the subproblems, make sure they overlap and combine optimally, and solve each one once. The weighted dock slots that defeated the greedy rule are the first real example, in the next section.",
}
