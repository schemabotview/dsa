import type { Section } from '../types'

export const bstSearch: Section = {
  id: 'bst-search-and-insert',
  title: 'Binary-search-tree search and insertion',
  scene: 'bst-search',
  focus: 'property',
  slide: `## BST search and insertion

A **binary search tree** keeps order with one rule at every node.

### The BST property
- All keys in the **left** subtree are smaller; all in the **right** are larger
- So one comparison chooses one subtree: a single path down

### Search
- 221: 317, go left; 104, go right; found, 3 nodes
- 300: path 317, 104, 221, then an empty subtree: **absent**
- Cost: O(height) comparisons

### Insertion
- Search for the key; insert a new leaf where the search fell off
- 300 goes exactly where its failed search ended
- An existing key overwrites its value: one entry per key`,
  narration:
    "A binary search tree combines the tree shape with the ordering idea from chapter four. It maintains one rule at every node, the binary search tree property. Every key in a node's left subtree is smaller than the node's key, and every key in its right subtree is larger. That single rule makes search very direct. At each node, one comparison tells us whether the target is here, in the left subtree, or in the right subtree, and the other subtree can be ignored entirely. So a search follows a single path from the root downwards, much like binary search on a sorted list. The demo prints those paths. Looking for two-twenty-one, the search starts at three hundred and seventeen and goes left, reaches one hundred and four and goes right, and finds two-twenty-one: three nodes. Looking for three hundred, it follows three-seventeen, one hundred and four and two-twenty-one, then tries to step into an empty right subtree. That proves three hundred is absent, because the property says it could not be anywhere else. A search costs comparisons proportional to the length of the path, which is at most the height of the tree. Insertion reuses the search. Search for the new key, and when the search falls off the tree, attach a new leaf at exactly that spot. The demo inserts three hundred and searches again: the new node sits right where the failed search ended. Every comparison made on the way down agreed with the property, so the property still holds. The code also states a duplicate-key policy, as chapter one insisted. Inserting a key that already exists overwrites its value, so the tree holds one entry per key, like a dict. Other policies are possible, such as keeping a count or a list of values per key, and the choice belongs in the contract.",
}
