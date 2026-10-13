import type { Section } from '../types'

export const applications: Section = {
  id: 'top-k-and-merging',
  title: 'Top-k selection, multiway merge, and scheduling',
  scene: 'topk',
  focus: 'code',
  slide: `## Heaps at work

A heap is the natural tool when you need the next best of a changing set.

### Top k from a stream
- Keep a **min**-heap of the k largest so far; its root is the weakest
- A heavier item replaces the root: O(log k) per item, O(n log k) total
- Memory O(k), however long the stream

### Multiway merge
- k sorted lists: a heap holds the current front of each
- Pop the smallest, push its successor: O(n log k)
- \`heapq.merge\` merges three depots' sorted parcel lists lazily

### Scheduling
- Simulations and job queues: always run the earliest next
- Dijkstra's shortest paths, Chapter 10, is a heap-driven schedule`,
  narration:
    "Heaps earn their place in many algorithms, always for the same reason: they deliver the next best item from a set that keeps changing. The first example is choosing the k largest items from a stream, such as the three heaviest parcels of the day. Sorting everything would work, but needs all the data at once and n log n time. Instead, keep a min-heap of the k heaviest seen so far. Its root is the lightest of those, the weakest member of the current top three. For each new parcel, if it is heavier than the root, replace the root with it and sift down. Each step costs log k, so the whole stream costs n log k, and the heap never holds more than k items, however long the stream is. The output agrees with Python's n largest function, which uses the same idea. The second example is merging several sorted lists into one, such as the parcel lists from three depots, each already sorted. A heap holds the current front item of each list. Pop the smallest, output it, and push the next item from the same list. For k lists holding n items in total, that costs n log k. Heapq's merge function does exactly this, and it is lazy, producing items one at a time, so it can merge files too large to fit in memory. The third family is scheduling. Event-driven simulations keep a heap of future events ordered by time and always process the earliest next. Job schedulers keep a heap of tasks ordered by deadline or priority. And one of the most important graph algorithms, Dijkstra's shortest paths in chapter ten, is at heart a heap-driven schedule: it repeatedly settles whichever place is currently closest.",
}
