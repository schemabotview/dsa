import type { Section } from '../types'

export const quicksort: Section = {
  id: 'quicksort',
  title: 'Quicksort, partition invariants, and randomisation',
  scene: 'quicksort',
  focus: 'regions',
  slide: `## Quicksort

Divide and conquer the other way round: the work is in the **split**.

### Partition
- Pick a **pivot**; rearrange so smaller items precede it, larger follow
- Invariant: \`xs[lo:i] ≤ pivot < xs[i:j]\`, the rest unseen
- The pivot then sits in its **final** position; recurse on each side

### Pivot choice decides the cost
- Balanced splits: Θ(n log n); one-sided splits: Θ(n²)
- Last-element pivot on **sorted** input: 499,500 comparisons
- A **random** pivot: 10,576, expected Θ(n log n) on **every** input

### Practical details
- Recurse on the smaller side and loop on the larger: depth Θ(log n)
- In place, but **not stable**`,
  narration:
    "Quicksort is also divide and conquer, but it puts the work in the opposite place. Merge sort splits trivially and works hard to combine. Quicksort works hard to split, and then needs no combining at all. The splitting step is called partition. Choose one item as the pivot, then rearrange the subarray so that items less than or equal to the pivot come first and larger items come after. The memory card shows the invariant the partition loop maintains. From lo up to i, everything is at most the pivot. From i up to j, everything is greater. From j onwards, nothing has been looked at yet. Each step examines the next unseen item and, if it is small, swaps it into the first region. At the end the pivot is swapped into position i, which is its final place in the sorted output. Then each side is sorted recursively. Everything about quicksort's cost depends on the pivot. If each partition splits the items roughly in half, there are about log n levels and the total is n log n. If the pivot is always the largest or smallest item, one side is empty, there are n levels, and the cost is quadratic. The output shows exactly this. Using the last item as the pivot on input that is already sorted gives the worst possible splits: four hundred and ninety-nine thousand, five hundred comparisons for a thousand items. A random pivot on the same input needs ten thousand five hundred and seventy-six. With random pivots, the expected cost is n log n on every input, because the randomness belongs to the algorithm, the point made in chapter two. Two practical details. Recursing on the smaller side and looping on the larger keeps the stack depth logarithmic even in bad cases. And partition swaps items over long distances, so quicksort is not stable.",
}
