import type { Section } from '../types'

export const dynamicArrays: Section = {
  id: 'dynamic-arrays',
  title: 'Dynamic arrays, geometric resizing, and amortised analysis',
  scene: 'dynamic-array',
  focus: 'out',
  slide: `## Dynamic arrays

A block has a fixed size, yet \`append\` must keep working.

### The doubling strategy
- When full, allocate a block **twice** as large and copy everything over
- Most appends cost Θ(1); a resize costs Θ(n)

### Amortised analysis
- Copies over \`n\` appends: 1 + 2 + 4 + … < **2n**, a geometric sum
- So the **amortised** cost per append is Θ(1)
- The output: under 2 copies per append, even at a million

### Amortised is not expected
- Amortised: a guarantee over **any** sequence of operations
- No randomness, no distribution; one append can still be slow
- A teaching model: CPython grows by a smaller factor, same argument`,
  narration:
    "An array's block has a fixed size, chosen when it is allocated. Yet a Python list lets you append forever. The structure that reconciles the two is the dynamic array. It keeps a block with some spare capacity. While there is room, an append writes into the next free slot, which is constant time. When the block is full, it allocates a new block twice as large, copies every existing item across, and then appends. That copy costs time proportional to the number of items, so a single append can be expensive. The question is what this costs over many appends. The script on the board is a teaching model of exactly this strategy, and it counts every element copied by a resize. Resizes happen when the size reaches one, two, four, eight, and so on, copying that many items each time. So over n appends the total copying is a geometric sum, one plus two plus four, up to the largest power below n, and that sum is less than two n. Spread across n appends, that is fewer than two copies per append, whatever n is. The output confirms it: one point four copies per append at five items, and about one at a million. This style of argument is called amortised analysis. It says that the total cost of any sequence of n appends is at most a constant times n, so each append costs constant time on average over the sequence. Amortised cost is not expected cost. There is no randomness and no assumed distribution. It is a guarantee for every sequence, even though one particular append, the one that triggers a resize, is slow. One honest caveat. The class here is a model. CPython grows lists by a smaller factor than two, with some extra headroom, but the argument is the same: any constant growth factor above one gives constant amortised time.",
}
