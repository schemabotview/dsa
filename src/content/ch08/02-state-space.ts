import type { Section } from '../types'

export const stateSpace: Section = {
  id: 'state-space-trees',
  title: 'State-space trees and candidate generation',
  scene: 'state-space',
  focus: 'tree',
  slide: `## State-space trees

Exhaustive search explores **every** combination of choices, systematically.

### The tree of decisions
- Each level fixes one decision: which van carries parcel k
- Each node is a **partial** plan; each leaf a **complete** one
- Two choices per level, \`n\` levels: 2ⁿ leaves

### Candidate generation
- At each node, list the possible next choices
- Recurse on each: the recursion **is** a depth-first walk of the tree
- The tree is never stored: only the current path exists at once

### Why it matters
- Every search in this chapter is a walk of some state-space tree
- Its size is the cost; pruning removes subtrees`,
  narration:
    "Some problems have no clever shortcut, at least none we know of, and the only reliable method is to consider every combination of choices. The delivery planner meets one immediately: assigning parcels to vans so that no van is overloaded. To search every combination without missing any or repeating any, we organise the choices as a tree, called a state-space tree. Each level of the tree fixes one decision. At the top, nothing is decided. The first level decides which van carries parcel one, the second level decides parcel two, and so on. Each internal node is a partial plan, and each leaf is a complete plan. The board draws the tree for two parcels and two vans: two choices for the first parcel, two for the second, four leaves. In general, with two choices at each of n levels, there are two to the n leaves. The script generates the tree for three parcels and prints its eight leaves. The step at each node, listing the possible next choices, is called candidate generation. The search then recurses on each candidate in turn. So the recursion is a depth-first walk of the state-space tree: it goes down one path to a leaf, backs up, and tries the next choice. One important point: the tree is never actually stored. At any moment, only the current path from the root exists, held in the call stack and in the chosen list, so the memory needed is proportional to the depth, not to the number of leaves. Every search in this chapter is a walk of some state-space tree, and its size is its cost. The remaining sections are about walking it correctly, enumerating it without duplicates, and cutting away subtrees that cannot contain an answer.",
}
