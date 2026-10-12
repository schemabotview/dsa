import type { Section } from '../types'

export const tracingASearch: Section = {
  id: 'tracing-a-search',
  title: 'Tracing a search',
  scene: 'trace-hit',
  focus: 'out',
  slide: `## Tracing a search

A **trace** records the state at the same point in every iteration.

### Instrumenting the loop
- Print \`i\`, the inspected \`pid\` and the comparison result
- Print **before** acting on the comparison
- Add a final line for the exit that has no match

### What this trace shows
- Indices 0 and 1 are inspected and rejected
- Index 2 matches, and the function returns at once
- Index 3 is **never inspected**: first match stops the work

### Instrumenting safely
- A \`print\` should report state, never change it
- Remove the instrumentation once the trace has done its job`,
  narration:
    "A trace makes the sequence of states visible. The trick is to record the state at the same point in every iteration, so the lines can be compared with each other. Here the loop prints three things: the index, the identifier it is about to inspect, and whether that identifier matches. It prints before acting on the comparison, so even the iteration that returns gets a line. There is also a final print for the path where the loop ends without a match, since that path otherwise leaves no record. Searching for P three-seventeen, the output shows indices zero and one inspected and rejected. Index two matches, and the function returns two straight away. Notice what is not in the output. Index three was never inspected at all. That is the first-match contract at work, and it means the cost of this lookup depends on where the target is, not only on how long the list is. A target at the front costs one comparison. A target at the end, or an absent one, costs a comparison for every parcel. The next chapter turns that observation into a careful analysis. One rule keeps instrumentation honest: a print should report the state and never change it, and it should be removed once the trace has done its job.",
}
