import type { Section } from '../types'

export const loadFactor: Section = {
  id: 'load-factor-and-resizing',
  title: 'Load factors, resizing, and operation sequences',
  scene: 'resizing',
  focus: 'load',
  slide: `## Load factor and resizing

The **load factor** \`n / m\` decides how long chains and probe paths get.

### Keep it bounded
- Chaining tolerates \`n/m\` around 1; linear probing degrades sharply near 1
- This set doubles \`m\` before \`n/m\` passes **0.5**

### Rehashing
- Every key moves to a new bucket: \`hash % m\` changes with \`m\`
- One resize costs Θ(n); 1000 inserts made 1020 moves in total
- Doubling makes it **amortised** Θ(1) per insert, as in Chapter 3

### Sequences, not single operations
- Most inserts are cheap; a few are expensive
- Shrinking on deletes needs a **lower** threshold too, to avoid thrashing`,
  narration:
    "Both strategies depend on one number, the load factor: the number of keys n divided by the number of slots m. With chaining it is the average chain length. With open addressing it measures how full the array is, and probe paths grow very quickly as the array fills. Linear probing in particular degrades sharply as the load factor approaches one, so tables keep it well below that. The set on the board doubles its array whenever an insertion would push the load factor above one half. The plot shows the resulting sawtooth. The load factor climbs towards the threshold as keys arrive, then halves at each resize. A resize is called rehashing, and it is more than copying. Every key's bucket is its hash modulo m, and m has just changed, so every key must be placed again in the new array. One resize therefore costs time proportional to the number of keys. The output counts the moves: one thousand insertions caused one thousand and twenty moves in total. That is the dynamic array argument from chapter three again. Because the array doubles, resizes happen at sizes four, eight, sixteen and so on, and the total work is a geometric sum, linear in the number of insertions. So each insertion is amortised constant time, even though the occasional insertion that triggers a resize is slow. This is why hash table costs are stated over sequences of operations rather than single ones. Most operations are cheap, a few are expensive, and the total is linear. One more design point: a table that also shrinks when keys are deleted needs a lower threshold well below the upper one. Otherwise a sequence of alternating inserts and deletes at the boundary could trigger a resize on every operation, a failure called thrashing.",
}
