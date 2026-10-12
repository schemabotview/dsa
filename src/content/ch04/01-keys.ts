import type { Section } from '../types'

export const keys: Section = {
  id: 'keys-and-stability',
  title: 'Ordering, comparison keys, stability, and duplicates',
  scene: 'keys',
  focus: 'ties',
  slide: `## Keys and stability

To sort is to choose an **order**: a key, a direction, and a rule for ties.

### Comparison keys
- \`key=lambda p: p.weight\` orders parcels by one field
- A **tuple** key orders by depot, then by weight within a depot
- A valid order must be consistent: no \`a < b\` and \`b < a\`

### Duplicates and stability
- Equal keys are **ties**; three parcels weigh 800 g
- A **stable** sort keeps ties in their input order
- Python's \`sorted\` and \`list.sort\` are guaranteed stable

### Stability composes
- Sort by weight, then **stably** by depot: depot, then weight
- The output checks it equals the tuple-key sort: \`True\``,
  narration:
    "This chapter is about order: how to sort data, and how sorted data makes searching cheap. It starts with a question that is easy to skip. What exactly does sorted mean? A sort needs an order, and an order has three parts: a key that says what to compare, a direction, and a rule for what happens when two keys are equal. In Python the key is a function. Sorting parcels with a key that returns the weight orders them by weight. A tuple key orders by its first component, and breaks ties with the next, so a key of depot and weight sorts by depot, and by weight within each depot. Whatever the key, the comparisons must be consistent. If a is less than b, b must not also be less than a, or no sorted order exists. Equal keys are called ties, and duplicates are common in real data. In the script, three parcels weigh eight hundred grams. A sort is stable if tied items keep the order they had in the input. The table on the board shows those three parcels: P two-twenty-one, P five-twelve and P six hundred, still in their input order after sorting by weight. Python's built-in sorted function and the list sort method are guaranteed to be stable, by the language documentation. Stability is more than tidiness, because it composes. Sort by weight, and then sort the result stably by depot. Within each depot, the parcels stay in weight order, because the second sort never reorders ties. The result is the same as one sort by the tuple key, and the script checks that equality: true. This two-pass technique is how multi-key sorts are done when the keys have different directions, or come from different sources. It also explains why the later radix sort works. Not every sorting algorithm is stable, and the next sections show one that is not.",
}
