import type { Section } from '../types'

export const costs: Section = {
  id: 'traversal-costs',
  title: 'Representation-dependent time/space and traversal choices',
  scene: 'traversal-cost',
  focus: 'summary',
  slide: `## Traversal costs

The same search costs different amounts on different representations.

### A sparse graph
- 1000 vertices, about 3000 edges
- Adjacency list: about V + E = 3993 steps
- Adjacency matrix: V + V² = 1,001,000 steps, 250 times more

### Space, too
- Visited marks and parents: Θ(V) for either search
- BFS queue and DFS stack: up to Θ(V); recursive DFS hits the depth limit

### Choosing a traversal
- Fewest hops, layers: **BFS**
- Cycles, finish order, topological order, components: **DFS**
- Long paths in Python: DFS with an explicit stack`,
  narration:
    "Every traversal in this chapter has been described as costing vertices plus edges. That figure assumes an adjacency list, and it is worth seeing what happens otherwise. The script builds a sparse random graph of a thousand vertices and about three thousand edges, stored both ways, and counts the steps a traversal takes. With an adjacency list, each vertex is visited once and each of its neighbours is examined once, about four thousand steps in all. With an adjacency matrix, finding a vertex's neighbours means scanning its whole row of a thousand cells, whether the edges are there or not. That is over a million steps, two hundred and fifty times more, to do exactly the same search. The memory follows the same pattern, as the table shows. For sparse graphs, the list wins on every count that traversal cares about. Traversals also need space of their own. Both searches keep a visited mark and a parent for each vertex, which is linear in the number of vertices. Breadth-first search's queue can hold a whole layer, and depth-first search's stack a whole path, each up to the number of vertices in the worst case. A recursive depth-first search keeps that path on the call stack, so on a long chain in Python it runs into the recursion limit from chapter two. Choosing between the two searches is mostly about the question being asked. For the fewest hops, or anything defined by layers, use breadth-first search. For cycles, finishing order, topological order and components, use depth-first search, whose discovery and finish structure carries the information. When paths can be long, write depth-first search with an explicit stack. Next, edges get weights, and both searches need upgrading to find the cheapest routes rather than the shortest in hops.",
}
