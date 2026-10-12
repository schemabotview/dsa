import type { Section } from '../types'

export const arrays: Section = {
  id: 'arrays-and-indexing',
  title: 'Arrays, indexed access, layout models, and Python lists',
  scene: 'arrays',
  focus: 'block',
  slide: `## Arrays and indexing

An **array** stores items in one contiguous block of equal-size slots.

### Why indexing is one step
- Address of item \`i\` = **base + i × slot width**: one multiply, one add
- Any index costs the same, no walking
- A Python \`list\` is an array of **references**; the objects live elsewhere

### Prefix sums: indexing pays off
- \`prefix[i]\` = total of the first \`i\` hours, built in one Θ(n) pass
- Any range total is \`prefix[j] − prefix[i]\`: Θ(1) per query
- A **rolling** 3-hour total adds the new hour and drops the oldest

### Limits
- Valid only while the data does not change; an update costs Θ(n)`,
  narration:
    "This chapter is about sequences, and it starts with the most basic representation of all, the array. An array stores items in one contiguous block of memory, divided into slots of equal size. That layout is what makes indexing cheap. To find item i, the machine takes the address where the block starts, adds i times the slot width, and reads that location. It is one multiplication and one addition, whatever the index, so reaching item five thousand costs the same as reaching item zero. No walking is needed. The board's memory card is a model of that idea. A Python list is built on the same principle, with one twist. Its slots hold references to objects, not the objects themselves, so the parcel records live elsewhere in memory and the list's block just points at them. The exact layout is an implementation detail of CPython. What we rely on is that indexing a list is a constant-time operation. Indexing makes a useful technique possible, called prefix sums. Suppose the planner records the grams dispatched in each hour of a shift. In one pass we build a second list, where entry i holds the total of the first i hours. After that, the total for any range of hours is one subtraction: prefix at j minus prefix at i. The output checks it against a direct sum for hours two to four. Both give seven thousand five hundred. So a linear amount of preparation buys constant time for every later query. A related idea is the rolling total over a fixed window, here three hours. Instead of re-adding three numbers at each step, it adds the hour that enters the window and subtracts the hour that leaves. Both techniques assume the data does not change. If one hour's figure is corrected, every later prefix entry must be rebuilt, which costs linear time. The final chapter returns to structures that handle updates.",
}
