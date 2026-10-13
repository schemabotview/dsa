import type { Section } from '../types'

export const simpleSorts: Section = {
  id: 'insertion-and-selection-sort',
  title: 'Insertion sort and selection sort as contrasting baselines',
  scene: 'simple-sorts',
  focus: 'out',
  slide: `## Insertion and selection sort

Two simple Θ(n²) baselines that behave very differently.

### Insertion sort
- Invariant: \`xs[:i]\` is sorted; shift larger items right to place \`xs[i]\`
- **Adaptive**: 0 shifts on sorted input, n(n − 1)/2 = 4950 reversed
- Stable, in place, and fast on nearly sorted data

### Selection sort
- Invariant: \`xs[:i]\` holds the \`i\` smallest, in final order
- Always n(n − 1)/2 comparisons, whatever the input
- At most \`n − 1\` swaps: useful when writes are expensive

### Stability lost
- A long-distance swap jumps one tie over another
- \`(2, 'b')\` ends up before \`(2, 'a')\`: **not stable**`,
  narration:
    "Before the fast algorithms, two simple ones, which serve as baselines and teach two different invariants. Insertion sort grows a sorted prefix. Its invariant is that the first i items are sorted among themselves. To extend it, it takes the next item and shifts every larger item in the prefix one place right, until the gap is where the new item belongs. Selection sort uses a stronger invariant. The first i positions hold the i smallest items overall, already in their final places. To extend it, it scans the rest of the list for the minimum and swaps it into position i. Both are quadratic in the worst case, but the instrumented script shows how differently they behave. On a hundred items that are already sorted, insertion sort shifts nothing at all, because every item is already in place. On reversed input it shifts four thousand nine hundred and fifty times, which is n times n minus one over two. Its cost depends on how far the input is from sorted, which is why it is called adaptive, and why it is fast on nearly sorted data. Selection sort makes exactly four thousand nine hundred and fifty comparisons on both inputs. It cannot notice that work is already done. It does have one strength: it makes at most n minus one swaps, which matters when writing an item is far more expensive than comparing it. Insertion sort is stable, since an item never moves past an equal one. Selection sort is not, and the last line shows why. Sorting pairs by their number alone, the swap that brings the one to the front sends two a to the back, past its equal two b. The tie's input order is lost. A long-distance swap is the usual way stability breaks, and it returns in quicksort.",
}
