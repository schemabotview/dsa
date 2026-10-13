import type { Section } from '../types'

export const binarySearch: Section = {
  id: 'binary-search',
  title: 'Binary search, interval invariants, and boundary queries',
  scene: 'binary-search',
  focus: 'interval',
  slide: `## Binary search

On **sorted** data, each comparison can discard half of what remains.

### The interval invariant
- \`xs[:lo]\` are all **< target**; \`xs[hi:]\` are all **≥ target**
- Look at \`mid\`, then move \`lo\` or \`hi\` past it
- Stops when \`lo == hi\`: the first index holding a value ≥ target
- Θ(log n) comparisons: 7 weights need at most 3

### Boundary queries with duplicates
- \`bisect_left\`: first position of a key; \`bisect_right\`: one past the last
- Count of a key = right − left: three 800 g parcels
- A missing key returns where it **would** go: 1000 → 3

### Search is cheap; insertion is not
- Finding the slot is Θ(log n); \`insort\` then **shifts** Θ(n) items`,
  narration:
    "Sorting pays for itself through searching. On sorted data, a single comparison with the middle item tells us which half the target must be in, so the other half can be discarded. Repeating that halving finds the answer in about log n comparisons. Binary search is famous for off-by-one errors, and the cure is to write down an interval invariant, as the code on the board does. Everything before lo is less than the target. Everything from hi onwards is greater than or equal to the target. Between them is a region still unknown. Each step looks at the middle of that region. If the middle item is less than the target, lo moves just past it. Otherwise hi moves down to it. Either way the invariant still holds and the unknown region shrinks. When lo equals hi, the unknown region is empty, and the invariant says exactly what lo is: the first index whose item is at least the target. The memory card shows that final state for a target of twenty-five hundred: lo and hi meet at index four. With duplicates, there are two useful boundaries. The first position of a key, which Python's bisect left returns, and the position just after the last one, which bisect right returns. The output shows both agreeing with the hand-written version. Their difference counts the copies: three parcels of eight hundred grams. A missing key is not an error. Bisect returns the position where it would go, so a thousand would go at index three. One cost is worth separating. Finding the right slot in a sorted list is logarithmic. But inserting there, with insort, still shifts every later item, which is linear. A sorted list is excellent for lookups and slow for frequent insertions, which is the motivation for the search trees of chapter six.",
}
