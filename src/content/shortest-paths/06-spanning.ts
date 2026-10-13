import type { Section } from '../types'

export const spanning: Section = {
  id: 'spanning-trees',
  title: 'Spanning trees, forests, cut/cycle properties, and objectives',
  scene: 'spanning',
  focus: 'trees',
  slide: `## Spanning trees

A different objective: connect **every** depot as cheaply as possible.

### Definitions
- A **spanning tree** connects all V vertices with exactly V − 1 edges
- **Minimum** spanning tree: least total weight; here 36 minutes of road
- Disconnected input: a spanning **forest**, one tree each

### Two properties that drive every algorithm
- **Cut**: the lightest edge across any cut is in some MST
- **Cycle**: a cycle's heaviest edge is never needed

### Not the same as shortest paths
- Shortest-path tree from North: total 59, every depot reached fastest
- A round trip through all depots is a third, harder problem`,
  narration:
    "Spanning trees answer a different question from shortest paths, and it is important not to confuse them. Suppose the planner wants to keep a road network that connects every depot, and maintaining each road costs its length. The cheapest such network is a minimum spanning tree. A spanning tree connects all V vertices using exactly V minus one edges, so it has no cycles and no redundant roads. A minimum spanning tree has the least total weight among all spanning trees. The left tree on the board is one for the depot roads, with a total of thirty-six minutes of road. If the graph is disconnected, no single tree can span it, and the answer is a spanning forest, one tree per component. Two properties drive every minimum spanning tree algorithm. The cut property: divide the vertices into two groups in any way, and the lightest edge crossing between the groups belongs to some minimum spanning tree. The cycle property: on any cycle, the heaviest edge is not needed, since the others already connect its ends more cheaply. The right tree on the board is the shortest-path tree from North, the tree formed by Dijkstra's predecessors. Its total road length is fifty-nine, much more than thirty-six, because it is built for a different goal. It guarantees that every depot is reached from North by the fastest possible route. The minimum spanning tree guarantees the cheapest network overall, but some routes in it are long. For example, Port is reached through the whole chain of depots. Neither tree solves a third problem: a single tour that visits every depot and returns, which is the travelling salesperson problem. Unlike the two trees, no efficient exact algorithm is known for it, as chapter fourteen explains.",
}
