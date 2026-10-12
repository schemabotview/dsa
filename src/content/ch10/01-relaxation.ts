import type { Section } from '../types'

export const relaxation: Section = {
  id: 'relaxation',
  title: 'Relaxation, path bounds, predecessors, and unreachable vertices',
  scene: 'relaxation',
  focus: 'tri',
  slide: `## Relaxation

Every shortest-path algorithm in this chapter repeats **one** operation.

### Distance estimates
- \`dist[v]\`: the best route to v found **so far**; start at ∞, source 0
- Always an **upper bound**: a real route of that length exists
- \`pred[v]\`: the vertex before v on that route

### Relaxing an edge u → v of weight w
- If \`dist[u] + w < dist[v]\`, the route via u is better: update both
- North → Hub direct is 12; via East is 4 + 9 = 13: no change

### Unreachable vertices
- Airfield keeps ∞ and no predecessor: no route exists at all
- Algorithms differ only in **which** edges to relax, and **when**`,
  narration:
    "Chapter nine found shortest routes by counting hops. Now roads have lengths, measured in minutes, and the fewest hops is no longer the fastest route. Every algorithm in this chapter is built from a single operation called relaxation, so it is worth understanding it on its own first. Each vertex keeps a distance estimate: the length of the best route to it found so far. The source starts at zero and every other vertex starts at infinity, meaning no route is known yet. Each vertex also keeps a predecessor, the vertex just before it on that best route, so the route itself can be reconstructed by following predecessors backwards, exactly as with parents in breadth-first search. An estimate is always an upper bound. Whenever it is finite, a real route of that length exists, so the true shortest distance can only be smaller or equal. Relaxing an edge from u to v with weight w asks one question: is the best route to u, followed by this edge, better than the best route to v known so far? If the distance to u plus w is less than the distance to v, both the distance and the predecessor of v are updated. Otherwise nothing changes. The script tries four relaxations around North, East and Hub. North to Hub sets Hub to twelve. North to East sets East to four. Then East to Hub would give four plus nine, thirteen, which is worse than twelve, so it changes nothing. And Airfield is never touched. Its estimate stays infinite and its predecessor stays empty, which is the honest answer when no route exists. All of the algorithms that follow, for DAGs, Dijkstra, Bellman and Ford, are different strategies for choosing which edges to relax, and in what order, so that the estimates become exact.",
}
