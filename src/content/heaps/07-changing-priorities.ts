import type { Section } from '../types'

export const changingPriorities: Section = {
  id: 'changing-priorities',
  title: 'Changing priorities, indexed heaps, and stale entries',
  scene: 'lazy',
  focus: 'designs',
  slide: `## Changing priorities

A parcel is escalated while it waits. Its heap entry must change.

### Indexed heap: update in place
- A map from item to its array index, kept up to date on every swap
- Change the priority, then sift up or down: O(log n)
- \`heapq\` has no such operation

### Lazy entries: push again, skip the old
- Push a **new** entry; record the live priority in a map
- On pop, discard entries whose priority is no longer live
- P-104 escalated to 1: 4 entries for 3 parcels; 1 stale left behind

### Costs
- Each update adds an entry: memory O(n + updates)
- Pops may skip stale entries, still O(log) each, amortised`,
  narration:
    "Priorities do not always stay fixed. A parcel can be escalated while it is waiting, and the queue has to reflect the change. In a heap, the entry is somewhere in the middle of the array, and there are two standard designs for changing it. The first is an indexed heap. Alongside the array, it keeps a map from each item to its current index, and every swap during a sift updates that map. To change a priority, look up the item's index, change the priority in place, and sift up or down as needed. That costs logarithmic time and keeps exactly one entry per item. It is efficient, but every operation must maintain the index map correctly, and Python's heapq module does not provide it. The second design is lazy, and it needs nothing beyond heapq. To change a priority, simply push a new entry with the new priority, and record the item's live priority in a dict. The old entry stays in the heap, now stale. When popping, check each entry against the dict, and quietly discard any entry whose priority is no longer the live one. The script escalates P one-oh-four from five to one. The heap now holds four entries for three parcels. Popping returns the parcels in the right order, with P one-oh-four first, and the stale entry is left behind, never returned. The cost of laziness is memory and some extra pops. The heap holds one entry per update, not per item, so memory grows with the number of updates. Pops occasionally discard stale entries, but each entry is popped at most once, so the total work stays logarithmic per entry. The table summarises the trade-off. This same choice will reappear in Dijkstra's algorithm, where the lazy design is usually the practical one in Python.",
}
