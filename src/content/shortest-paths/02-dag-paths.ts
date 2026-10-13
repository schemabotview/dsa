import type { Section } from '../types'

export const dagPaths: Section = {
  id: 'dag-shortest-paths',
  title: 'DAG shortest paths and topological processing',
  scene: 'dag-paths',
  focus: 'legs',
  slide: `## Shortest paths in a DAG

With no cycles, one pass in the right order is enough.

### The algorithm
- Process vertices in **topological order**
- Relax every outgoing edge of each vertex, once
- Θ(V + E) in total, and negative weights are allowed

### Why it is correct
- When u is processed, every edge **into** u has already been relaxed
- So \`dist[u]\` is already final when u's own edges are used

### The delivery run
- A direct leg Depot → A costs 5; via B costs 3 + 1 = 4
- Drop: 12, by Depot → B → A → C → Drop
- Longest paths work the same way: critical paths in schedules`,
  narration:
    "The simplest case is a graph with no cycles, a DAG, such as one-way legs of a delivery run that never return to an earlier point. Here a single pass is enough, provided the vertices are processed in the right order. Take the vertices in topological order, the order from chapter nine, and relax every outgoing edge of each vertex exactly once. That is all. Each vertex and each edge is handled once, so the cost is proportional to vertices plus edges. The correctness argument is short. Topological order means every edge points forward. So by the time a vertex u is processed, every edge leading into u comes from an earlier vertex, and has already been relaxed. Every possible route into u has therefore been considered, and its distance is already final when its own outgoing edges are used. Notice that nothing in this argument cares whether weights are negative. Without cycles, negative weights cause no trouble at all. The board shows the run. From the depot, the direct leg to A costs five. But B is processed first, at a distance of three, and its leg to A costs one, so A's estimate drops to four, via B. C then gets ten, by way of A, and the drop point twelve. Following the predecessors back from the drop point gives the route depot, B, A, C, drop. The same method finds longest paths too, simply by maximising instead of minimising. In a project schedule, where edges are task durations and dependencies, the longest path is the critical path, the chain of tasks that determines the earliest finishing time. That is easy in a DAG, though for general graphs with cycles, longest simple paths turn out to be a hard problem, a theme of chapter fourteen.",
}
