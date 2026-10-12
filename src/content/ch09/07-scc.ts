import type { Section } from '../types'

export const scc: Section = {
  id: 'strongly-connected-components',
  title: 'Strongly connected components and condensation',
  scene: 'scc',
  focus: 'groups',
  slide: `## Strongly connected components

In a directed graph, **strongly connected** means each vertex reaches every other.

### One-way streets
- A, B, C form a loop: each reaches the others
- D and E reach each other; F is on its own
- Every vertex belongs to exactly one such component

### Kosaraju's algorithm: two passes of DFS
- Pass 1: DFS on the graph, recording **finish** order
- Pass 2: DFS on the **reversed** graph, starting from the latest finish
- Each pass-2 search collects exactly one component

### The condensation
- Shrink each component to one vertex: the result is always a **DAG**
- {A, B, C} → {D, E} → {F}: a topological order of components`,
  narration:
    "In a directed graph, reachability is not symmetric. One-way streets may let you drive from A to D but not back. The right notion of a group is a strongly connected component: a maximal set of vertices in which every vertex can reach every other along directed edges. The board shows six stops joined by one-way streets. A, B and C form a loop, so each reaches the others, and they form one component. D and E reach each other, a second component. F can be reached but leads nowhere, so it is a component on its own. Every vertex belongs to exactly one strongly connected component. Finding them takes a clever use of depth-first search. This course uses Kosaraju's algorithm, because its reasoning is the easiest to see. It makes two passes. The first pass runs depth-first search on the graph and records the order in which vertices finish. The second pass reverses every edge, then runs depth-first search on the reversed graph, taking start vertices in reverse finishing order, latest finish first. Each search in the second pass collects exactly one component. Why does that work? The vertex that finishes last lies in a component that nothing else points into, a source among the components. In the reversed graph, that component has no way out, so the search from it collects that component and nothing else. Removing it, the same argument applies to the next. Both passes are linear, so the whole algorithm costs vertices plus edges. Shrinking each component to a single vertex gives a graph called the condensation, and it is always acyclic, since any cycle between components would merge them into one. Here it is the chain from A, B and C, to D and E, to F, which can be processed in topological order like any other dependency graph.",
}
