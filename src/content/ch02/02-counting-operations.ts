import type { Section } from '../types'

export const countingOperations: Section = {
  id: 'counting-operations',
  title: 'Counting operations in sequential and nested computations',
  scene: 'counting',
  focus: 'rules',
  slide: `## Counting operations

Count the steps **first**; choose the notation afterwards.

### Two computations on the same list
- **Lookup**, target absent: one comparison per parcel, \`n\` in all
- **All-pairs check** for duplicate \`pid\`s: compare every pair once
- Inner loop from \`i + 1\`: (n − 1) + … + 1 + 0 = **n(n − 1)/2**

### Rules that cover most code
- Steps in sequence **add**; a loop **multiplies** by its iterations
- A loop whose bound depends on the outer index needs a **sum**
- Constant work per iteration is still counted, then simplified

### Reading the output
- Doubling \`n\` doubles lookup, but roughly **quadruples** all-pairs`,
  narration:
    "With a cost model agreed, the next skill is counting. The advice here is simple and easy to skip: count the steps first, and only afterwards choose a notation to summarise them. The script on the board instruments two computations on the same list of identifiers. The first is our lookup with a target that is absent, so it compares the target with every parcel once, n comparisons in all. The second checks whether any two parcels share an identifier, by comparing every pair exactly once. Its inner loop starts at i plus one, so the first parcel is compared with n minus one others, the next with n minus two, and so on down to zero. That sum is n times n minus one over two. A few rules cover most code. Steps that happen one after another add. A loop multiplies the cost of its body by the number of times it runs. When the inner loop's length depends on the outer index, as here, the honest count is a sum, and the sum is worth writing out before simplifying it. Constant work inside each iteration, like incrementing a counter, is counted too, and only simplified away later. The output shows why the distinction matters. As n doubles from four to eight to sixteen to thirty-two, the lookup count doubles each time. The all-pairs count goes six, twenty-eight, one hundred and twenty, four hundred and ninety-six, roughly four times larger at each step. At four parcels the two computations are close. At a million parcels, the first takes a million comparisons and the second about half a trillion. That gap, which appears only as n grows, is exactly what the notation in the next section is designed to capture.",
}
