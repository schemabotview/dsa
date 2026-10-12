import type { Section } from '../types'

export const modellingAndAssumptions: Section = {
  id: 'modelling-and-assumptions',
  title: 'Models, constraints, and assumptions',
  scene: 'modelling',
  focus: 'left-out',
  slide: `## Models and assumptions

A **model** keeps only what the computation needs, and says what it drops.

### The model
- **Data**: a list of \`Parcel\`s · **Query**: one \`pid\` · **Answer**: an index or \`None\`
- Left out on purpose: scanners, trucks, the time of day

### Constraints and objectives
- A **constraint** decides what is allowed: the feasible set
- An **objective** ranks what is allowed
- "Lightest parcel at North": depot is the constraint, weight the objective
- Decision, search and optimisation ask for yes/no, any answer, the best

### Assumptions behind every claim
- Exact \`pid\` comparison; no edits during the search
- One comparison is one step; the data is in memory
- A broken assumption breaks the claim **silently**`,
  narration:
    "Requests arrive in everyday language. A dispatcher at the North depot asks, where is parcel P three-seventeen? Before we can compute anything, that question has to become a model, which is a deliberate simplification that keeps only what the computation needs. Our model has three parts. The data is a list of parcel records. The query is one identifier string. The answer is a position in the list, or None. Just as important is what the model leaves out: scanners, trucks and the time of day. They are real, but they do not affect this lookup, so we drop them on purpose and write the omission down. Many problems ask for more than one right answer. They ask for the best of many acceptable ones, and two ideas keep those problems clear. A constraint decides which answers are allowed at all, and the allowed answers form the feasible set. An objective then ranks the feasible answers. For the question, which is the lightest parcel at North, being at North is the constraint and weight is the objective. The same situation can be asked as a decision, is there a North parcel under three kilograms, as a search, find one, or as an optimisation, find the lightest. Those forms differ a great deal in difficulty for harder problems, as the final chapter shows. Finally, no claim about an algorithm stands on its own. It holds under assumptions, and the bottom of the board names ours. Identifiers are compared exactly, so a lowercase p or a trailing space is a miss. Nobody edits the list during the search, because an index found a moment ago can go stale. Comparing two identifiers counts as one step, which is fair for short strings but not long ones. And the data is in memory, never waiting on a disk or a network. The reason to state them is that a broken assumption rarely announces itself. The code still runs. It just stops meaning what we said it meant.",
}
