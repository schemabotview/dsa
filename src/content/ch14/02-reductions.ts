import type { Section } from '../types'

export const reductions: Section = {
  id: 'reductions',
  title: 'Polynomial reductions and the direction of a hardness argument',
  scene: 'reduction',
  focus: 'direction',
  slide: `## Polynomial reductions

A **reduction** from A to B: turn any instance of A into an instance of B with the **same** answer, in polynomial time.

### What it proves
- A fast algorithm for B gives a fast algorithm for A
- So B is **at least as hard** as A

### Subset sum reduces to partition
- Partition: can these numbers split into two equal halves?
- Add s + t and 2s − t, where s is the total
- An even split exists **exactly when** some subset sums to t
- The output agrees for targets 9, 10 and 30

### Direction matters
- To show a new problem is hard, reduce a known hard problem **to** it
- Reducing it to a hard problem proves nothing about its difficulty`,
  narration:
    "The central tool for comparing problems is the reduction. A reduction from problem A to problem B is a procedure that transforms any instance of A into an instance of B with exactly the same answer, and does so in polynomial time. If such a reduction exists, then any fast algorithm for B immediately gives a fast algorithm for A: transform the instance, then solve it with B's algorithm. In other words, B is at least as hard as A. The script gives a concrete example. Subset sum asks whether some of the numbers add up exactly to a target t. Partition asks whether a set of numbers can be split into two halves with equal sums. The reduction takes a subset sum instance with total s, and adds two new numbers to it: s plus t, and two s minus t. The new total is four s, so an even split needs two s on each side. The two added numbers cannot be on the same side, since together they already make three s. So whichever side holds two s minus t must be completed by original numbers summing to exactly t. An even split exists exactly when a subset sums to t. The output checks this for three targets, and the direct answer and the answer via partition agree every time. The most important thing about reductions is their direction, and it is easy to get backwards. To show that a new problem is hard, reduce a problem already known to be hard to the new one. That shows the new problem is at least as hard. Reducing the new problem to a known hard problem shows only that it is no harder, which says nothing at all about whether it is difficult. Easy problems reduce to hard ones all the time.",
}
