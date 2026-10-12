import type { Section } from '../types'

export const componentsCycles: Section = {
  id: 'components-and-cycles',
  title: 'Components, reachability, and cycle detection',
  scene: 'cycles',
  focus: 'dd',
  slide: `## Components and cycles

Two questions every traversal can answer.

### Connected components
- Start a search from each vertex not yet seen; each start finds one component
- The depot roads split into two: the six main depots, and Airfield–Annex
- Reachability: u reaches v exactly when v is in u's component

### Cycles in a directed graph
- A cycle exists exactly when DFS finds an edge to an **active** vertex
- Track three states: unvisited, **on the current path**, finished

### Why one visited flag is not enough
- In the diamond, d is reached twice, along a → b and a → c
- "Already visited" reports a cycle; "on the current path" correctly does not`,
  narration:
    "Traversal answers two basic questions about a graph. The first is reachability: which vertices can be reached from which? In an undirected graph, the vertices split into connected components, groups where every vertex reaches every other, with no edges between groups. Finding them takes one idea: start a search from any vertex not yet seen, mark everything it reaches as one component, and repeat until every vertex is seen. Each restart finds exactly one new component. The components script does this for the depot roads and finds two, the six main depots, and Airfield with Annex. Once components are known, asking whether u reaches v is just asking whether they share a component. The second question is whether a directed graph has a cycle. That matters a great deal for task dependencies, because a cycle of dependencies can never be scheduled. From the previous section, a directed graph has a cycle exactly when depth-first search finds a back edge, an edge to a vertex that is still active on the current path. So the search tracks three states: unvisited, on the current path, and finished. A common mistake is to track only one flag, visited or not, and report a cycle whenever an edge leads to a visited vertex. The board shows why that fails. In the diamond, a has edges to b and c, and both lead to d. The search goes a, b, d and finishes them. Then it goes to c, which has an edge to d. D is visited, so the single-flag test reports a cycle. But there is no cycle. D is finished, not on the current path. The output confirms that the path-state version answers correctly for both the diamond and a true loop, while the single flag gets the diamond wrong. In an undirected graph the rule is different again, since every edge leads straight back to its parent.",
}
