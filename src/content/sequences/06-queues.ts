import type { Section } from '../types'

export const queues: Section = {
  id: 'queues-and-ring-buffers',
  title: 'Queues, circular buffers, and capacity management',
  scene: 'ring-buffer',
  focus: 'slots',
  slide: `## Queues and ring buffers

A **queue** is first in, first out: join at the back, leave from the front.

### The trap
- \`list.pop(0)\` shifts every remaining item: Θ(n) per dequeue
- A busy depot queue then costs Θ(n²) overall

### A ring buffer
- A fixed array, a \`head\` index and a \`size\`
- Tail slot: \`(head + size) % capacity\`; both operations Θ(1)
- Indices **wrap** round: \`P-512\` lands in slot 0

### Capacity management
- A full buffer must refuse, overwrite, block, or grow
- This one raises \`OverflowError\`: the policy is part of the contract
- A parcel queue must never drop silently; a sensor log may overwrite`,
  narration:
    "A queue is the opposite discipline to a stack. Items join at the back and leave from the front, so the first to arrive is the first served, like parcels waiting at a loading bay. There is a common trap when building a queue from a Python list. Appending at the back is cheap, but removing from the front with pop zero shifts every remaining item one place to the left. That is linear time for each removal, so a queue that handles n parcels does quadratic work overall. A ring buffer avoids the shifting entirely. It uses a fixed array, an index called head that marks the front, and a count of how many items are stored. The next free slot at the back is head plus size, taken modulo the capacity. Dequeuing reads the item at head and moves head forward by one, also modulo the capacity. Nothing ever moves, and both operations are constant time. The modulo is what makes the array behave like a circle. The board shows the state after five arrivals and two departures in a buffer of capacity four. The head has advanced to slot two, and the newest parcel, P five-twelve, has wrapped round into slot zero. Reading from head onwards, round the circle, gives the queue in order. A fixed capacity raises a question every queue design must answer: what happens when it is full? The buffer can refuse new items, overwrite the oldest, make the producer wait, or grow into a larger array. This one refuses, by raising an overflow error, as the last line of output shows. None of these choices is universally right. A sensor log might prefer overwriting, while a parcel queue must never silently drop a parcel. Whatever the choice, it belongs in the contract, alongside the operations themselves.",
}
