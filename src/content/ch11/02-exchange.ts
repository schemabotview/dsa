import type { Section } from '../types'

export const exchange: Section = {
  id: 'exchange-arguments',
  title: 'Exchange arguments and preservation of an optimal solution',
  scene: 'exchange',
  focus: 'argument',
  slide: `## Exchange arguments

The standard proof that a greedy rule is safe.

### The problem
- Load **as many parcels as possible** into one van of capacity 6000 g
- Greedy rule: take parcels **lightest first** while they fit

### The argument
- Take any optimal answer O, and compare it with the greedy one
- At the first difference, greedy took g where O has some o instead
- g is no heavier than o, so swapping o for g still fits and keeps the count
- Repeat: O turns into the greedy answer **without losing value**

### Evidence is not proof
- 200 random instances agree with brute force
- The argument covers **every** instance; the tests only check it`,
  narration:
    "The standard way to prove a greedy rule correct is called an exchange argument. The idea is to take any optimal answer and show that it can be transformed, step by step, into the greedy answer without ever getting worse. If that is always possible, the greedy answer is optimal too. Here is a problem where it works. The planner wants to load as many parcels as possible into one van with a capacity of six thousand grams. The objective is the count of parcels, not their total weight. The greedy rule is to sort the parcels by weight and take them lightest first, as long as each one still fits. The proof runs as follows. Take any optimal loading O, and compare it with the greedy loading, both sorted by weight. Find the first position where they differ. There, greedy took some parcel g, while O has a different parcel o. Because greedy always takes the lightest remaining parcel, g weighs no more than o. So swap them: take o out of O and put g in. The total weight cannot increase, so the load still fits, and the number of parcels is unchanged, so it is still optimal. The new optimal answer agrees with greedy for one more position. Repeat the swap until there are no differences left. Then the greedy answer has been reached without losing value, which proves it is optimal. The code on the board also checks the claim on two hundred random instances, comparing greedy with brute force over every subset, and they agree every time. It is worth being clear about what each piece contributes. The tests are evidence, and they would catch a mistake in the argument or the code. But only the argument covers every possible instance, including all the ones never tested. That is the same division of labour as in chapter one.",
}
