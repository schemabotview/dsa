import type { Section } from '../types'

export const missingAndDuplicateIds: Section = {
  id: 'missing-and-duplicate-ids',
  title: 'Missing and duplicate identifiers',
  scene: 'duplicate-policies',
  focus: 'policies',
  slide: `## Missing and duplicate identifiers

Before writing code, decide what the awkward inputs **should** return.

### Three reasonable contracts
- **First match**: an index, or \`None\` when absent
- **All matches**: a list of indices, empty when absent
- **Unique or error**: raise unless exactly one record matches

### Choosing one
- The data's guarantees: are identifiers unique by design?
- What the caller does next with the answer
- Each choice changes the algorithm **and** its cost

### This chapter's choice
- First match, \`None\` when absent
- It can stop at the first hit, so it never inspects more parcels than it must`,
  narration:
    "The awkward inputs are where specifications earn their keep. Suppose two records share the identifier P two-twenty-one, or the target is not in the list at all. What should the lookup return? There is no single right answer, which is exactly why it has to be decided before any code is written. One contract returns the first matching index, and None when nothing matches. Another returns every matching index, which is an empty list when nothing matches. A third insists that identifiers are unique and raises an error otherwise. All three are reasonable. The choice depends on what the data actually guarantees, and on what the caller is going to do with the answer. It also changes the algorithm. The first-match version can stop at the first hit. The all-matches version must always inspect the whole list. The unique version must keep looking even after a hit, to be sure there is no second one. So a decision that looks like a detail of the interface already determines how much work the function does. In this chapter we use first match, with None for a missing target.",
}
