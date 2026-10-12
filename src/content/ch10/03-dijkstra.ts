import type { Section } from '../types'

export const dijkstra: Section = {
  id: 'dijkstra',
  title: "Dijkstra's algorithm and nonnegative-edge requirements",
  scene: 'dijkstra',
  focus: 'counter',
  slide: `## Dijkstra's algorithm

With cycles but **no negative** weights, settle vertices in order of distance.

### The algorithm
- A min-heap of (distance, vertex); pop the closest unfinished vertex
- Its distance is now **final**; relax its edges, pushing improvements
- Lazy heap: skip stale entries instead of decrease-key, as in Chapter 7

### On the depot roads, from North
- Finalised in order: North 0, East 4, Hub 12, West 19, South 25, Port 34
- Port via East (4 + 30) beats via South (25 + 10)
- O((V + E) log V) with a binary heap

### Why weights must be nonnegative
- Finalising assumes no later route can be shorter
- A → C is finalised at 2; the route via B costs 5 − 4 = **1**`,
  narration:
    "When the graph has cycles, there is no topological order to follow. Dijkstra's algorithm replaces it with a different order: settle vertices in increasing order of distance from the source. It keeps a min-heap of distance and vertex pairs, starting with the source at zero. It repeatedly pops the closest vertex not yet finished. At that moment, the vertex's distance is declared final. Then it relaxes the vertex's outgoing edges, and pushes any improved estimate onto the heap. This version is lazy, exactly as in chapter seven. Instead of updating an entry inside the heap, it pushes a new one and skips stale entries when they surface. The output shows one stale entry skipped. On the depot roads, starting from North, the depots are finalised in order: North at zero, East at four, Hub at twelve, West at nineteen, South at twenty-five, and Port at thirty-four. Port is reached via East, four plus thirty, which narrowly beats the route via South, twenty-five plus ten. With a binary heap, each edge causes at most one push and each push or pop costs log V, so the total is V plus E, times log V. The key step, declaring a popped distance final, depends on an assumption: no edge weight is negative. If all weights are nonnegative, any other route to the popped vertex would have to pass through a vertex that is at least as far away, and could only add to that distance. With a negative edge, that argument fails. The small graph on the board shows it. A reaches C directly in two, and reaches B in five. Dijkstra pops C at two and finalises it before ever looking at B. But B's edge to C has weight minus four, so the route through B costs one. The output confirms Dijkstra's wrong answer.",
}
