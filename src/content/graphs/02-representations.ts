import type { Section } from '../types'

export const representations: Section = {
  id: 'graph-representations',
  title: 'Adjacency lists, matrices, and operation requirements',
  scene: 'representations',
  focus: 'both',
  slide: `## Representing graphs

Two standard representations, each making different operations cheap.

### Adjacency list
- Each vertex keeps a list of its neighbours
- Memory Θ(V + E): 14 list cells for 7 undirected roads
- Listing a vertex's neighbours costs its **degree**

### Adjacency matrix
- A V × V table; cell (u, v) is 1 if the edge exists
- Memory Θ(V²): 64 cells, mostly zeros here
- "Is there an edge Hub–Port?" is one lookup; neighbours scan a full row

### Choose by the operations you need
- Sparse graphs, traversals: lists
- Dense graphs, constant-time edge tests: a matrix
- The rest of this course uses adjacency lists`,
  narration:
    "A graph has to be stored before it can be searched, and the two standard representations make different operations cheap, just as the sequence representations did in chapter three. An adjacency list stores, for each vertex, a list of its neighbours. The board shows it for the depot network. Its memory is proportional to the number of vertices plus the number of edges. For seven undirected roads, each stored in both directions, that is fourteen list entries. Listing the neighbours of a vertex is as fast as possible: it costs exactly the vertex's degree. Asking whether one particular edge exists means scanning a neighbour list. An adjacency matrix is a table with one row and one column per vertex, where the cell for u and v is one if the edge exists and zero otherwise. The board shows the top-left corner of it. Its memory is the number of vertices squared, sixty-four cells here, almost all of them zeros, because each depot connects to only a few others. Testing whether Hub and Port are connected is a single lookup. But listing Hub's neighbours means scanning its whole row, all eight cells, even though only three are ones. The script measures these differences directly. The choice should follow the operations the program needs. Most real networks are sparse, meaning each vertex connects to only a few others, and most algorithms in the next two chapters mostly ask for neighbours. For them, an adjacency list is the right default, and it is what the rest of the course uses. A matrix suits dense graphs, where most pairs are connected, and algorithms that constantly ask whether a specific edge exists, such as the all-pairs shortest path method of chapter ten.",
}
