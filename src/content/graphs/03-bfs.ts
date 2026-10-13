import type { Section } from '../types'

export const bfs: Section = {
  id: 'breadth-first-search',
  title: 'Breadth-first search, distances, and path reconstruction',
  scene: 'bfs',
  focus: 'layers',
  slide: `## Breadth-first search

Explore outward in **layers**: everything 1 hop away, then 2 hops, and so on.

### The algorithm
- A **queue** holds the frontier; start with the source at distance 0
- Pop a vertex; each **unvisited** neighbour gets distance + 1 and a **parent**
- Mark a vertex when it is first queued: each enters the queue once

### What it computes
- Hop counts from North: Port is 4 hops away
- Following parents back from Port gives a shortest route
- Airfield is never reached: it is in another component

### Its limits
- Shortest in **hops**: correct only when every edge costs the same
- Θ(V + E) with an adjacency list`,
  narration:
    "The first way to explore a graph is breadth-first search. It works outward from a starting vertex in layers. First every vertex one hop away, then every vertex two hops away, and so on. The engine is a queue, the first-in, first-out structure from chapter three. The search starts with only the source in the queue, at distance zero. It repeatedly takes the vertex at the front of the queue and looks at its neighbours. Any neighbour not yet visited gets a distance one greater than the current vertex, records the current vertex as its parent, and joins the back of the queue. A vertex is marked visited the moment it is first queued, so each vertex enters the queue once, and each adjacency list is scanned once. With an adjacency list, the whole search costs time proportional to the vertices plus the edges. The board shows the layers from North. Hub and East are one hop away. West is two, South three, and Port four. Because the queue serves vertices strictly in order of distance, the first time a vertex is reached is by a shortest route, measured in hops. The parent pointers record that route. Following them backwards from Port, through South, West and Hub to North, and reversing, reconstructs a shortest path, which the output prints. The output also shows that Airfield is never reached. It lies in a different component of the graph, and no search from North can find it. The guarantee needs to be stated carefully. Breadth-first search finds paths with the fewest edges. That is the shortest path only when every edge counts the same. If roads take different numbers of minutes, a route with more hops can be faster, and breadth-first search will not find it. Weighted shortest paths need the methods of chapter ten.",
}
