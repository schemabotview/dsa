import type { Section } from '../types'

export const invariantProof: Section = {
  id: 'invariant-proof',
  title: 'Proving the invariant',
  scene: 'invariant-proof',
  focus: 'maintain',
  slide: `## Proving the invariant

Three checks, which together are an argument by **induction** on \`i\`.

### The checks
- **Initialisation**: at \`i = 0\` the prefix is empty, so it holds trivially
- **Maintenance**: if the body does not return at \`i\`, then \`parcels[i]\` is not a match either, so it holds for \`i + 1\`
- **Exit**: the loop ends at \`i = n\`, so no index in the list matches

### The conclusion
- The final \`return None\` meets the postcondition
- An early \`return i\` is the **least** match, since nothing before it matched
- The three checks used only the **code** and the **precondition**
- The same pattern proves every loop in this course`,
  narration:
    "Now we check the invariant, and the three checks together form an argument by induction on i. Initialisation first. When the loop starts, i is zero, and the part of the list before index zero is empty. An empty prefix cannot contain the target, so the invariant holds trivially. This is the base case. Next, maintenance. Suppose the invariant holds at the top of an iteration with some value of i. If the body does not return, then the parcel at index i did not match. So the prefix up to and including i still has no match, and the invariant holds for i plus one. This is the inductive step. Finally, exit. If the loop finishes without returning, it stopped because i reached n, the length of the list. The invariant then says that no index from zero to n minus one matches, so returning None is exactly what the postcondition requires. The same reasoning covers the early return. When the function returns i, the invariant says nothing before i matched, so i is the least matching index. Notice that the three checks used nothing but the code and the precondition. The same pattern will prove every loop in this course.",
}
