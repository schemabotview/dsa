import type { Section } from '../types'

export const approximation: Section = {
  id: 'approximation-and-heuristics',
  title: 'Approximation guarantees and heuristic evidence',
  scene: 'approximation',
  focus: 'tours',
  slide: `## Approximation and heuristics

When exact is too slow, give up optimality, but say **how much**.

### The delivery tour
- Visit every depot once and return: an NP-hard problem
- Exact search over 6! = 720 tours: 28.6 km
- **Nearest neighbour**, closest unvisited depot next: 36.8 km

### Guarantee versus evidence
- An **approximation algorithm** proves a bound on every instance
- A **heuristic** has no such proof; 1.29× here is one observation
- Nearest neighbour can be arbitrarily bad on some inputs

### Use both honestly
- Compare with exact answers on small instances
- Report observed ratios as evidence, not as a guarantee`,
  narration:
    "When a problem is NP-hard and the instances are large, insisting on the exact optimum may mean waiting forever. The alternative is to accept an answer that is not quite optimal, but to be precise about how far from optimal it might be. The delivery tour is the natural example. A van must visit every depot once and return to the hub, travelling as little as possible. This is the travelling salesperson problem, and it is NP-hard. With six depots besides the hub there are seven hundred and twenty possible orders, few enough to try them all, and the shortest tour is twenty-eight point six kilometres. The nearest neighbour heuristic is much faster. It always drives to the closest depot not yet visited. On this map it produces a tour of thirty-six point eight kilometres, one point two nine times the optimum. The plot shows both tours. You can see where nearest neighbour went wrong: it greedily took nearby depots early, and was left with a long drive at the end. It is important to separate two kinds of claim. An approximation algorithm comes with a proof that, on every instance, its answer is within a stated factor of the optimum. A heuristic comes with no such proof. Its quality is only observed, as here, on particular instances. Nearest neighbour is a heuristic, and on some carefully built inputs its tours can be arbitrarily worse than optimal. So the ratio of one point two nine is evidence about this map, not a guarantee about the next one. The honest practice is to use both. Measure a heuristic against exact answers on instances small enough to solve exactly, report the observed ratios as evidence, and prefer methods with proven guarantees when a bound must hold.",
}
