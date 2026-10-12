import type { Section } from '../types'

export const graphModels: Section = {
  id: 'graph-models',
  title: 'Directed, undirected, weighted, and multigraph models',
  scene: 'graph-models',
  focus: 'roads',
  slide: `## Graph models

A **graph** is a set of **vertices** and a set of **edges** between them.

### Four modelling choices
- **Undirected**: a road usable both ways; store it in both directions
- **Directed**: a one-way street, or "a must happen before b"
- **Weighted**: each edge carries a number, such as minutes of driving
- **Multigraph**: several edges between the same pair, such as two routes

### The depot network
- 8 depots, 7 roads; Hub has degree 3
- Airfield and Annex connect only to each other

### Choosing the model is part of the problem
- Roads and task dependencies need **different** graphs
- Trees and lists were special cases: graphs allow cycles and many paths`,
  narration:
    "Lists capture sequence and trees capture hierarchy. Many relationships fit neither: roads between depots, dependencies between tasks, connections in a network. The general model is a graph, a set of vertices together with a set of edges, each edge connecting two vertices. Building a graph model involves a few choices, and making them correctly is part of solving the problem. An edge can be undirected, meaning it works both ways, like a road usable in either direction. In code, an undirected edge is usually stored in both directions, so each depot lists the other as a neighbour. The output confirms it: Hub lists North, and North lists Hub. An edge can be directed, like a one-way street, or like a dependency, where task a must happen before task b. An edge can carry a weight, a number such as the minutes needed to drive it. And some problems need a multigraph, which allows several edges between the same pair of vertices, such as a main road and a toll road between Hub and North. The board shows the depot road network: eight depots and seven roads, undirected and unweighted for now. The number of edges at a vertex is its degree, and Hub has degree three. Notice that Airfield and Annex connect to each other but to nothing else. The graph has two separate pieces, which will matter for traversal. This chapter uses two different graphs, and the difference is the point. Roads between depots form an undirected graph. Task dependencies, such as weighing a parcel before labelling it, form a directed graph. The same algorithms apply to both, but the questions differ. Lists and trees were special cases of graphs all along. What general graphs add is cycles and multiple paths between the same two vertices, and the algorithms in this chapter exist to handle exactly that.",
}
