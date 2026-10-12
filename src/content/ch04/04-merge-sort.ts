import type { Section } from '../types'

export const mergeSort: Section = {
  id: 'merge-sort',
  title: 'Merge sort and divide-and-conquer',
  scene: 'merge-sort',
  focus: 'out',
  slide: `## Merge sort

**Divide and conquer**: split the problem, solve the halves, combine.

### The algorithm
- Split the list in half and sort each half recursively
- **Merge**: repeatedly take the smaller front item of the two halves
- Taking from the left on ties, \`<=\`, keeps it **stable**

### Why it is Θ(n log n)
- \`T(n) = 2T(n/2) + Θ(n)\`: each level of the tree merges \`n\` items
- \`log₂ n\` levels: 8 items need 3 levels of merging
- The same on every input: no bad cases

### The cost
- Θ(n) extra space for the merged lists; slices here copy too
- Python's built-in sort is a different, adaptive **merge-based** sort`,
  narration:
    "Merge sort is the first algorithm in this course built by divide and conquer. The idea has three steps: divide the problem into smaller parts, solve each part recursively, and combine the answers. For sorting, divide means split the list in half, and conquer means sort each half by the same method. All the real work is in combining, an operation called merge. Merge takes two sorted lists and builds one sorted list by repeatedly comparing their front items and taking the smaller. When the fronts are equal, it takes from the left half first, and that single choice, less than or equal rather than less than, is what makes merge sort stable. The script prints every merge, indented by recursion depth. Single items merge into pairs, pairs into fours, and the two fours into the final eight. Notice the two eights: the one that started on the left stays first. The running time follows from the recursion tree of chapter two. The recurrence is T of n equals two T of n over two, plus linear work for the merge. At every level of the tree, the merges together handle all n items, so each level costs linear time. There are log two of n levels, three for eight items, so the total is n log n. And unlike the simple sorts, that bound is the same for every input. There is no bad case. The price is space. Merging needs somewhere to put its output, so merge sort uses linear extra memory, and this teaching version also copies with slices. It is worth knowing what Python itself uses. The built-in sort is also merge-based. It finds runs that are already in order and merges them carefully, which makes it adaptive and stable. It is not the simple version on the board, and it is certainly not quicksort.",
}
