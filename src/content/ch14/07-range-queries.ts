import type { Section } from '../types'

export const rangeQueries: Section = {
  id: 'range-query-structures',
  title: 'Prefix sums, Fenwick trees, and segment-tree range-query comparison',
  scene: 'range-queries',
  focus: 'compare',
  slide: `## Range queries

The operations decide the structure, as they have all course.

### Static data: prefix sums
- Chapter 3: build once, then any range total in O(1)
- A late correction to one hour leaves every later prefix **stale**

### Dynamic data: a Fenwick tree
- Each cell covers a block sized by the lowest set bit of its index
- Point update and prefix sum both walk O(log n) cells
- Hours 3–5: 7500, then 8200 after a +700 correction

### Segment trees
- One node per range, halving each time: O(log n) query and update
- Handles any **associative** aggregate: min, max, not just sums
- More memory and code than a Fenwick tree`,
  narration:
    "This section returns to a question from chapter three, because it shows the theme of the whole course in a small space: the operations a program needs decide the structure it should use. Chapter three's prefix sums answer any range total, such as the grams dispatched between hours three and five, with a single subtraction, after one linear pass to build them. But they assume the data never changes. The script corrects one hour's figure after the prefix sums were built, and the static answer is now stale, still seventy-five hundred, because every later prefix would need rebuilding, a linear cost per update. When updates and queries are mixed, a Fenwick tree, also called a binary indexed tree, supports both in logarithmic time. Each cell of its array covers a block of positions whose size is the lowest set bit of the cell's index. An update adds to the cells whose blocks contain the position, found by repeatedly adding the lowest set bit. A prefix query sums cells whose blocks tile the prefix, found by repeatedly removing it. Each walks only about log n cells. The output shows the Fenwick tree giving seventy-five hundred, and then eight thousand two hundred after the correction. A segment tree is the more general tool. It stores a node for every range produced by repeatedly halving the array, so any query range can be assembled from about log n nodes, and an update changes one path. Unlike a Fenwick tree, which needs an operation that can be undone, such as subtraction, a segment tree works with any associative operation, such as minimum or maximum, at the cost of more memory and code. The table compares all three, and the choice comes down to whether the data changes, and which aggregate is needed.",
}
