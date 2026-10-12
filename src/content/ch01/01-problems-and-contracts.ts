import type { Section } from '../types'

export const problemsAndContracts: Section = {
  id: 'problems-and-contracts',
  title: 'Inputs, outputs, and contracts',
  scene: 'problem-contract',
  focus: 'contract',
  slide: `## Inputs, outputs, and contracts

A **problem** fixes the right output for every input. An **instance** is one input.

### The contract
- **Precondition**, the caller's promise: a finite list of \`Parcel\` records, each with a string \`pid\`
- **Postcondition**, the function's promise: the **least** \`i\` whose \`pid\` matches, else \`None\`; the list unchanged
- **Correct** means: precondition holds ⇒ postcondition holds, on every instance
- A broken precondition voids the promise entirely

### Awkward instances decide the contract
- Empty list, absent target, duplicate \`pid\`s
- First match, all matches or unique-or-error: each changes the work done
- First match can stop early; all matches must scan the whole list
- This chapter: **first match**, \`None\` when absent`,
  narration:
    "Every algorithm in this course starts from a problem, so it is worth being precise about what a problem is. A problem says what answer every possible input deserves. An instance is one particular input. Our running example is a small delivery planner. It keeps a list of parcels, each with an identifier such as P three-seventeen, and the first problem is lookup: given the list and an identifier, say where that parcel is. At the top of the board are three instances: four parcels with a target that is present, the same parcels with a target that is absent, and an empty list. Each has exactly one required output, and an algorithm solves the problem only if it is right on all of them, the awkward ones included. The required outputs are pinned down by a specification, which is best read as a contract with two sides. The caller makes the first promise, the precondition: a finite list of parcel records, each with a string identifier. The function makes the second, the postcondition: it returns the least index whose identifier matches the target, or None if there is none, and it leaves the list unchanged. With both written down, correct has an exact meaning. Whenever the precondition holds, the postcondition must hold afterwards, on every instance. If a caller breaks the precondition, the contract promises nothing at all. The awkward instances are where the contract has to make real choices. When two records share an identifier, or the target is missing, there are several reasonable rules, shown at the bottom. Return the first match. Return every match. Or insist that identifiers are unique and raise an error otherwise. Each rule changes the work as well as the answer: first match can stop at the first hit, while all matches must always inspect the whole list. In this chapter we use first match, with None for a missing target.",
}
