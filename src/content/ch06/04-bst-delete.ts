import type { Section } from '../types'

export const bstDelete: Section = {
  id: 'bst-deletion',
  title: 'Binary-search-tree deletion and duplicate-key policies',
  scene: 'bst-delete',
  focus: 'two',
  slide: `## BST deletion

Remove a key and keep the BST property. Three cases.

### Leaf or one child
- **Leaf**, 50: replace it with an empty subtree
- **One child**, 400: its only child, 420, takes its place
- Both are a single reference change once the node is found

### Two children
- 317 has both: find its **successor**, the smallest key in its right subtree
- Copy 420 into the node, then delete 420 from the right subtree
- The successor has no left child, so that second delete is an easy case

### Checking the result
- In-order stays sorted after every delete; the root changes to 420
- Cost: O(height), one path to the node and one to the successor`,
  narration:
    "Deletion is the operation where binary search trees need the most care, because removing a node must not break the ordering of everything around it. There are three cases, and the code handles each one explicitly. The first case is a leaf, a node with no children. Deleting fifty simply replaces it with an empty subtree. The second case is a node with one child. Four hundred has a single right child, four hundred and twenty. Deleting it lets that child take its place. Every key in the child's subtree was already on the correct side of four hundred's parent, so the property still holds. Both cases come down to changing one reference, once the node has been found. The third case is a node with two children, and it needs an idea. Three hundred and seventeen, the root, has both. Removing it would leave two subtrees needing a single parent. Instead, find its successor: the next larger key, which is the smallest key in its right subtree. Here that is four hundred and twenty. The successor is larger than everything on the left and smaller than everything else on the right, so it can take the deleted key's place without breaking the property. Copy four hundred and twenty into the root's position, then delete the original four hundred and twenty from the right subtree. That second deletion is always one of the easy cases, because the smallest key in a subtree has no left child. The output checks the result in the simplest way possible: after every deletion, the in-order traversal is still sorted, and after the third, the root's key has become four hundred and twenty. Each deletion follows at most two paths down the tree, one to the node and one to its successor, so the cost is again proportional to the height.",
}
