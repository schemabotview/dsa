import type { Section } from '../types'

export const formulations: Section = {
  id: 'decision-and-optimisation',
  title: 'Decision versus optimisation formulations and input encoding',
  scene: 'formulations',
  focus: 'out',
  slide: `## Decision and optimisation

The theory of hard problems is stated for **yes/no** questions.

### Two forms of van loading
- **Optimisation**: what is the heaviest load that fits in 9000 g? 8700
- **Decision**: is there a load of at least k grams? Yes for 8700, no for 8800
- Binary search over k turns 14 decision calls into the optimum

### Why decisions
- Equally hard here, up to a polynomial factor
- A yes/no answer can be checked against a **certificate**

### Input encoding matters
- Size is the **bits** needed to write the input down
- So the knapsack DP is pseudopolynomial: Chapters 2, 12`,
  narration:
    "This final chapter asks a different kind of question. Not how to solve a problem quickly, but whether a fast exact algorithm is likely to exist at all, and what to do when it is not. The theory behind that question is stated for decision problems, so the first step is to see how ordinary problems become yes or no questions. Take loading a van. As an optimisation problem, it asks for the heaviest load that fits within nine thousand grams, and the answer is eight thousand seven hundred. As a decision problem, it asks: is there a load of at least k grams that fits? For eight thousand seven hundred the answer is yes, and for eight thousand eight hundred it is no. The two forms are closely linked. Given a fast decision procedure, a binary search over k finds the optimum, and the script recovers eight thousand seven hundred from fourteen decision calls. Conversely, the optimum answers every decision at once. So, for problems like this one, the two forms are equally hard, up to a polynomial factor. Decisions are used because a yes answer can come with a certificate, a piece of evidence that can be checked, which section three builds on. One more point from earlier chapters returns here, the encoding of the input. Complexity theory measures input size in the number of bits needed to write the input down. Chapter two showed trial division being exponential in the number of digits, and chapter twelve showed the knapsack table growing with the numeric value of the capacity. Writing a capacity in binary takes only its number of bits, so a table indexed by the capacity itself is exponential in the input size. Whenever a claim about efficient algorithms is made, it is with respect to this encoding.",
}
