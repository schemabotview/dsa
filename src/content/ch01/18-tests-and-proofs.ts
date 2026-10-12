import type { Section } from '../types'

export const testsAndProofs: Section = {
  id: 'tests-and-proofs',
  title: 'Tests and proofs',
  scene: 'evidence',
  focus: 'proof',
  slide: `## Tests and proofs

Different kinds of evidence reach different distances.

### What each one establishes
- **Passing tests**: correct on the inputs they ran, and nothing more
- **A proof**: correct on every input that meets the precondition
- **A counterexample**: the universal claim is false

### Using them together
- Tests catch slips in a proof and in its translation to code
- A proof explains **why** the tested cases pass
- Neither covers inputs that break the stated assumptions

### In this course
- **Proof sketches** explain why a technique works
- **Executed examples**, with their real output, check the details`,
  narration:
    "We now have three kinds of evidence, and it helps to be exact about how far each one reaches. A passing test shows the function is correct on the inputs it ran, and on nothing else. Six passing tests are six facts. A proof, like our invariant argument, shows the function is correct on every input that meets the precondition, including the infinitely many nobody will ever try. And a single counterexample shows that a universal claim is false, no matter how many tests passed before it. These are not rivals. A proof can contain a slip, and the Python can differ from the pseudocode the proof was about, so tests guard against both. In the other direction, a proof explains why the tested cases pass, and points straight at the guilty line when one fails. Both kinds of evidence share a limit, though. They are about inputs that satisfy the stated assumptions. Neither says anything about a list that is edited during the search, or an identifier compared with different rules. That is why the assumptions were written down first. This course uses both. Proof sketches explain why each technique works, and every code example is executed, with its real output shown, to check the details.",
}
