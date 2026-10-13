import type { Section } from '../types'

export const invariantsAndTermination: Section = {
  id: 'invariants-and-termination',
  title: 'Loop invariants, induction, and termination',
  scene: 'invariant',
  focus: 'statement',
  slide: `## Invariants and termination

An **invariant** holds every time the loop reaches a chosen point.

### For the baseline: target not in \`parcels[0:i]\`
- **Initialisation**: at \`i = 0\` the prefix is empty
- **Maintenance**: no return at \`i\`, so no match up to \`i + 1\`
- **Exit**: at \`i = n\` no index matches, so \`None\` is correct
- An early \`return i\` is the **least** match: nothing before it matched

### Termination is a separate proof
- A whole number that falls every iteration and never goes below 0
- Here \`n − i\`: at most \`n\` iterations, guaranteed by \`range\`
- A hand-written \`while\` needs it: one missing increment loops forever
- Stopping is not speed: how fast is Chapter 2`,
  narration:
    "A trace tells us what happened in one run. To say something about every run, we need a loop invariant: a statement that is true every time execution reaches a chosen point, here the top of each iteration. For our baseline the invariant is: the target is not in the part of the list before index i. The board shows a search for P four-fifty-eight at i equals two. The first two parcels have been inspected and rejected, which is exactly what the invariant says, and the rest are still unknown. An invariant is only useful if it can be checked, and the three checks together form an argument by induction on i. Initialisation is the base case. When the loop starts, i is zero, the prefix is empty, and an empty prefix cannot contain the target. Maintenance is the inductive step. Suppose the invariant holds at some i. If the body does not return, the parcel at i did not match, so there is still no match up to and including i, and the invariant holds for i plus one. Exit is where we collect. If the loop finishes without returning, i has reached n, the length of the list, so no index matches, and returning None is exactly what the postcondition requires. The same reasoning covers the early return: when the function returns i, nothing before i matched, so i is the least matching index. There is still a gap. The invariant proves the answer is right if the loop stops. Termination needs its own proof, and the standard technique is a decreasing measure: a whole number that falls on every iteration and can never drop below zero. Here it is n minus i, the parcels not yet inspected. It starts at n and falls by one each time, so the loop runs at most n times. The range object makes this nearly automatic. A hand-written while loop is where it really matters, since one missing increment turns a correct loop into an endless one. Keep one distinction: proving the loop stops says nothing about how fast it stops. That is the next chapter's question.",
}
