import type { Section } from '../types'

export const tracingMisses: Section = {
  id: 'tracing-misses',
  title: 'Tracing a miss and an empty list',
  scene: 'trace-miss',
  focus: 'empty',
  slide: `## Tracing a miss and an empty list

The paths with **no match** deserve a trace of their own.

### An absent target
- Every index is inspected; every comparison is \`False\`
- The loop ends when \`range\` runs out, with no return inside it
- Control reaches the final \`return None\`

### An empty list
- \`range(0)\` yields nothing, so the body runs **zero** times
- The same final line answers it

### What to check in any trace
- The last index inspected, and the line that produced the result
- A loop that never ran is still a result to check
- Trace the **shortest** input before the typical one`,
  narration:
    "It is tempting to trace only the case that finds something. The cases that find nothing deserve their own trace, because they take a different path through the code. When the target is absent, every index is inspected and every comparison is false. Nothing inside the loop returns, so the loop simply runs out of indices, and control falls through to the final line, which returns None. An empty list takes an even shorter path. A range of length zero produces no values, so the body of the loop runs zero times, and the very same final line produces the answer. Two quite different instances arrive at the same return statement for the same reason: no index matched. When you trace any loop, two questions catch most mistakes. Which was the last index actually inspected? And which line produced the result? If the last index inspected is not the final element, or if the result came from a line you did not expect, the trace has found something worth a closer look. A useful habit is to trace the shortest input first, before the typical one, because a loop that never runs is still a result that has to be right.",
}
