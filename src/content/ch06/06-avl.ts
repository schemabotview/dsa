import type { Section } from '../types'

export const avl: Section = {
  id: 'avl-trees',
  title: 'AVL rotations, stored heights, and rebalancing',
  scene: 'avl',
  focus: 'rotation',
  slide: `## AVL trees

Keep every node **balanced**: its subtrees' heights differ by at most 1.

### Stored heights
- Each node stores its height; \`fix\` recomputes it from the children
- Balance = left height − right height, checked on the way back up

### Rotations
- A rotation lifts a child above its parent: Θ(1) changes
- It **preserves the in-order sequence**: 50, 104, 221 before and after
- Outside imbalance: one rotation; inside: a **double** rotation

### The guarantee
- Seven **sorted** inserts give height 2, not 6
- Height ≤ about 1.44 log₂ n: every operation Θ(log n)
- Red-black trees trade looser balance for fewer rotations`,
  narration:
    "An AVL tree is a binary search tree that repairs its own shape. It keeps one extra invariant: at every node, the heights of the left and right subtrees differ by at most one. To check that cheaply, each node stores its own height, and a small function called fix recomputes it from the children's heights. After an insertion, the recursion returns back up the path to the root, fixing heights and computing the balance at each node, the left height minus the right height. If a balance reaches two or minus two, the node is repaired with a rotation. A rotation lifts a child above its parent. The board shows the simplest case. Inserting fifty, one hundred and four and two-twenty-one in order builds a chain leaning right, and the balance at fifty is minus two. A left rotation at fifty makes one hundred and four the root, with fifty as its left child and two-twenty-one as its right. Only a few references change, so a rotation is constant time. Crucially, it preserves the in-order sequence. Fifty, one hundred and four, two-twenty-one, before and after, so the search tree property survives. The code distinguishes four cases. When the imbalance is on the outside, left-left or right-right, one rotation fixes it. When it bends inwards, left-right or right-left, a first rotation straightens the bend and a second one fixes it. That is a double rotation. The output shows the guarantee in action. Seven keys inserted in sorted order, the worst order for a plain binary search tree, produce a perfectly balanced tree of height two. In general, an AVL tree's height is at most about one point four four times log base two of n, so every operation is logarithmic in the worst case. Red-black trees, used in many libraries, enforce a looser balance in exchange for fewer rotations on update.",
}
