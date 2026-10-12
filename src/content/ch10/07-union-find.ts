import type { Section } from '../types'

export const unionFind: Section = {
  id: 'disjoint-set-union',
  title: 'Disjoint-set union, rank/size, and path compression',
  scene: 'union-find',
  focus: 'forest',
  slide: `## Disjoint-set union

Track which items are connected while connections keep being added.

### Operations
- \`find(x)\`: the representative, the root, of x's set
- \`union(a, b)\`: merge two sets; returns False if already joined
- Each set is a tree of **parent** pointers, roots point to themselves

### Two heuristics
- **Union by size**: hang the smaller tree under the larger root
- **Path compression**: \`find\` points every visited node straight at the root
- West was under Hub; after \`find(West)\`, it points at North directly

### Cost
- Together: amortised nearly **constant** per operation
- The bound is the inverse Ackermann function, below 5 for any real input`,
  narration:
    "Building a spanning tree edge by edge needs a fast answer to one question: are these two depots already connected by the edges chosen so far? The disjoint-set union structure, also called union-find, answers exactly that, while connections keep being added. It supports two operations. Find returns the representative of an item's set. Union merges the sets containing two items, and reports false if they were already in the same set, which is how a spanning tree algorithm detects that an edge would close a cycle. Internally, each set is a tree of parent pointers. Each item points to a parent, and the root points to itself and serves as the representative. Find follows parent pointers up to the root. Union finds both roots and makes one the parent of the other. Without care, these trees can become long chains, just like the unbalanced search trees of chapter six. Two simple heuristics prevent that. Union by size always hangs the smaller tree under the root of the larger one, so trees stay shallow. Path compression makes find do some housekeeping: after locating the root, it points every node on the path directly at the root, so later finds are almost instant. The demo performs four unions. The fourth, joining West and North, returns false, because they are already connected through East and Hub. Before that, West had been placed under Hub. The find for West compresses its path, and afterwards West points directly at North, as the printed parents show. South was never joined, so it remains a root on its own. With both heuristics together, the amortised cost per operation is nearly constant. It is bounded by an extremely slow-growing function, the inverse Ackermann function, which is below five for any input that could exist in practice.",
}
