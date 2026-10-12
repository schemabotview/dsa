import type { Section } from '../types'

export const classes: Section = {
  id: 'p-and-np',
  title: 'P, NP, NP-hard, and NP-complete distinctions',
  scene: 'classes',
  focus: 'names',
  slide: `## P, NP, NP-hard, NP-complete

### The classes
- **P**: decision problems solvable in polynomial time
- **NP**: a yes-answer has a **certificate** checkable in polynomial time
- **NP-hard**: every NP problem reduces to it
- **NP-complete**: both in NP and NP-hard

### Verifying versus finding
- A subset of 22 weights summing to 50,000: checking it takes 8 additions
- Finding one may mean searching up to 2²² = 4,194,304 subsets

### What is and is not known
- Whether P = NP is **unresolved**
- No polynomial algorithm is known for any NP-complete problem
- NP-hard does **not** mean every instance is hard
- NP means checkable, **not** "not polynomial"`,
  narration:
    "Reductions organise problems into classes, and the names are worth getting exactly right. P is the class of decision problems that can be solved in polynomial time. Every problem in chapters three to thirteen with a polynomial algorithm, such as shortest paths or sorting stated as a decision, belongs to P. NP is the class of decision problems where a yes answer comes with a certificate that can be checked in polynomial time. The script shows the difference between checking and finding. It has twenty-two parcel weights and asks whether some of them sum to exactly fifty thousand. Given a certificate, a list of eight chosen weights, checking it takes eight additions and a comparison. Finding one, in the worst case, may mean searching through two to the twenty-two subsets, over four million. A problem is NP-hard if every problem in NP reduces to it, so it is at least as hard as anything in NP. A problem is NP-complete if it is both in NP and NP-hard. Subset sum and partition are NP-complete, and so is the decision version of the delivery tour problem. The table on the board collects these definitions. The most famous open question in computer science is whether P equals NP: whether every problem whose solutions can be checked quickly can also be solved quickly. It is unresolved. Nobody has found a polynomial algorithm for any NP-complete problem, and nobody has proved that none exists. Two misunderstandings are common. NP does not stand for not polynomial. And NP-hard does not mean that every instance is hard. It is a statement about the worst case. Many real instances are small, or structured, or have small numbers, and are solved exactly every day, as the knapsack DP of chapter twelve was.",
}
