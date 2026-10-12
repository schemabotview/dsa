import type { Section } from '../types'

export const backtracking: Section = {
  id: 'backtracking',
  title: 'Backtracking, mutation, undo, and copied state',
  scene: 'backtracking',
  focus: 'code',
  slide: `## Backtracking

Walk the tree with **one** mutable state: change it going down, undo it coming back.

### The pattern
- **Choose**: add the parcel's weight to a van and record the van
- **Explore**: recurse to the next parcel
- **Undo**: remove the weight and the record, exactly reversing the choice
- Skip a van that would exceed 6000 g: an infeasible branch is never entered

### Mutation or copies
- Undo version: one \`loads\` list and one \`plan\` list for the whole search
- Copying version: two new lists per step, 28 built for 4 plans
- Copy only what must survive: \`plan[:]\` at each leaf

### The invariant
- After each recursive call returns, the state is exactly as before it`,
  narration:
    "A state-space search needs to remember the current partial plan as it walks the tree. The standard technique, backtracking, keeps a single mutable state for the whole search, and changes it as it goes. The pattern has three steps at every node. Choose: apply one decision to the state, here adding a parcel's weight to one van's load and recording which van. Explore: recurse to decide the next parcel. Undo: reverse the choice exactly, removing the weight and the record, so the next candidate starts from the same state. The code also checks feasibility before choosing. If adding the parcel would push a van over six thousand grams, that branch is never entered at all. Over four parcels and two vans, the search finds four feasible plans. The alternative is to copy the state at every step, passing a fresh list to each recursive call. That is simpler to get right, because no call can damage another's state, but it allocates new lists constantly. The copying version on the board builds twenty-eight lists to find the same four plans. For deep searches with large states, copying can dominate the running time. There is one place where copying is required: a plan that must outlive the search. When a leaf is reached, the current plan is copied into the results, because the shared list will keep changing afterwards. Storing the list itself would leave the results full of references to one list, which by the end of the search is empty. The aliasing lesson again. Backtracking's correctness rests on an invariant: after each recursive call returns, the state is exactly as it was before the call. Every choose must be matched by an undo, in reverse order, including on every path that returns early.",
}
