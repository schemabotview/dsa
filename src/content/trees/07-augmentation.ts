import type { Section } from '../types'

export const augmentation: Section = {
  id: 'augmented-trees',
  title: 'Augmentation, subtree sizes, ranks, and range queries',
  scene: 'augmented',
  focus: 'sized',
  slide: `## Augmented trees

Store a little extra at each node to answer new questions quickly.

### Subtree sizes
- Each node keeps \`size\` = 1 + size(left) + size(right)
- Inserts, deletes and rotations update it along their path

### Rank and range queries
- \`rank(key)\`: how many stored keys are smaller, in O(height)
- Going right, add the whole left subtree plus the node at once
- Keys in [100, 450] = rank(451) − rank(100) = **4**

### What augmentation can carry
- Anything computable from a node and its children: sums, minima, counts
- A Python \`dict\` has none of this: it is **not** an ordered tree`,
  narration:
    "A balanced search tree answers lookups in logarithmic time. With a small addition, it can answer much richer questions just as fast. The technique is called augmentation: store some extra information at each node, chosen so that it can be computed from the node and its children alone. The classic example is subtree size. Each node records how many nodes its subtree contains, which is one plus the sizes of its two children. The board shows the depot tree with those sizes, seven at the root and one at each leaf. Because a size depends only on the children, every insertion, deletion or rotation can update it in constant time per node along the path it already walks, so maintaining it costs nothing extra asymptotically. Sizes make rank queries possible. The rank of a key is how many stored keys are smaller. Walk down from the root as in a search. Whenever the walk goes right, every key in the left subtree, and the node itself, are smaller than the target, so add the left subtree's size plus one in a single step, without visiting those nodes. The output shows four keys smaller than four hundred: fifty, one hundred and four, two-twenty-one and three-seventeen. A range count follows directly. The number of keys between one hundred and four hundred and fifty is the rank just past the top of the range, minus the rank of the bottom, which is four. Both cost time proportional to the height. Any value that can be computed from a node and its children can be stored this way, such as the total weight of the parcels in a subtree, or the smallest deadline. It is worth contrasting with Python's dict. A dict keeps insertion order and answers exact lookups, but it is not an ordered search tree, and it has no efficient way to answer rank or range questions at all.",
}
