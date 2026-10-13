import type { Section } from '../types'

export const height: Section = {
  id: 'height-and-degeneration',
  title: 'Height, skewed trees, and degeneration',
  scene: 'skew',
  focus: 'shapes',
  slide: `## Height and degeneration

Every operation costs O(**height**), and nothing so far controls the height.

### The shape depends on insertion order
- Sorted keys always go right: a **chain** of height n − 1
- 1000 sorted inserts: height **999**, a linked list with extra steps
- The same keys shuffled: height 21

### What the numbers mean
- Best possible for 1000 keys: height 9, about log₂ n
- Random order gives Θ(log n) height **on average**, not guaranteed
- Real data often arrives sorted, or nearly: dates, IDs, timestamps

### Recursion depth
- A chain recursion needs 1000 frames: the script raises the limit
- To guarantee Θ(log n), the tree must **rebalance** itself`,
  narration:
    "Every binary search tree operation so far costs time proportional to the height of the tree. Nothing so far keeps the height small, and the shape of the tree depends entirely on the order in which keys arrive. Consider inserting the keys one, two, three and four in sorted order. Each new key is larger than everything already present, so it always goes right. The tree becomes a chain, drawn on the board, with height n minus one. It is a linked list with extra steps, and search in it is linear. Beside it, the same four keys inserted in the order three, one, four, two make a bushier tree of height two. The script measures this at a thousand keys. Inserted in sorted order, the tree has height nine hundred and ninety-nine. Inserted in a shuffled order, the same keys give a tree of height twenty-one. And the best possible height for a thousand keys is nine, about log base two of n. Random insertion orders produce trees of logarithmic height on average, which is a reassuring result. But an average over random orders is not a guarantee, and real data is rarely in random order. Parcel identifiers are often issued in sequence, and dates and timestamps arrive sorted by nature. So the bad case is not an exotic adversary. It is ordinary data. The skewed tree also strains recursion. The recursive height function on a chain of a thousand nodes needs a thousand stack frames, more than Python's default limit, which is why the script raises the limit, and why the iterative traversals of section two matter. To guarantee logarithmic height whatever the insertion order, the tree has to repair its own shape as it changes. That is called rebalancing, and the next section shows the classic way to do it.",
}
