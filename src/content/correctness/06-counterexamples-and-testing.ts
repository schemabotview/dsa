import type { Section } from '../types'

export const counterexamplesAndTesting: Section = {
  id: 'counterexamples-and-testing',
  title: 'Counterexamples, boundaries, and evidence',
  scene: 'evidence',
  focus: 'out',
  slide: `## Counterexamples and evidence

A universal claim is refuted by **one** instance where it fails.

### A plausible bug
- \`else: return None\` gives up after inspecting one parcel
- Three tests pass; \`P-317\` at index 2 returns \`None\`
- The proof finds it: **maintenance** fails at the first rejection

### Boundaries, on purpose
- Empty, single item, first, last, absent, duplicates
- Index \`0\` is **falsy**: callers test \`is not None\`, not \`if i:\`

### What each kind of evidence reaches
- **Tests**: the inputs they ran; **a proof**: every valid input
- **A counterexample**: the claim is false, whatever passed before
- Together: tests catch slips in proofs, proofs explain the passing tests`,
  narration:
    "A claim that a function works for every valid input is a universal claim, and a single instance where it fails refutes it. That instance is called a counterexample. The function on the board contains a very plausible bug. Someone has added an else branch that returns None as soon as one parcel fails to match. It passes all three of its tests. The target at the front is found, and the two absent targets correctly give None. And yet the last line of output shows the function is wrong: P three-seventeen, which sits at index two, comes back as None. The invariant argument explains exactly why. Maintenance needs every rejected index to be followed by another iteration, but this version stops after rejecting index zero and announces that nothing matches anywhere. The tests missed it because none of them had a target beyond the first position, so none of them reached the faulty path. Bugs cluster at the edges of the input space, so boundary cases should be chosen on purpose rather than hoped for. For algorithms over sequences, the checklist is short: an empty input and a single item; the target first, last and absent; and duplicates, where the contract decides which match wins. Run against our baseline, every case agrees with the contract. One more boundary sits on the caller's side. Index zero is a perfectly good answer, but in Python zero counts as false in a condition. A caller who writes, if i, treats a parcel found at the very front as not found. Test the result with, is not None, which says exactly what the contract means. It helps to be exact about how far each kind of evidence reaches. Passing tests show correctness on the inputs they ran, and on nothing else. A proof covers every input that meets the precondition, including the infinitely many nobody will try. And one counterexample shows a universal claim is false, however many tests passed before it. They work together. Tests catch slips in a proof and in its translation to code, and a proof explains why the tested cases pass.",
}
