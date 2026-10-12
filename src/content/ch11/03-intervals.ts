import type { Section } from '../types'

export const intervals: Section = {
  id: 'interval-scheduling',
  title: 'Interval scheduling and compatible choices',
  scene: 'intervals',
  focus: 'timeline',
  slide: `## Interval scheduling

One loading dock, many requested slots. Accept as many as possible.

### Three plausible rules
- **Earliest start**: 3 of 11, wrong
- **Shortest slot**: wrong on a small case, 1 where 2 is possible
- **Earliest finish**: 4, matching brute force on both

### Why earliest finish is safe
- The first slot to finish leaves the dock free **soonest**
- Exchange: swap any optimum's first slot for it; nothing else conflicts
- Then repeat on the slots that start after it

### Cost
- Sort by finish, one pass: O(n log n)
- Two slots are compatible when one ends before the other starts`,
  narration:
    "The classic greedy success story is interval scheduling. One loading dock receives requests for time slots, each with a start and a finish, and two slots conflict if they overlap. The goal is to accept as many slots as possible. Several greedy rules sound reasonable. Accept the slot that starts earliest. Accept the shortest slot, since it blocks the least time. Or accept the slot that finishes earliest. The script tries all three on the eleven slots drawn on the board, and checks them against brute force. Earliest start accepts only three, because a long slot starting at time zero blocks everything else. Shortest first matches the optimum of four on this instance, but a three-slot example shows it failing: a short slot overlapping two longer, compatible ones is accepted, and blocks both. Only earliest finish matches brute force on both instances. On the board, the four slots it chooses are highlighted. The exchange argument explains why it is always safe. The slot that finishes first leaves the dock free as early as possible. Take any optimal schedule, and replace its first slot with the earliest-finishing slot. That slot ends no later than the one it replaced, so it cannot conflict with anything else in the schedule, and the count is unchanged. Now the problem repeats on the slots that start after the chosen one finishes, and the same argument applies again. The algorithm is a sort by finishing time followed by one pass, taking each slot that starts after the last accepted slot finishes, n log n in total. Notice how precisely the result depends on the objective. Every slot counts the same here. The section after next changes that one assumption, and the rule stops working.",
}
