import type { Section } from '../types'

export const lowerBound: Section = {
  id: 'lower-bounds-and-strategy',
  title: 'Comparison lower bounds and choosing a search/sort strategy',
  scene: 'decision-tree',
  focus: 'tree',
  slide: `## Lower bounds and strategy

How fast **can** a comparison sort be?

### The decision-tree argument
- Each comparison has two outcomes: a binary tree of comparisons
- Every one of the \`n!\` orders needs its own leaf
- Depth ≥ log₂ n! = Θ(n log n); for 3 items, 3 comparisons
- So merge sort is **optimal** among comparison sorts

### What order buys beyond sorting
- **Two pointers** on sorted weights find a pair summing to 3400
- The same moves on unsorted data miss it: \`None\`

### Choosing a strategy
- Few lookups: scan; many lookups: sort once, then binary search
- Small integer keys: counting or radix; one rank: quickselect`,
  narration:
    "We now have sorting algorithms that take n log n time. Could a cleverer one do better? For comparison sorts, the answer is no, and the argument is one of the most elegant in the subject. Any algorithm that learns about the input only by comparing pairs of items can be drawn as a decision tree. Each internal node is a comparison with two outcomes, and each leaf is a final answer, one particular ordering of the input. The board shows the tree for three items, a, b and c. Since any of the n factorial orderings could be the right answer, the tree needs at least n factorial leaves. A binary tree of depth d has at most two to the d leaves, so the depth, the number of comparisons on the worst path, must be at least log two of n factorial. For three items that is three comparisons. The table shows how log of n factorial grows: it is Theta of n log n. So no comparison sort can beat n log n in the worst case, and merge sort is optimal among them. The bound assumes the comparison model. Counting and radix sorts escape it by using the structure of integer keys, which is no contradiction. Sorted order is useful beyond sorting. The two pointers technique finds two parcels whose weights add up to a capacity. Start one pointer at the lightest and one at the heaviest. If the pair is too light, move the low pointer up. If too heavy, move the high pointer down. On sorted weights each move safely discards one item, and the pair is found. On unsorted weights the same moves discard the wrong items, and the output shows it returning None, although a pair exists. Choosing a strategy follows from all this. For a few lookups, a linear scan is fine. For many, sort once and binary search. For small integer keys, use counting or radix sort, and for one rank, quickselect.",
}
