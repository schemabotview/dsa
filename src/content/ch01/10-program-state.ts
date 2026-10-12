import type { Section } from '../types'

export const programState: Section = {
  id: 'program-state',
  title: 'Program state',
  scene: 'program-state',
  focus: 'state',
  slide: `## Program state

The **state** of a running program is every name and the value it refers to, at one moment.

### At the paused line
- \`parcels\` and \`target\` are fixed for the whole call
- \`i\` is the only thing the loop changes
- \`parcels[i].pid\` is **derived** from the rest

### Why state is the right unit
- Each step turns one state into the next
- A trace is a list of states, in order
- An invariant is a fact that holds in **every** state at a chosen point

### Watching state
- A debugger such as \`pdb\`, or a \`print\`, exposes the same snapshot
- **Where** you observe matters as much as what you print
- Recursion, later, keeps one such snapshot per active call`,
  narration:
    "To reason about a running program, we need a precise picture of where it is. That picture is called the state. It is every name in scope and the value each one refers to, at one particular moment. The code on the left is paused just before the comparison, the second time round the loop. At that moment, parcels refers to the list of four records, target is the string P three-seventeen, and i is one. The expression parcels at i dot pid is not a separate variable at all. It is derived from the others, and here it evaluates to P two-twenty-one. Separating what is stored from what is derived matters, because only the stored parts can change. In this loop, the list and the target never change during the call. Only i moves. That makes the whole execution easy to describe. Each step of the program turns one state into the next. A trace is just the sequence of states in order. And, looking ahead, an invariant is a fact that is true in every state at a chosen point in the code, such as the top of the loop. A debugger such as p d b, or a simple print, exposes exactly this snapshot, and where you choose to observe matters as much as what you print. Later, when functions call themselves, there will be one such snapshot for every call that is still running.",
}
