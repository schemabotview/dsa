import type { Section } from '../types'

export const problemsAndInstances: Section = {
  id: 'problems-and-instances',
  title: 'Problems and instances',
  scene: 'problem-instances',
  focus: 'inst-empty',
  slide: `## Problems and instances

A **problem** says what answer every possible input deserves. An **instance** is one concrete input.

### The running example
- A delivery planner keeps a list of parcels, each with an identifier such as \`P-317\`
- The problem: given the list and an identifier, say **where** that parcel is
- One list and one target make one instance; the problem covers all of them

### Why the distinction matters
- An algorithm solves the **problem**, not a favourite instance
- The empty list and the missing target are instances too
- "It worked on my example" is a claim about **one** instance
- Specify the problem **before** choosing an algorithm, so there is something to be right about`,
  narration:
    "Every algorithm in this course starts from a problem, so it is worth being precise about what a problem is. A problem says what answer every possible input deserves. An instance is one particular input. Our running example is a small delivery planner. It keeps a list of parcels, and each parcel has an identifier, such as P three-seventeen. The problem we start with is lookup: given the list and an identifier, say where that parcel is. One specific list together with one specific target is a single instance. On the left are three of them. Four parcels with a target that is present. The same four parcels with a target that is absent. And an empty list. Each instance has exactly one required output, and an algorithm only solves the problem if it produces the required output for every instance, the awkward ones included. That is why a demonstration on one favourite example tells you very little. It is a statement about a single instance, and the problem is about all of them. So the order is always the same: specify the problem first, and only then choose an algorithm, because until the problem is written down there is nothing for an algorithm to be right about.",
}
