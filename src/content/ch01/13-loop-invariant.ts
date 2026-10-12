import type { Section } from '../types'

export const loopInvariant: Section = {
  id: 'loop-invariant',
  title: 'The loop invariant',
  scene: 'invariant',
  focus: 'statement',
  slide: `## The loop invariant

A trace shows one run. An **invariant** says what every run has established.

### For the baseline
- At the top of each iteration: **the target is not in \`parcels[0:i]\`**
- The prefix before \`i\` has been inspected and rejected
- Everything from \`i\` onward is still unknown

### Choosing an invariant
- It must hold on the **first** arrival at the loop
- It must survive one more iteration
- It must, together with the exit condition, give the postcondition

### Not every true statement helps
- "\`i\` is at least 0" is invariant, but proves nothing about the answer
- A useful invariant talks about what the **postcondition** needs`,
  narration:
    "A trace tells us what happened in one run. To say something about every run, we need a different tool, called a loop invariant. An invariant is a statement that is true every time execution reaches a chosen point in a loop, here the top of each iteration. For our baseline, the invariant is this: the target is not in the part of the list before index i. On the left the search is looking for P four-fifty-eight and has reached i equals two. The first two parcels have been inspected and rejected, which is exactly what the invariant says. Parcels two and three are still unknown, and the invariant says nothing about them. Choosing a good invariant is the creative part. It has to be true the very first time the loop is reached. It has to stay true after one more iteration. And when the loop stops, the invariant together with the reason for stopping has to give us the postcondition. The next section checks all three for this one. Not every true statement is a useful invariant. The statement that i is at least zero is true in every iteration, but it says nothing about the answer. A useful invariant talks about exactly what the postcondition needs.",
}
