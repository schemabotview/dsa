import type { Section } from '../types'

export const decisionRecord: Section = {
  id: 'integrated-design',
  title: 'Integrated workload, algorithm, representation, and evidence review',
  scene: 'decision-record',
  focus: 'map',
  slide: `## Integrated design

The whole delivery planner, as one written **decision record**.

### Each part gets its own technique
- Parcel lookups: a hash map, expected O(1)
- Urgent parcels: a heap; routes: Dijkstra, since minutes are ≥ 0
- Van loading: an exact knapsack DP, because 9000 g is small
- Tours: NP-hard, so a heuristic, measured against exact answers

### Evidence for every claim
- Correctness: invariants and proofs; costs: stated models
- Examples run, DP checked against brute force

### State the limits
- No live traffic; tours are not proven optimal
- Correct first, then analyse, then benchmark`,
  narration:
    "The course ends where it began, with the delivery planner, now assembled from every chapter. The final skill is to bring the pieces together into one design, and to write the reasoning down. A good format for that is a decision record: for each part of the problem, the choice made, and the evidence behind it. The board maps the planner part by part. Looking up a parcel by identifier uses a hash map, from chapter five, with expected constant time under a stated hashing assumption. The queue of urgent parcels uses a heap, from chapter seven. Travel times between depots use Dijkstra's algorithm, from chapter ten, which is valid because driving minutes are never negative. Loading each van is a knapsack problem, which is NP-hard in general, but chapter twelve's dynamic program solves it exactly here, because a capacity of nine thousand grams makes the table small. That is the pseudopolynomial limit working in our favour. Planning each van's tour is also NP-hard, and the instances are too large to search, so the record chooses a heuristic, and states that it was measured against exact answers on small instances, with no guarantee claimed. The script prints the record itself. Every line pairs a choice with its justification, and the last line states the limits plainly: no live traffic data, and tours not proven optimal. That honesty is part of the design, not an afterthought. The order of work throughout has always been the same, and it is worth repeating one last time. First a correct algorithm, with its contract and proof. Then its cost, under a stated model. Only then benchmarks, to check the analysis and choose between correct candidates. Completing this course is a start, not mastery. Practical skill comes from applying these habits, getting feedback, and practising on problems of your own.",
}
