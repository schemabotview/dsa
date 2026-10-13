import type { Section } from '../types'

export const buildHeap: Section = {
  id: 'bottom-up-construction',
  title: 'Bottom-up construction and its linear-time argument',
  scene: 'build-heap',
  focus: 'levels',
  slide: `## Building a heap

Turn an arbitrary array into a heap. How fast can it be done?

### Two strategies
- **Repeated push**: n sift-ups, O(n log n)
- **Bottom-up**: sift down every internal node, from the last up to the root
- The leaves, half of all nodes, are already heaps: they need no work

### Why bottom-up is linear
- A node at height \`h\` costs at most \`h\` swaps, and few nodes are tall
- Total ≤ n/4·1 + n/8·2 + n/16·3 + … < **n**
- Charging every node the full height **overestimates** the cost

### The output, n = 1023, descending input
- Bottom-up: 1013 swaps; repeated push: 8194
- \`heapq.heapify\` builds bottom-up`,
  narration:
    "Sometimes all the items are available at once, and we want to turn an existing array into a heap. The obvious way is to push them one at a time. Each push may sift up through the whole height, so that costs n log n. There is a better way, and its analysis is a favourite example of careful counting. Bottom-up construction treats the array as a complete tree already, and repairs it from the bottom up. Every leaf on its own is a valid heap, and leaves make up about half of all nodes, so they need no work at all. Then, from the last internal node backwards to the root, sift each node down. When a node is sifted down, both of its subtrees are already heaps, so the repair is exactly the one from the previous section. The naive analysis says each sift-down costs up to log n, so the total is n log n again. That bound is true, but it is not tight, because it charges every node the full height of the tree. In fact a node at height h can sift down at most h levels, and most nodes are near the bottom. The table on the board does the honest count for a thousand and twenty-three items. Five hundred and twelve leaves cost nothing. Two hundred and fifty-six nodes at height one cost at most one swap each. A hundred and twenty-eight at height two cost at most two, and so on, up to the single root at height nine. The sum of nodes times height is less than n, because the number of nodes halves at each level while the height grows only by one. The script confirms it on a descending input, the worst case. Bottom-up construction makes one thousand and thirteen swaps, while repeated pushing makes eight thousand one hundred and ninety-four. Python's heapify uses the bottom-up method.",
}
