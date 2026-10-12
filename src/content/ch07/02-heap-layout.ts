import type { Section } from '../types'

export const heapLayout: Section = {
  id: 'binary-heap-layout',
  title: 'Binary heap layout, indexing, and heap invariants',
  scene: 'heap-layout',
  focus: 'array',
  slide: `## Binary heap layout

A **binary heap** is a complete binary tree stored level by level in an array.

### Index arithmetic, no pointers
- Children of i: **2i + 1** and **2i + 2**; parent: **(i − 1) // 2**
- Complete: every level full except the last, filled from the left
- So the height is ⌊log₂ n⌋, and there are no gaps in the array

### The heap invariant
- Every parent is ≤ its children: a **min**-heap
- So the minimum is always at index 0
- Siblings are **unordered**: the array is a heap, but not sorted

### Weaker than a BST, on purpose
- Only parent-child order: cheap to restore after each change`,
  narration:
    "The standard way to implement a priority queue is a binary heap, and its trick is that it is a tree stored without any pointers at all. A binary heap is a complete binary tree. Every level is full, except possibly the last, which is filled from the left. Because the shape is so regular, the tree can be laid out level by level in a plain array. The root goes at index zero, its two children at indices one and two, their children at three to six, and so on. Then the links are pure arithmetic. The children of the item at index i are at two i plus one and two i plus two, and its parent is at i minus one, floor-divided by two. The board shows the same heap twice, as a tree and as the array it is actually stored in, with the brackets marking each pair of siblings. The script checks the formulas: index one's children are three and four, holding seven and four, and index five's parent is index two. Completeness keeps the tree as short as possible, with height the floor of log base two of n, and it means the array never has gaps. The ordering rule is the heap invariant. In a min-heap, every parent is less than or equal to each of its children. Following parents upwards always reaches smaller values, so the smallest item is always at the root, index zero. That is all the invariant promises. Siblings can be in either order, and nothing relates the left subtree to the right one. The script confirms that this array is a valid min-heap, but it is not sorted. This is deliberately weaker than the binary search tree property of chapter six. It cannot answer general lookups, but it is much cheaper to restore after a change, which the next section shows.",
}
