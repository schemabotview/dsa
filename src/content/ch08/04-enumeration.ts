import type { Section } from '../types'

export const enumeration: Section = {
  id: 'permutations-subsets-combinations',
  title: 'Permutations, subsets, and combinations',
  scene: 'enumeration',
  focus: 'counts',
  slide: `## Subsets, permutations, combinations

Three families of candidates cover most exhaustive searches.

### Subsets: take or leave each item
- 2ⁿ subsets; a **bit mask** encodes one: bit k set means take item k
- Counting masks from 0 to 2ⁿ − 1 lists them all, no recursion needed

### Permutations: orderings
- Choose a first item, then permute the rest: n! orderings
- Route orders for n stops are permutations

### Combinations: subsets of a fixed size k
- C(n, k) = n! / (k! (n − k)!)
- Hand-written versions agree with \`itertools\`

### Sizes matter more than code
- 20 items: a million subsets, 2.4 × 10¹⁸ orderings`,
  narration:
    "Most exhaustive searches enumerate one of three standard families of candidates, and it is worth knowing how to generate each and how many there are. The first family is subsets. Each item is either taken or left, so n items have two to the n subsets. A compact way to enumerate them uses a bit mask: an integer whose bit k says whether item k is taken. Counting the integers from zero up to two to the n, minus one, visits every subset exactly once, with no recursion at all. The output lists the eight subsets of three depots in mask order. Bit masks are cheap for small n, but remember chapter two's point: an integer with many bits is no longer a single machine step. The second family is permutations, orderings of all the items. Choose which item goes first, then recursively order the rest. There are n factorial permutations. Every possible order of visiting n delivery stops is one, which is why route planning grows so quickly. The third family is combinations, subsets of a fixed size k, such as which two of three vans to send. Their number is n choose k, n factorial divided by k factorial and n minus k factorial. The script checks its hand-written generators against Python's itertools module and the counting formulas, and all agree. In practice, use itertools: it is correct and fast. Writing the generators by hand matters for understanding, and for adding pruning, which itertools cannot do. The table on the board carries the real lesson. At twenty items, there are about a million subsets, which is fine. There are two point four times ten to the eighteen orderings, which no computer will ever finish. Knowing which family a problem enumerates tells you, before writing any code, whether exhaustive search is even possible.",
}
