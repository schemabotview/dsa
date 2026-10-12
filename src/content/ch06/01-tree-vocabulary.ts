import type { Section } from '../types'

export const treeVocabulary: Section = {
  id: 'tree-vocabulary',
  title: 'Tree vocabulary, representations, and height',
  scene: 'tree-anatomy',
  focus: 'tree',
  slide: `## Trees

A **tree** is a hierarchy: one **root**, and every other node has exactly one **parent**.

### Vocabulary
- **Children**, **leaves** (no children), **internal** nodes (some)
- **Depth** of a node: edges from the root; **height** of a tree: the deepest depth
- A **binary** tree: at most a left and a right child per node

### Representations
- Linked nodes with \`left\` and \`right\` references, as here
- Arrays by index, for complete trees; child lists for many children

### Height, defined recursively
- Empty tree: −1; otherwise 1 + the taller child's height
- 7 nodes, height 2: every lookup in this chapter costs O(height)`,
  narration:
    "Lists arrange items in a line. Trees arrange them in a hierarchy, and that shape is what lets ordered data be both searched and changed quickly. A tree has one node at the top, called the root. Every other node has exactly one parent, the node directly above it, and the nodes directly below a node are its children. A node with no children is a leaf, and a node with at least one child is internal. The board shows the tree this chapter keeps returning to, an index of depot numbers with three hundred and seventeen at the root. Two measurements matter. The depth of a node is the number of edges on the path from the root down to it, so the root has depth zero. The height of the tree is the greatest depth of any node, two here. In a binary tree, each node has at most two children, a left child and a right child, and binary trees are this chapter's focus. A tree can be stored in several ways. The examples use linked nodes, each holding a key and references to its left and right children, much like the linked lists of chapter three. When a tree is complete, filled level by level, it can be stored in a plain array with no references at all, which is exactly how the heap of the next chapter works. And when nodes can have many children, each node can keep a list of them. Trees are naturally recursive. A tree is either empty, or a root with a left subtree and a right subtree, which are trees themselves. So measurements are defined recursively too. The height of an empty tree is minus one. Otherwise it is one plus the height of the taller child. The script computes size, height and leaves this way. Height is the number to watch, because every operation in this chapter follows one path from the root, and costs time proportional to the height.",
}
