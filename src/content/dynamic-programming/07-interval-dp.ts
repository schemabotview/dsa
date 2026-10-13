import type { Section } from '../types'

export const intervalDp: Section = {
  id: 'interval-dp-and-dags',
  title: 'Interval problems and DAG-based formulations',
  scene: 'interval-dp',
  focus: 'dag',
  slide: `## Interval DP and state DAGs

Some problems split a **range** in two, at a point the algorithm chooses.

### Merging adjacent batches
- Merging two neighbouring batches costs their combined size
- **cost(i, j)**: cheapest way to merge batches i..j into one
- The last merge splits the range at some k: try every k
- cost(i, j) = total(i..j) + min over k of cost(i, k) + cost(k + 1, j)

### Checked
- Interval DP: 200, matching brute force over every merge order
- About n²/2 states, up to n choices each: O(n³)

### Every DP is a DAG
- States are vertices, choices are weighted edges
- An optimal answer is a shortest or longest path in that DAG`,
  narration:
    "A different family of dynamic programs works on ranges. The state is an interval, from i to j, and the recurrence chooses where to split it. The example merges adjacent batches of parcels into one consignment. Batches can only be merged with their immediate neighbours, and each merge costs the combined size of the two batches being merged. The order of merges matters, because large batches merged early get counted again in every later merge. The state cost of i and j is the cheapest way to merge batches i through j into a single batch. A single batch costs nothing. Otherwise, think about the very last merge. It combines two pieces, the batches from i to k, and the batches from k plus one to j, for some split point k. Those two pieces must each have been merged optimally, and the last merge always costs the total size of the range. So cost of i and j is the total from i to j, plus the minimum over every k of the two sub-costs. The script computes this for four batches and gets two hundred, and confirms it against brute force, which tries every possible merge order. There are about n squared over two intervals, and each tries up to n split points, so the cost is n cubed. The same shape solves many other problems, such as the best order to multiply a chain of matrices, or the best way to build a search tree from known access frequencies. The board ends with a unifying view. Every dynamic program is secretly a graph problem. Its states are vertices, its choices are weighted edges, and the dependency structure is a DAG. Finding the optimal answer is finding a shortest or longest path in that DAG, exactly as in chapter ten, and evaluating states in a valid order is processing the DAG in topological order.",
}
