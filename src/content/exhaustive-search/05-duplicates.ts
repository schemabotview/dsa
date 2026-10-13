import type { Section } from '../types'

export const duplicates: Section = {
  id: 'canonical-enumeration',
  title: 'Duplicate handling and canonical enumeration',
  scene: 'duplicates',
  focus: 'rule',
  slide: `## Canonical enumeration

Equal items make naive enumeration produce the same answer **many** times.

### The problem
- Stops N, N, E: two stops at the same depot
- Naive permutation treats them as different: 6 results, each route **twice**
- With many repeats the waste grows: n! / (repeat counts)! distinct routes

### Generate each answer once
- **Sort** the items so equal ones are adjacent
- At each level, **skip** a choice equal to the previous sibling
- Its subtree would be identical, so skipping loses nothing

### Why not deduplicate afterwards?
- A set of results still pays for every duplicate subtree
- Canonical rules prune **before** the work is done`,
  narration:
    "Enumeration has a trap when items repeat. Suppose a route must visit three stops, two of them at the North depot. Naive permutation treats the two North stops as different items, so every route appears twice, once with each North stop first. The output shows six results for only three distinct routes. With more repeats the waste grows quickly. If one value appears k times, every distinct arrangement is generated k factorial times over. A tempting fix is to collect the results in a set. That does remove the duplicates from the answer, but it does not remove the work. The search still walks every duplicate subtree in full before throwing its results away. The better fix is to generate each distinct answer exactly once, which is called canonical enumeration. The rule is short. First, sort the items, so that equal items are next to each other. Then, at each level of the recursion, skip any choice whose value equals the previous choice at that same level. The reasoning is that two equal choices at the same level lead to identical subtrees: everything below them is the same set of remaining items. So exploring the first copy covers both, and skipping the second loses nothing. The output shows the canonical version producing each of the three routes once. The same idea applies to subsets and combinations with repeated items, and it generalises: whenever two branches of a search are equivalent, by symmetry or by equal values, choose one canonical representative and skip the rest. For example, when assigning parcels to two identical vans, putting the first parcel in van A or van B gives mirror-image subtrees, so it is enough to place it in van A. Canonical rules are a kind of pruning, and like all pruning, they must be proved not to discard any distinct answer.",
}
