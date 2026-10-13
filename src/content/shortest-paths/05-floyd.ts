import type { Section } from '../types'

export const floyd: Section = {
  id: 'all-pairs',
  title: 'All-pairs paths and Floyd–Warshall',
  scene: 'floyd',
  focus: 'out',
  slide: `## All-pairs shortest paths

Sometimes we need the distance between **every** pair of depots.

### Floyd–Warshall
- Start from the direct edges; ∞ elsewhere, 0 on the diagonal
- For each vertex k, allow k as an **intermediate stop** for every pair
- \`d[i][j] = min(d[i][j], d[i][k] + d[k][j])\`: three nested loops, Θ(V³)

### Why the order of loops matters
- After stage k, every route using only stops from the first k is optimal
- k must be the **outer** loop

### The table
- North to West: no direct road; 19 via East and Hub
- Negative edges allowed; a negative diagonal entry reveals a cycle`,
  narration:
    "Some questions need distances between every pair of depots, for instance to build a travel-time table for the dispatch office. One option is to run a single-source algorithm from every vertex. Another is the Floyd-Warshall algorithm, which is short enough to remember and works directly on a table. It starts from a matrix of direct distances: the road length where a road exists, infinity where none does, and zero on the diagonal. Then it considers each vertex k in turn as a possible intermediate stop. For every pair i and j, it asks whether going from i to k and then from k to j is shorter than the best route from i to j known so far, and if so, updates the table. That is three nested loops, so the cost is V cubed. The order of the loops matters, and it comes with an invariant. After the stage for k, every entry of the table is the shortest route that uses only the first k vertices as intermediate stops. When the stage for the last vertex is complete, every vertex is allowed, so every entry is exact. That only works if k is the outer loop. Putting it inside the others breaks the invariant and gives wrong answers. The output shows the finished table for four depots. North and West have no direct road, yet the table gives nineteen minutes, travelling via East and Hub. Floyd-Warshall allows negative edges, and if a negative cycle exists, some diagonal entry ends up below zero, which is a convenient check. The table on the board summarises the choice. Floyd-Warshall's V cubed is simple and suits small or dense graphs. For large sparse graphs with nonnegative weights, running Dijkstra from each vertex is much faster.",
}
