import type { Section } from '../types'

export const recurrence: Section = {
  id: 'state-and-recurrence',
  title: 'State meaning, recurrence, base cases, and correctness',
  scene: 'recurrence',
  focus: 'code',
  slide: `## State and recurrence

The hard part of DP is choosing the **state**. Say exactly what it means.

### Weighted dock slots, sorted by finish time
- **OPT(i)**: the best total value using **only the first i slots**
- **p(i)**: how many slots finish before slot i starts
- Base case: OPT(0) = 0, no slots, no value

### The recurrence: slot i is either out or in
- Out: OPT(i − 1)
- In: its value, plus OPT(p(i)), since every compatible earlier slot is among the first p(i)
- OPT(i) = max of the two

### Why it is correct
- Every plan for the first i slots either uses slot i or does not
- Each case is solved optimally by the smaller states: induction on i`,
  narration:
    "The hardest and most important step in dynamic programming is choosing the state, and the discipline that helps most is to say in words exactly what each state means. Take Chapter eleven's weighted dock slots, extended here to seven, and sort them by finishing time. Define OPT of i as the best total value achievable using only the first i slots in that order. Define p of i as the number of slots that finish no later than slot i starts. Those are exactly the slots that are compatible with slot i and come before it. The script prints p for each slot. The base case is simple: with zero slots, the best value is zero. Now the recurrence. Consider the last of the first i slots, slot i. Any plan either leaves it out or includes it. If it is left out, the best possible is OPT of i minus one, by the definition of the state. If it is included, it contributes its value, and every other slot in the plan must be compatible with it, which means it must be among the first p of i slots. The best way to choose those is OPT of p of i. So OPT of i is the larger of OPT of i minus one, and the value of slot i plus OPT of p of i. That sentence is the whole algorithm. The recurrence is written as a comment in the code, which is a good habit. Correctness follows by induction on i. Every plan for the first i slots falls into exactly one of the two cases, and each case is solved optimally by smaller states, assuming those are correct. Notice what the state remembers that greedy did not: for every prefix, the best value, not just the slots chosen so far. That extra information is what lets the algorithm discover that a long valuable slot beats three short ones.",
}
