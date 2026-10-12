import type { Section } from '../types'

export const statingAssumptions: Section = {
  id: 'stating-assumptions',
  title: 'Stating assumptions',
  scene: 'assumptions',
  focus: 'frozen',
  slide: `## Stating assumptions

Every correctness or cost claim is true **under** some assumptions. Name them.

### For our lookup
- Identifiers are compared **exactly** — no trimming, no case folding
- The list is finite and fits in memory
- Nobody edits the list while the search runs
- One identifier comparison counts as one step

### Why write them down
- A broken assumption breaks the claim, often **silently**
- Long keys, concurrent edits or disk reads each change the cost
- Later chapters revisit every one of these

### Assumption or precondition?
- A **precondition** is part of the function's contract with its caller
- An **assumption** is about the setting in which a claim is made`,
  narration:
    "No claim about an algorithm stands on its own. Saying that our lookup is correct, or that it takes a certain number of steps, is only true under some assumptions, and the honest thing is to name them. Identifiers are compared exactly, so a lowercase p, or a stray space at the end, makes a miss rather than a match. The list is finite and fits in memory, so the search can finish and never waits on a disk or a network. Nobody edits the list while the search is running, because an index found a moment ago can point at a different parcel after an insertion. And comparing two identifiers counts as a single step, which is reasonable for short strings but not for very long ones. The reason to write these down is that a broken assumption rarely announces itself. The code still runs. It just stops meaning what we said it meant. Each of these assumptions comes back later in the course, when keys get long, when data lives on disk, or when the cost of a comparison has to be counted explicitly. It also helps to separate two words. A precondition is part of the function's contract with its caller. An assumption is about the setting in which a claim is made, such as how comparisons behave or where the data lives.",
}
