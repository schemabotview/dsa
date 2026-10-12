import type { Section } from '../types'

export const graphGreedy: Section = {
  id: 'greedy-in-graphs',
  title: 'Connections to graph greedy proofs and design selection',
  scene: 'graph-greedy',
  focus: 'proofs',
  slide: `## Greedy graphs, and choosing

Chapter 10's algorithms were greedy, each with its own proof.

### The cut property, checked
- Each edge Kruskal takes is the lightest crossing **some** cut
- Every taken edge passes; the skipped ones close cycles

### Same pattern, different proofs
- Kruskal and Prim: cut property
- Dijkstra: nonnegative weights make the closest final
- Scheduling, Huffman, most parcels: exchange arguments

### When to reach for greedy
- A natural local rule, plus a proof, or no counterexample found
- If it fails: richer state (Ch. 12) or search (Ch. 8)
- Greedy is a design approach, **not** a guaranteed speed-up`,
  narration:
    "This chapter has a precursor in chapter ten. Kruskal's and Prim's minimum spanning tree algorithms, and Dijkstra's shortest paths, are all greedy, and each rests on its own proof. The script makes the spanning tree case concrete. It runs Kruskal's algorithm on the depot roads and, for every edge it takes, finds the cut between the group on one side and everything else, and checks whether the edge is the lightest one crossing that cut. Every taken edge passes. The three skipped edges would each close a cycle. That is the cut property at work. Each greedy step is safe because it is the lightest crossing edge of some cut, and the lightest crossing edge of any cut belongs to some minimum spanning tree. The table on the board collects the greedy algorithms in this course, each with the argument that justifies it. Kruskal and Prim rely on the cut property. Dijkstra relies on nonnegative weights, which make the closest unfinished vertex's distance final. Interval scheduling, Huffman coding and the most-parcels rule rely on exchange arguments. The pattern is always the same: a local rule, plus a reason why the local choice can be extended to an optimal answer. So when should you reach for a greedy algorithm? When the problem suggests a natural local rule, and you can either prove it with an exchange or cut argument, or at least search hard for small counterexamples and fail to find one. If the rule fails, the usual next steps are a richer formulation that keeps more state, which is dynamic programming in the next chapter, or exhaustive search with pruning from chapter eight. And remember what greedy is. It is a design approach that is correct for some problems. It is not a way of making any algorithm faster.",
}
