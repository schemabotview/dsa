import type { Section } from '../types'

export const arithmeticAssumptions: Section = {
  id: 'arithmetic-assumptions',
  title: 'Arithmetic assumptions',
  scene: 'arithmetic',
  focus: 'out',
  slide: `## Arithmetic assumptions

Numbers carry assumptions too. Python's are not the same as a textbook's.

### What the output shows
- **Integers are exact**: weights in grams sum without error
- **Floats round**: ten \`+= 0.1\` steps do not reach \`1.0\`
- \`sum()\` hides that since CPython 3.12 — an implementation detail
- \`//\` **floors**: \`-7 // 2\` is \`-4\`

### Integers have no fixed size
- \`2 ** 200\` is exact, with 201 bits
- But the cost of arithmetic **grows** with the digits

### For this course
- Weights and costs are whole numbers wherever possible
- Every cost claim says whether arithmetic counts as one step`,
  narration:
    "Numbers come with assumptions as well, and Python's differ from the ones many textbooks quietly make. The script on the left makes four of them visible. First, integers are exact. That is why the planner stores weights in whole grams, so adding them up never loses anything. Second, floating point numbers round. Adding nought point one to a running total ten times gives a value just short of one, so a test for equality with one fails. Interestingly, the built-in sum function returns exactly one here. Since CPython three point one two, sum adds floats with a compensated method that cancels most of the rounding. That is an implementation detail of a particular version, not a property of floating point arithmetic, so an algorithm should not depend on it. Third, the double slash operator rounds down, towards minus infinity, so minus seven floor-divided by two is minus four, not minus three. Finally, Python integers have no fixed size. Two to the power two hundred is stored exactly, with two hundred and one bits. That is convenient, but it means arithmetic on huge numbers is not a single step, a point the next chapter makes precise. For the rest of the course, weights and costs are whole numbers wherever possible, and every cost claim says whether arithmetic counts as a single step.",
}
