import type { Section } from '../types'

export const bellmanFord: Section = {
  id: 'bellman-ford',
  title: 'Bellman–Ford and reachable negative cycles',
  scene: 'bellman-ford',
  focus: 'out',
  slide: `## Bellman–Ford

Negative weights allowed. Relax **every** edge, over and over.

### The algorithm
- Relax all E edges, V − 1 times: Θ(V × E)
- After round k, every shortest route using ≤ k edges is found
- A shortest simple path has at most V − 1 edges

### With a negative edge
- A credit of −6 on C → B makes Hub → C → B cost 2, beating 7

### Negative cycles
- A → B → A totals −1: each lap is cheaper, so there is no shortest route
- An edge that still improves after V − 1 rounds reveals a cycle
- Everything **reachable** from it is −∞: A, B, Port; C stays 8
- Unreachable Annex stays ∞`,
  narration:
    "Some problems genuinely have negative weights, such as a leg of a route that earns a credit or a refund. Bellman-Ford handles them, at a higher price. It simply relaxes every edge in the graph, and repeats that whole pass V minus one times. That costs V times E. Why V minus one passes? After the first pass, every shortest route that uses at most one edge has been found. After the second, every one using at most two edges, and so on, because each pass extends the best known routes by one more edge. A shortest route never needs to repeat a vertex, so it uses at most V minus one edges, and after that many passes every distance is exact. The first line of output uses a graph where the leg from C to B carries a credit of minus six. The route from Hub through C to B costs eight minus six, which is two, beating the direct route through A at seven, and Port then follows at four. This is exactly the kind of answer Dijkstra cannot be trusted to give. Negative edges raise a deeper problem: a negative cycle. In the second graph, going from A to B and back to A costs a total of minus one. Every lap round that cycle makes the route cheaper, so for any destination reachable through it, there is no shortest route at all. Its distance is effectively minus infinity. Bellman-Ford detects this. If any edge can still be relaxed after V minus one passes, some cycle is negative. The code then marks every vertex reachable from such an edge. The output reports A, B and Port as minus infinity. C is still eight, because the cycle cannot reach it, and Annex is still infinite, because nothing reaches Annex at all. So a reachable negative cycle only spoils the destinations it can actually reach.",
}
