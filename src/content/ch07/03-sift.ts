import type { Section } from '../types'

export const sift: Section = {
  id: 'insert-and-remove',
  title: 'Insertion, removal, and upward/downward repair',
  scene: 'sift',
  focus: 'code',
  slide: `## Insertion and removal

Each operation breaks the invariant in **one** place, then repairs one path.

### Push: sift up
- Append at the end: the shape stays complete
- While smaller than its parent, swap with the parent
- Pushing 1: it rises from index 3 to the root

### Pop: sift down
- Take the root; move the **last** item into its place
- While larger than a child, swap with the **smaller** child
- Swapping with the smaller child keeps both subtrees valid

### Costs
- Each repair follows one path: O(log n) swaps
- Six pushes and six pops here: 8 swaps; output in sorted order`,
  narration:
    "Both heap operations follow the same plan. Make the change in a way that keeps the shape complete, accept that the order is now broken in one place, and repair it along a single path. To push, append the new item at the end of the array. That is the next free position on the bottom level, so the tree stays complete. Only one thing can now be wrong: the new item may be smaller than its parent. So compare them, and if the new item is smaller, swap them. Repeat from its new position until it is no smaller than its parent or reaches the root. This is called sifting up. The demo prints the array after each push. When one is pushed, it starts at index three, is smaller than its parent five, then smaller than three, and rises all the way to the root. To pop, the minimum is at the root, so take it. To keep the shape complete, move the last item in the array into the root's place. Now the root may be larger than a child. Swap it with the smaller of its two children, and repeat downwards until it is no larger than its children. This is sifting down. Swapping with the smaller child is essential. It puts the smallest of the three values on top, so the invariant holds for both subtrees at once. Swapping with the larger child would put the larger value above the smaller one. Each repair moves along one path between the root and a leaf, so push and pop each cost at most the height, which is logarithmic. The demo pops all six items and they come out in sorted order, using eight swaps in total. That observation, repeated popping produces sorted order, is the idea behind heapsort in section five.",
}
