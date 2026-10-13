import type { Section } from '../types'

export const btrees: Section = {
  id: 'b-trees',
  title: 'B-trees and external-memory cost models',
  scene: 'btree',
  focus: 'tree',
  slide: `## B-trees

When data lives on disk, the cost model changes.

### A different cost model
- Reading one block from storage costs far more than any comparison
- Count **block transfers**, not comparisons

### Wide nodes
- A B-tree node holds many sorted keys and many children: one **block**
- Search scans a node's keys, then reads **one** child block
- All leaves at the same depth; nodes split and merge to stay half full

### Fewer levels, fewer reads
- 10⁹ keys: 30 block reads with 2-way nodes, **4** with 256-way
- Databases and file systems index with B-trees
- The best structure depends on what the model **counts**`,
  narration:
    "Everything so far has assumed that data lives in memory, where following a reference costs about the same as a comparison. When the data lives on disk or another slow store, that assumption fails, and the cost model has to change. Reading one block from storage takes far longer than thousands of comparisons on data already in memory. So for data on disk, the honest measure of cost is the number of blocks transferred, and comparisons inside a block are nearly free by comparison. Under that model, a binary tree is a poor choice. Each node holds one key, so every level of the tree means another block read, and a billion keys need about thirty levels. A B-tree is designed for this model. Each node holds many keys in sorted order and has one more child than it has keys, and a node is sized to fill one block. The board shows a small example. The root holds three-seventeen and six hundred, and its three children hold the keys below, between and above them. A search reads one node, scans its keys to choose a child, and reads one child block per level. B-trees keep all their leaves at the same depth, and when a node overflows it splits in two, so every node stays at least half full. Wide nodes make the tree very shallow. The output computes the number of levels for a billion keys. With two-way branching it is thirty block reads per lookup. With two hundred and fifty-six way branching, it is four. This is why databases and file systems index their data with B-trees and their variants. The lesson reaches beyond trees. The best data structure depends on what the cost model counts. Change what is expensive, and the right answer changes with it, which is a theme the final chapter returns to.",
}
