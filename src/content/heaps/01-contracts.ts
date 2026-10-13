import type { Section } from '../types'

export const contracts: Section = {
  id: 'priority-queue-contracts',
  title: 'Priority-queue contracts, ties, and application requirements',
  scene: 'pq-contract',
  focus: 'out',
  slide: `## Priority queues

Not a full order: just the **most urgent** item, quickly, as items keep arriving.

### The contract
- \`push(item, priority)\`, \`pop()\` the most urgent, \`peek()\` without removing
- No promise about the order of the rest

### Ties need a rule
- \`heapq\` compares whole entries: \`(1, a)\` vs \`(1, b)\` compares the parcels
- \`Parcel\` defines no order: \`TypeError\`
- Entry \`(priority, sequence, item)\`: ties go first in, first out

### Requirements decide the design
- Must priorities change after insertion? (section 7)
- Is the order of equal priorities part of the contract?
- Min or max first? \`heapq\` is a **min**-heap`,
  narration:
    "The delivery planner often needs only one thing from its pending parcels: the most urgent one, right now, while new parcels keep arriving. Sorting everything would answer that, but it does far more work than needed, and it would have to be redone after every arrival. A priority queue is the structure built for exactly this job. Its contract has three operations. Push adds an item with a priority. Pop removes and returns the most urgent item. Peek returns it without removing it. Notice what the contract does not promise: anything about the order of the remaining items. That freedom is what makes it cheaper than a sorted list. Python provides a priority queue through the heapq module, which keeps a list in heap order, and it has one subtlety worth seeing early. Heapq compares whole entries. If two entries are tuples with equal priorities, Python goes on to compare the next element of each tuple, here the parcels themselves. Parcel records define no ordering, so the script fails with a type error the moment two priorities tie. The standard fix is to make each entry a triple: the priority, then a sequence number that increases with every push, then the item. The sequence number breaks every tie, so the items are never compared. It also gives equal priorities a well-defined order: first in, first out, as the output shows. Two parcels of urgency one come out in the order they were pushed. Requirements like these shape the design and should be settled up front. Can a priority change after the item is queued? Is the order among equal priorities part of the contract? And is the smallest value the most urgent, or the largest? Heapq is a min-heap, so a larger-is-more-urgent priority has to be negated.",
}
