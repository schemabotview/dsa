import type { Section } from '../types'

export const boundaries: Section = {
  id: 'scope-and-directions',
  title: 'Specialist directions and explicit scope boundaries',
  scene: 'boundaries',
  focus: 'beyond',
  slide: `## Scope and directions

What this course gives you, and where it stops.

### Covered as foundations
- Structures: sequences, hashes, trees, heaps, graphs
- Techniques: search, sorting, greedy, DP, string matching
- Reasoning: contracts, invariants, bounds, and their assumptions

### Deliberately left to other courses
- Network flow and matching; computational geometry
- FFT and numerical methods; cryptographic number theory
- Parallel and distributed algorithms
- Persistent and succinct structures; contest-style pattern catalogues

### How to go further
- Each needs its own models, proofs and practice
- The habits carry over: specify, prove, measure, state limits`,
  narration:
    "Before the final synthesis, it is worth being explicit about the boundaries of this course, as the plan promised at the start. The course has covered the foundations: the main data structures, sequences, hash tables, trees, heaps and graphs. The main design techniques: searching and sorting, exhaustive search with pruning, greedy algorithms, dynamic programming and string matching. And the reasoning that ties them together: contracts, invariants, cost bounds, and the assumptions every claim depends on. Several important areas were deliberately left out, because each needs a course of its own to do properly. Network flow and matching, which solve assignment and capacity problems on graphs. Computational geometry, for problems about points, lines and shapes. The fast Fourier transform and numerical methods, where floating point behaviour becomes central. The number theory behind cryptography. Parallel and distributed algorithms, where many processors cooperate and communication is the real cost. Persistent and succinct data structures, which keep old versions or use nearly minimal space. And the large catalogues of patterns used in programming contests. The board lists them beside what was covered. Each of these has its own models of cost, its own proof techniques, and its own body of practice, and none can be learned well from a single section. What does carry over is the set of habits this course has practised in every chapter. Specify the problem before solving it. Prove that the solution meets its contract. Analyse its cost under a stated model. Measure to check the analysis. And always state the limits of what has been shown. Those habits apply equally well in every one of these directions.",
}
