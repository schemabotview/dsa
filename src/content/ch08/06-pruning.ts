import type { Section } from '../types'

export const pruning: Section = {
  id: 'pruning-and-branch-and-bound',
  title: 'Constraint pruning, bounds, and branch-and-bound',
  scene: 'branch-bound',
  focus: 'unsound',
  slide: `## Pruning and branch-and-bound

Skip subtrees that **cannot** contain an answer, or a better one.

### Two kinds of sound prune
- **Feasibility**: a choice that breaks a constraint ends its branch
- **Bound**: if load + all remaining parcels ≤ best so far, stop
- Same best load, 8700; nodes visited fall from 98 to 38

### Incumbent versus optimum
- The **incumbent** is the best feasible plan found so far
- It becomes the optimum only when the search **finishes**

### An unsound prune
- "Once a parcel fits, never skip it" returns a feasible 8300
- The optimum, 8700, was in a pruned subtree: every prune needs a proof`,
  narration:
    "Exhaustive search is only practical if large parts of the state-space tree can be skipped. Skipping a subtree is called pruning, and a prune is sound only if it can never throw away an answer we need. There are two classic kinds of sound prune. The first is feasibility. If a choice already breaks a constraint, such as exceeding a van's capacity, no completion of that branch can be valid, so the branch ends immediately. The second is a bound, used when searching for the best answer, not just any answer. The search keeps the best plan found so far, called the incumbent. At each node, it computes an optimistic estimate of the best this branch could possibly achieve. Here, that is the current load plus every remaining parcel. If even that optimistic total cannot beat the incumbent, the whole subtree is pruned. This is branch and bound. The script searches for the heaviest load that fits in nine thousand grams. Without pruning it visits ninety-eight nodes. With the bound, it visits thirty-eight, and finds the same best load, eight thousand seven hundred. Notice the distinction between the incumbent and the optimum. At any moment during the search, the incumbent is just the best found so far. It is only proved optimal when the search finishes, because only then has every unpruned branch been examined. The lower half of the board shows what happens when a prune is not sound. This search decides that once a parcel fits, it will never try leaving it out. That sounds reasonable, and every plan it returns is feasible. But it returns eight thousand three hundred, while the true optimum, computed by checking all sixty-four subsets, is eight thousand seven hundred. The optimal plan was inside a subtree the rule discarded. Every prune therefore needs its own small proof.",
}
