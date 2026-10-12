import type { Section } from '../types'

export const greedyChoices: Section = {
  id: 'greedy-choices',
  title: 'Feasibility, optimisation objectives, and greedy choices',
  scene: 'greedy-choice',
  focus: 'parts',
  slide: `## Greedy choices

Build an answer one step at a time, always taking the choice that looks best **now**.

### The parts of a greedy algorithm
- **Feasibility**: what counts as a valid answer
- **Objective**: what makes one valid answer better than another
- **Greedy rule**: the local choice, made once and never undone

### Why it is attractive
- Usually one sort and one pass: O(n log n)
- No search tree, no backtracking

### Why it needs proof
- Largest stamp first: 18 = 10 + 5 + 2 + 1, optimal for {1, 2, 5, 10}
- For {1, 3, 4} and 6 it gives 4 + 1 + 1; the best is 3 + 3
- Same rule, different input: correctness depends on the **problem**`,
  narration:
    "Chapter eight searched every combination, and pruning helped only so much. Greedy algorithms take the opposite approach. They build an answer one step at a time, and at each step they take whichever choice looks best right now, never reconsidering it. Every greedy algorithm has three parts. Feasibility defines what counts as a valid answer. The objective defines what makes one valid answer better than another. And the greedy rule is the local choice made at each step. The appeal is obvious. A greedy algorithm usually needs one sort and one pass, n log n in total, with no search tree, no backtracking, and very little code. The danger is just as obvious once stated. A locally best choice can rule out a globally better answer, and because the choice is never undone, the algorithm cannot recover. So every greedy algorithm needs a proof, and the script shows why. The task is to make up a postage amount with as few stamps as possible, using the rule: always take the largest stamp that still fits. For stamps of one, two, five and ten, an amount of eighteen becomes ten, five, two and one, four stamps, which brute force confirms is optimal. Now change the stamp set to one, three and four, and the amount to six. The same rule takes four first, then has to add one and one, three stamps. But three plus three uses only two. Nothing about the rule changed. What changed is the problem instance, and with it, whether the local choice is safe. That is the central lesson of this chapter. Greedy correctness is a property of a particular problem, never of the greedy idea itself, and the next section shows the standard way to prove it.",
}
