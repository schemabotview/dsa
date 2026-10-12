import type { Section } from '../types'

export const termination: Section = {
  id: 'termination',
  title: 'Termination',
  scene: 'termination',
  focus: 'variant',
  slide: `## Termination

The invariant proves the answer is right **if** the loop stops. Termination is a separate proof.

### A decreasing measure
- Choose a whole number that **falls** every iteration
- Show it can never fall below zero
- Then the loop runs at most that many times

### For the baseline
- The measure is \`n − i\`: it starts at \`n\` and falls by 1 per iteration
- It cannot go below 0, so there are at most \`n\` iterations
- \`range\` guarantees it here; a hand-written \`while\` loop needs checking

### Stopping is not speed
- At most \`n\` iterations proves the loop **stops**
- How quickly it stops is the next chapter's question`,
  narration:
    "There is a gap in the argument so far. The invariant tells us the answer is right if the loop stops. It says nothing about whether the loop stops. A loop that runs forever never returns a wrong answer, but it never returns a right one either, so termination needs its own proof. The standard technique is a decreasing measure. Find a whole number that gets strictly smaller on every iteration, and show that it can never drop below zero. A whole number cannot keep falling forever without going below zero, so the loop must stop, and the starting value bounds how many iterations it can take. For our baseline the measure is n minus i, the number of parcels not yet inspected. It starts at n, falls by exactly one on each iteration, and stops at zero, as the plot shows. So the loop runs at most n times. Here the range object makes this nearly automatic. A while loop that updates its own counter is where termination arguments really matter, because a single missing increment turns a correct loop into an endless one. Keep one distinction in mind. Proving that the loop stops within n iterations is a statement about termination, not about speed. How quickly it stops is the question the next chapter takes up.",
}
