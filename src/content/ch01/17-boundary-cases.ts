import type { Section } from '../types'

export const boundaryCases: Section = {
  id: 'boundary-cases',
  title: 'Boundary cases',
  scene: 'boundary-cases',
  focus: 'code',
  slide: `## Boundary cases

Bugs cluster at the **edges** of the input space. Test them on purpose.

### A checklist for sequence algorithms
- Empty input, and a single element
- Target first, target last, target absent
- Duplicates, where the contract chooses which one wins
- Large inputs, once cost matters

### A boundary on the caller's side
- Index \`0\` is a valid answer, and \`0\` is **falsy**
- \`if i:\` treats "found at the front" as "not found"
- Test the result with \`is not None\`

### Duplicates
- The contract says first match wins, so the answer is \`0\`
- A test that only checks "found" would miss a wrong index`,
  narration:
    "Bugs are not spread evenly across the inputs. They cluster at the edges, where a loop runs zero times, or once, or stops at the very last element. So boundary cases should be chosen on purpose rather than hoped for. For algorithms over sequences, a short checklist covers most of them. An empty input, and a single element. The target at the front, the target at the end, and a target that is absent. And duplicates, where the contract has to say which match wins. The script runs every item on that checklist against our baseline, and each result agrees with the contract. There is one more boundary, and it sits on the caller's side rather than in the function. Index zero is a perfectly good answer, but in Python the number zero counts as false in a condition. So a caller who writes, if i, will treat a parcel found at the very front as if it were not found at all. The last line of output shows it. The fix is to test the result with, is not None, which says exactly what the contract means. For the duplicate case, the contract says the first match wins, so the right answer is zero. A test that only checked that something was found would miss a wrong index. And once cost matters, large inputs join the checklist too.",
}
