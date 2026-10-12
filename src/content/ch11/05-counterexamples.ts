import type { Section } from '../types'

export const counterexamples: Section = {
  id: 'greedy-counterexamples',
  title: 'Counterexamples, weighted objectives, and reformulation',
  scene: 'weighted-fail',
  focus: 'timeline',
  slide: `## When greedy fails

Change the objective slightly, and a proven rule can break.

### Weighted interval scheduling
- Each slot now carries a **value**: the parcels it moves
- Earliest finish keeps three short slots: value **6**
- One long slot alone is worth **10**

### Why the proof no longer applies
- The exchange kept the **count**; it cannot keep the **value**
- Swapping in the earliest-finishing slot may lose a valuable one

### What to do instead
- A proof for one formulation says nothing about another
- Look for a counterexample first: small, deliberate inputs
- Weighted scheduling and 0/1 knapsack need richer **state**: Chapter 12`,
  narration:
    "A proof of a greedy rule is a proof for one precise formulation of a problem. Change the formulation even slightly, and the rule can fail. The cleanest example is to give interval scheduling weights. Each slot at the dock now carries a value, the number of parcels it moves, and the goal is the greatest total value rather than the greatest number of slots. The board shows four slots. Three short ones are each worth two, and one long one, overlapping all of them, is worth ten. Earliest finish behaves exactly as before. It accepts the three short slots, which are compatible, for a total value of six. But the long slot alone is worth ten, as the brute-force check confirms. It is worth seeing precisely where the proof breaks. The exchange argument swapped the earliest-finishing slot into an optimal schedule and argued that the count did not drop. It never needed to compare values, because every slot counted as one. With values, swapping in the earliest-finishing slot can throw out a slot worth far more, and nothing in the argument prevents that. So the rule was never safe in general. It was safe for the unweighted problem. The practical lessons are these. A proof for one formulation says nothing about another, so whenever an objective or constraint changes, the greedy rule has to be re-justified. Before attempting a proof, look for a counterexample, using small, deliberately constructed inputs that set the rule against itself, as this one does. And when the counterexamples win, the problem usually needs an approach that keeps more information than a single greedy choice. Weighted interval scheduling and the zero-one knapsack problem are both solved exactly by dynamic programming, the subject of the next chapter.",
}
