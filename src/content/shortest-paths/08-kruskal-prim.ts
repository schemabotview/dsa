import type { Section } from '../types'

export const kruskalPrim: Section = {
  id: 'kruskal-and-prim',
  title: 'Kruskal and Prim with representation-specific costs',
  scene: 'kruskal-prim',
  focus: 'code',
  slide: `## Kruskal and Prim

Two greedy algorithms for the same minimum spanning tree.

### Kruskal: lightest edges first
- Sort all edges; add each unless it would close a cycle
- Union-find decides "would it close a cycle?" in nearly O(1)
- O(E log E), dominated by the sort; disconnected input gives a **forest**

### Prim: grow one tree
- Start anywhere; repeatedly add the lightest edge leaving the tree
- A heap of crossing edges: O(E log E) with lazy entries
- Covers only the start's component

### Both are correct by the cut property
- Each added edge is the lightest crossing **some** cut
- Both give 36 here: the MST's total is unique even if its edges are not`,
  narration:
    "Two classic algorithms build minimum spanning trees, and both are greedy: they repeatedly take the locally cheapest safe edge. Kruskal's algorithm sorts all the edges by weight and considers them from lightest to heaviest. Each edge is added unless it would connect two depots that are already connected, since that would close a cycle. Union-find answers that question in nearly constant time, so the total cost is dominated by sorting the edges, E log E. Because Kruskal never needs a starting point, it handles a disconnected graph naturally. The demo adds a separate Airfield and Annex road, and Kruskal returns six edges for eight vertices, a spanning forest of two trees. Prim's algorithm grows a single tree from a starting vertex. At every step it adds the lightest edge that connects the tree to a vertex not yet in it. A heap holds the candidate edges crossing from the tree to the outside, and as in Dijkstra, stale entries, edges whose far end has already joined, are skipped when they surface. With this lazy heap, the cost is also E log E. Prim only ever spans the component containing its start. Both algorithms are correct for the same reason, the cut property from section six. Every edge Kruskal adds is the lightest edge crossing the cut between its endpoint's current group and everything else, and every edge Prim adds is the lightest edge crossing the cut between the tree and the rest. So every edge either algorithm adds belongs to some minimum spanning tree. The output shows both reaching the same total of thirty-six. When weights tie, there can be several different minimum spanning trees, but their total weight is always the same. The next chapter asks when greedy choices like these can be trusted in general.",
}
