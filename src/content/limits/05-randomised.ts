import type { Section } from '../types'

export const randomised: Section = {
  id: 'randomisation',
  title: 'Randomisation, expectation, and failure probability',
  scene: 'randomised',
  focus: 'out',
  slide: `## Randomisation

Let the algorithm flip coins, and state exactly what that buys.

### Two kinds of randomised algorithm
- **Las Vegas**: always correct, time random: quicksort
- **Monte Carlo**: fixed time, answer correct **with high probability**

### A Monte Carlo check
- Is the scanned list the same parcels as the manifest, in any order?
- Compare a fingerprint, the product of (x − v), at a random x
- "Different" is always right; "same" is wrong with probability ≤ n / P

### Driving the error down
- Each independent trial multiplies the error bound
- 3 trials: below 10⁻⁹, rarer than a hardware fault
- The randomness is the algorithm's: no input is bad for it`,
  narration:
    "Randomness has appeared several times in this course: random pivots in quicksort, random seeds for hash tables. This section states precisely what randomisation buys. There are two kinds of randomised algorithm. A Las Vegas algorithm always gives the correct answer, but its running time depends on its random choices. Quicksort and quickselect with random pivots are Las Vegas, with expected n log n and expected linear time. A Monte Carlo algorithm runs in a fixed time, but its answer is only correct with high probability. The script is a Monte Carlo example from the depot. Has the scanner seen exactly the same parcels as the manifest, perhaps in a different order? Sorting both lists would answer it in n log n. Instead, the algorithm computes a fingerprint of each list: the product of x minus each value, modulo a large prime P, at a randomly chosen x. If the lists contain the same parcels, the fingerprints are always equal. If they differ, the two products are different polynomials, and they can agree at no more than n points, so the chance of a random x fooling the check is at most n over P. The error is one-sided. A different answer is always right. A same answer can be wrong, with small probability. Independent trials drive that probability down quickly, because each one multiplies it. Here a single trial errs with probability at most one in a thousand, and three trials push it below one in a billion, far less likely than a hardware fault during the run. The output shows the check accepting the reversed list and rejecting the list with one parcel replaced. And as chapter two stressed, the randomness belongs to the algorithm. No particular input is bad for it, because an adversary cannot choose the random x.",
}
