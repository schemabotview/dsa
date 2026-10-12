import type { Section } from '../types'

export const counterexamples: Section = {
  id: 'counterexamples',
  title: 'Counterexamples',
  scene: 'counterexample',
  focus: 'out',
  slide: `## Counterexamples

A universal claim is refuted by **one** instance where it fails.

### A plausible bug
- The \`else: return None\` gives up after inspecting one parcel
- It passes a first-item test and two missing-target tests
- It fails at once on a target in position 2

### Reading the failure through the proof
- **Maintenance** is broken: rejecting index 0 is not "no match anywhere"
- The invariant argument points to the faulty line
- Three passing tests did not, because none of them **reached** index 1

### The lesson
- Choose tests that exercise **each** path through the loop
- Then let the proof explain why the untested inputs are covered`,
  narration:
    "A claim that a function works for every valid input is a universal claim, and a universal claim is refuted by a single instance where it fails. That instance is called a counterexample. The function on the left contains a very plausible bug. Someone has added an else branch that returns None as soon as one parcel fails to match. It passes all three of its tests. The target at the front is found. The two absent targets correctly give None. And yet the function is wrong, as the last line shows. Searching for P three-seventeen, which sits at index two, returns None. The invariant argument explains exactly why. The maintenance step needs every rejected index to be followed by another iteration. This version stops after rejecting index zero and announces that nothing matches anywhere, which the invariant does not support. Notice why the tests missed it. None of them had a target beyond the first position, so none of them ever reached the faulty path. Passing tests are only evidence about the paths they exercise. The lesson is to choose tests that exercise each path through the loop, and then to let the proof explain why the inputs nobody tested are covered too.",
}
