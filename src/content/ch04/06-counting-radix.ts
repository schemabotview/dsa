import type { Section } from '../types'

export const countingRadix: Section = {
  id: 'counting-and-radix-sort',
  title: 'Counting/radix sorting and key-range assumptions',
  scene: 'counting-radix',
  focus: 'out',
  slide: `## Counting and radix sort

When keys are small integers, sort **without comparing** them.

### Counting sort
- Count each key, then compute where each key's block starts
- Place items in input order: **stable**, Θ(n + k)
- Worth it only when \`k\` is not much larger than \`n\`

### Radix sort
- Sort by the **last** digit, then the next, with a stable sort each time
- Stability keeps earlier digits in order within equal later digits
- 3 passes of Θ(n + 10) sort 3-digit numbers

### The assumption
- Integer keys in a **known, small** range, or split into digits
- Not comparison sorts: the coming lower bound does not apply`,
  narration:
    "Every sort so far has worked by comparing items. When the keys have extra structure, we can do better than comparing. The simplest case is keys that are small integers, say from zero up to k minus one. Counting sort makes one pass to count how many items have each key. From the counts it works out where each key's block of output must start: key zero starts at zero, key one starts after all the zeros, and so on. A final pass places each item in its key's next free slot. Because that last pass reads the input in its original order, items with equal keys stay in order, so counting sort is stable. The total cost is n plus k. That is excellent when k is small, and terrible when k is huge, since a key range of a billion needs a billion counters. Radix sort extends the idea to larger keys by splitting them into digits. It sorts by the last digit first, then by the next digit, and so on, using a stable sort for each pass. The output shows three passes over seven parcel numbers. After the first pass they are ordered by their last digit. After the second, by their last two digits. After the third, completely. Stability is what makes this work. When two numbers share a tens digit, the second pass keeps them in the order the first pass gave them, which is the correct order by their units digit. Each pass costs n plus ten, so three-digit numbers take three linear passes. These algorithms rest on an assumption that must be stated: the keys are integers in a known, small range, or can be split into such digits. Under that assumption they are not comparison sorts at all, which is why the lower bound in the next section does not apply to them.",
}
