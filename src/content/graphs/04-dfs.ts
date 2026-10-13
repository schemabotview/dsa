import type { Section } from '../types'

export const dfs: Section = {
  id: 'depth-first-search',
  title: 'Depth-first search, discovery/finish state, and edge reasoning',
  scene: 'dfs',
  focus: 'tasks',
  slide: `## Depth-first search

Go as **deep** as possible along one path, then back up and try the next.

### Discovery and finish times
- A clock ticks when a vertex is first reached and when it is finished
- A vertex is **active** between the two: it is on the current path
- weigh [1, 8] contains label [2, 7]: label was explored **inside** weigh

### Reasoning about edges
- **Tree** edge: leads to a newly discovered vertex
- **Back** edge: leads to an active vertex, an ancestor: a **cycle**
- **Cross** edge: to a vertex already finished, such as sort → load

### Every start
- Restart from each undiscovered vertex: scan, then inspect
- Θ(V + E); the finish order drives sections 6 and 7`,
  narration:
    "Depth-first search explores in the opposite spirit. Instead of layers, it follows one path as deep as it can go, and only when it reaches a dead end does it back up and try the next branch. It is the backtracking walk of chapter eight, applied to a graph, with one difference: a vertex that has been visited is never entered again. The useful information comes from a clock. The clock ticks when a vertex is first discovered, and ticks again when the search has finished with it, meaning all of its descendants are done. Between those two moments, the vertex is active: it is on the current path. The board shows the task graph with each task's discovery and finish times. Weigh is discovered at one and finished at eight. Inside that interval, label is discovered at two and finished at seven, so label was explored entirely within weigh. Intervals either nest or are disjoint, which is how depth-first search reveals the structure of a graph. With these times we can classify each edge by where it leads. A tree edge leads to a newly discovered vertex. A back edge leads to a vertex that is still active, an ancestor on the current path, and that closes a cycle. A cross edge leads to a vertex that is already finished. On the board, sort to load is a cross edge: load was finished at six, long before sort was discovered at ten. In a directed graph, the presence of any back edge is exactly the presence of a cycle. One search from one start may not reach everything, so depth-first search restarts from every vertex not yet discovered. Here it starts again at scan, and then at inspect. The total cost is still proportional to vertices plus edges. And the order in which vertices finish turns out to be the key to the next two sections.",
}
