import type { Section } from '../types'

export const empirical: Section = {
  id: 'empirical-evidence',
  title: 'Empirical evidence, constants, and limits of abstraction',
  scene: 'timing',
  focus: 'out',
  slide: `## Measuring

Timing complements analysis. It never replaces it.

### What one run shows
- Both lookups are Θ(n): doubling \`n\` roughly doubles the loop's time
- The built-in \`in\` is about **2×** faster: a smaller constant
- \`in\` more than doubles from 100k to 200k: memory effects the model ignores

### Measure carefully
- Repeat runs and keep the **minimum**; the noise is real
- Change one thing at a time; state the machine and version

### Limits of the abstraction
- Constants decide between algorithms of the same growth
- Caches, allocation and interpreter overhead are not in the model
- A timing proves nothing about inputs you did not time`,
  narration:
    "Analysis predicts how cost grows. Measurement checks whether the prediction shows up on a real machine, and explains the part that analysis deliberately throws away. The script times two ways of searching for an absent identifier: our hand-written loop, and Python's built-in in operator. Both are linear searches, so both are Theta of n. The card shows one recorded run on this container, and it is labelled that way on purpose, because a second run gives different numbers. Several things are visible. Doubling n roughly doubles the loop's time, as the analysis predicts. The built-in is about two times faster at every size. That is a difference in the constant factor, which asymptotic notation hides on purpose, and which can decide between two algorithms of the same growth rate. And the built-in's time more than doubles between one hundred thousand and two hundred thousand items. That comes from effects the cost model ignores entirely, such as how the list's data fits in the processor's caches. Good measurement takes some care. Repeat each run several times and keep the minimum, because the noise comes from other work on the machine, not from the algorithm. Change one thing at a time. State the machine, the Python version, and the input sizes, so others can compare. And remember what a timing can and cannot show. It is evidence about the inputs you timed, on the machine you timed them on. It proves nothing about larger inputs, other data, or another interpreter. That is why the order in this course is fixed. First a correct algorithm, then an analysis under a stated model, and only then benchmarks, to check the analysis and to choose between candidates whose growth rates are equal.",
}
