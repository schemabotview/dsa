import type { Section } from '../types'

export const stateAndExecution: Section = {
  id: 'state-and-execution',
  title: 'Program state and step-by-step execution',
  scene: 'execution',
  focus: 'out',
  slide: `## State and execution

The **state** is every name and its value at one moment. A **trace** lists the states in order.

### Tracing a hit
- \`parcels\` and \`target\` stay fixed; only \`i\` changes
- Record the same point every iteration, **before** acting on it
- Indices 0 and 1 are rejected; 2 matches and returns at once
- Index 3 is **never inspected**: cost depends on where the target is

### Tracing the no-match paths
- Absent target: every comparison is \`False\`, the loop runs out
- Empty list: \`range(0)\` is empty, the body runs **zero** times
- Both reach the final \`return None\`
- Always check the last index inspected and the line that answered`,
  narration:
    "To reason about a running program, we need a precise picture of where it is. That picture is the state: every name in scope and the value it refers to, at one moment. Inside our loop, the list and the target never change during the call. Only i moves, and expressions like parcels at i dot pid are derived from the rest. Each step of the program turns one state into the next, and a trace is simply the sequence of states in order. The script on the board is the baseline, instrumented to print its own state. The trick is to record the same point in every iteration, and to print before acting on the comparison, so that even the iteration that returns leaves a line. Searching for P three-seventeen, the output shows indices zero and one inspected and rejected. Index two matches, and the function returns two straight away. Notice what is missing. Index three was never inspected, which means the cost of a lookup depends on where the target sits, not only on how long the list is. The next chapter turns that observation into analysis. The cases that find nothing deserve traces of their own, because they take a different path. The tables at the bottom are traced by hand. With an absent target, every index is inspected, every comparison is false, nothing inside the loop returns, and control falls through to the final line, which returns None. An empty list is shorter still. A range of length zero produces no values, so the body runs zero times, and the very same final line answers. Two quite different instances reach one return statement for the same reason: no index matched. In any trace, two questions catch most mistakes. Which was the last index actually inspected? And which line produced the result?",
}
