import type { Section } from '../types'

export const deques: Section = {
  id: 'deques',
  title: 'Deques and operations at both ends',
  scene: 'deque',
  focus: 'ends',
  slide: `## Deques

A **deque**, double-ended queue, adds and removes at **both** ends.

### \`collections.deque\`
- \`append\`, \`appendleft\`, \`pop\`, \`popleft\`: all Θ(1)
- One structure serves as a stack **or** a queue
- Use it instead of \`list.pop(0)\` for any queue
- An urgent parcel can jump to the front with \`appendleft\`

### Bounded history with \`maxlen\`
- A full deque drops from the **opposite** end on append
- \`deque(maxlen=3)\` keeps only the last three scans
- This is the **overwrite** policy, chosen deliberately

### What it is not
- \`d[i]\` near the middle is Θ(n): it is not an array
- \`rotate\` moves items between ends, \`k\` steps for \`rotate(k)\``,
  narration:
    "A deque, short for double-ended queue, generalises both stacks and queues. It allows items to be added and removed at both ends. Python provides one in the collections module, and its four end operations, append, append left, pop and pop left, all run in constant time. So a single structure can serve as a stack, using one end, or as a queue, adding at one end and removing at the other. For any queue in Python, a deque is the standard replacement for popping from the front of a list. The script on the board uses a deque as the loading order at a depot. Ordinary parcels join at the back with append. An urgent parcel jumps the queue with append left, so it is served next. The output shows the urgent parcel at the front, and then one parcel leaving from each end. Deques have a second useful feature, a maximum length. When a deque created with max len is full, appending at one end silently drops an item from the opposite end. That makes a bounded history very easy to keep. Here the deque holds only the last three scanned parcels. After four scans, the oldest has fallen off the front, as the output shows. Remember the earlier point about capacity management: this is the overwrite policy, chosen deliberately. It is also worth knowing what a deque is not. It is not an array. CPython builds it from linked blocks of items, so indexing near either end is fast, but indexing near the middle takes time proportional to the distance. If a program mostly reads items by position, a list is the better choice. Finally, rotate moves items from one end to the other. Rotating by one, at the end of the script, takes the last item and puts it at the front. Rotating by k costs time proportional to k, since each step is one move between the ends.",
}
