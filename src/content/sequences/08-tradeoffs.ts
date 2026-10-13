import type { Section } from '../types'

export const tradeoffs: Section = {
  id: 'representation-tradeoffs',
  title: 'Aliasing, mutation, locality, and representation trade-offs',
  scene: 'tradeoffs',
  focus: 'costs',
  slide: `## Representation trade-offs

No sequence representation is best at everything. Choose by **workload**.

### Read the table by operation
- Mostly indexing: a list; mostly both ends: a deque
- Changes at nodes you already hold: a linked list
- Fixed capacity, both ends: a ring buffer
- Count the operations the program performs **most**, then choose

### Locality
- Array items sit next to each other in memory: fast to scan
- Linked nodes are scattered; the model hides this, timings do not

### Mutation and aliasing
- \`[[0] * 3] * 3\` copies **references**: three names for one row
- Changing one cell changes every row; build rows with a comprehension`,
  narration:
    "This chapter has built several representations of a sequence, and none of them is best at everything. The table on the board compares them operation by operation. A Python list indexes in constant time and appends at the back in amortised constant time, but inserting or removing at the front shifts everything. A linked list changes the list in constant time at a node you already hold, but has to walk to find anything. A deque is constant time at both ends and slow in the middle. A ring buffer is constant time at both ends and by index, but has a fixed capacity. So the choice should follow the workload. Count which operations the program performs most often, and choose the structure that makes those cheap. If dispatch mostly looks parcels up by position, use a list. If it mostly adds and removes at the ends, use a deque. If it splices routes at known points, a linked list earns its keep. One factor does not appear in the table at all. Array items sit next to each other in memory, so scanning an array reads memory in order, which modern processors do very quickly. Linked nodes can be scattered anywhere, so walking them is slower than the same number of steps over an array. The cost model treats every step as equal. Timings, as the last chapter showed, do not. Each node is also a separate object with its own overhead, so a linked list uses more memory per item than an array. Mutation adds one more hazard, and it is a classic. Multiplying a list repeats its references, not its contents. So writing a list containing a row of zeros, times three, creates three references to one single row. The script sets one cell and every row changes, because there is only one row, and the is test confirms it. Building the rows with a comprehension creates three separate lists, and the same assignment then changes only one cell. It is the aliasing lesson from chapter one, now inside a data structure.",
}
