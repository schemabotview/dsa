import type { Section } from '../types'

export const traversals: Section = {
  id: 'traversals',
  title: 'Recursive and iterative traversals with explicit base cases',
  scene: 'traversals',
  focus: 'stack',
  slide: `## Traversals

A **traversal** visits every node once, in a chosen order.

### Three depth-first orders
- **Pre-order**: node, left, right; copies a tree top-down
- **In-order**: left, node, right; a BST's keys come out **sorted**
- **Post-order**: left, right, node; frees or totals children first

### Recursion with an explicit base case
- The empty subtree returns at once; every call shrinks the tree
- Correct by induction on the size of the tree

### The same traversal, iteratively
- Push nodes while going left; pop to visit; then go right
- The stack holds **exactly** the calls recursion would have pending
- Depth is the tree's height: deep trees need the explicit stack`,
  narration:
    "A traversal visits every node of a tree exactly once, and the interesting question is the order. The three depth-first orders differ only in when a node is visited relative to its subtrees. Pre-order visits the node first, then its left subtree, then its right, which is the natural order for copying a tree from the top down. Post-order visits both subtrees first and the node last, which suits freeing a tree or computing totals from the children upwards. In-order visits the left subtree, then the node, then the right subtree. For a binary search tree that order produces the keys in sorted order, as the output shows. The recursive version is short, and its base case is explicit: an empty subtree returns immediately. Every recursive call is on a smaller tree, so the recursion ends. Correctness follows by induction on the size of the tree. If the traversal is correct on both subtrees, then visiting the left subtree, then the node, then the right subtree visits every key in this tree in sorted order. The base case, the empty tree, is trivially correct. The same traversal can be written without recursion, using an explicit stack. Starting at the root, push nodes while moving left. When there is no further left child, pop a node, visit it, and move to its right child. The memory card shows the stack just before fifty is visited: fifty on top, then one hundred and four, then the root. Those are exactly the calls the recursive version would have waiting, which is the point. The call stack from chapter two is a stack like any other. The iterative version matters for deep trees. Both versions need stack space proportional to the height, but the explicit stack has no recursion limit, so it survives the badly shaped trees of section five.",
}
