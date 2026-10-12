import type { Section } from '../types'

export const preconditionsAndPostconditions: Section = {
  id: 'preconditions-and-postconditions',
  title: 'Preconditions and postconditions',
  scene: 'contract',
  focus: 'fn',
  slide: `## Preconditions and postconditions

A specification is a **contract** with two sides.

### The caller promises — precondition
- What must be true of the inputs **before** the call
- Here: a finite list of records, each with a string \`pid\`
- If it fails, the function owes nothing

### The function promises — postcondition
- What will be true of the result **after** the call
- Here: the **least** matching index, or \`None\` if there is none
- And the list is left unchanged

### Correct means
- Precondition holds ⇒ postcondition holds, for every instance
- A broken precondition voids the promise: any behaviour is then allowed`,
  narration:
    "A specification is easiest to read as a contract with two sides. The caller makes the first promise, called the precondition. It says what must already be true of the inputs before the function is called. For our lookup, the caller promises a finite list of parcel records, each with a string identifier, and a string target. The function makes the second promise, called the postcondition. It says what will be true of the result once the function returns. Ours promises the least index whose identifier equals the target, or None if no such index exists, and it promises not to modify the list. With both halves written down, correctness has an exact meaning. A function is correct if, for every instance where the precondition holds, the postcondition holds afterwards. Notice what that leaves out. If a caller passes something that breaks the precondition, say a list containing records with no identifier, the contract makes no promise at all. Whether the function then raises an error or returns nonsense is a separate design decision, and it should be made deliberately rather than by accident.",
}
