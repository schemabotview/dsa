import type { Section } from '../types'

export const constraintsAndObjectives: Section = {
  id: 'constraints-and-objectives',
  title: 'Constraints and objectives',
  scene: 'constraint-objective',
  focus: 'feasible',
  slide: `## Constraints and objectives

Many problems ask not just for **an** answer but for the **best** one.

### Two different jobs
- A **constraint** decides what is allowed — the feasible set
- An **objective** ranks the feasible answers
- "Lightest parcel at North": the depot is the constraint, weight the objective

### Forms of the same question
- **Decision**: is there a North parcel under 3 kg? — yes or no
- **Search**: find one such parcel
- **Optimisation**: find the lightest such parcel

### Watch for
- An empty feasible set — the specification must say what to return
- And ties: two parcels that are equally light`,
  narration:
    "Lookup has exactly one right answer. Many problems are different: they ask for the best answer among many acceptable ones. Two ideas keep those problems clear. A constraint decides which answers are allowed at all. The allowed answers form the feasible set. An objective then ranks the feasible answers. Take the question, which is the lightest parcel at the North depot? Being at North is the constraint, so of our four parcels only P one-oh-four and P three-seventeen are feasible. Weight is the objective, and minimising it picks P one-oh-four at two and a half kilograms. The same situation can be asked in several forms. A decision question wants yes or no: is there a North parcel under three kilograms? A search question wants any one parcel that qualifies. An optimisation question wants the best one. These forms turn out to differ a great deal in difficulty for harder problems, which is a theme the final chapter returns to. One more case belongs in every such specification. If no parcel satisfies the constraint, the feasible set is empty, and the contract has to say what happens then. Ties need a rule as well, for the case where two parcels are equally light.",
}
