import type { Section } from '../types'

export const heapsort: Section = {
  id: 'heapsort',
  title: 'Heapsort and its time/space/stability trade-offs',
  scene: 'heapsort',
  focus: 'tradeoffs',
  slide: `## Heapsort

Build a heap, then pop repeatedly. Done **in place**, it needs no extra array.

### The algorithm
- Build a **max**-heap bottom-up: Θ(n)
- Swap the maximum to the end; shrink the heap; sift down the new root
- The sorted part grows from the back: n − 1 rounds of O(log n)

### Trade-offs
- Θ(n log n) worst case, like merge sort, with Θ(1) extra space
- **Not stable**: the three 800 g parcels change their relative order
- Jumps around the array: poor locality, often slower in practice

### When to use it
- Guaranteed time and no extra memory, with stability unneeded`,
  narration:
    "If popping a heap repeatedly produces items in sorted order, then a heap gives a sorting algorithm. Heapsort does it in place, inside the original array, with no second array. First, build a max-heap from the whole array using the bottom-up method, which takes linear time. The largest item is now at the root, index zero. Swap it with the last item of the heap. The largest item is now in its final sorted position at the end, so shrink the heap by one to leave it there, and sift the new root down to restore the heap. Repeat. Each round moves the next largest item into place just before the previous one, so the sorted part grows from the back of the array while the heap shrinks at the front. There are n minus one rounds, each costing a logarithmic sift-down, so heapsort is n log n in the worst case. The table on the board compares it with chapter four's algorithms. Like merge sort, heapsort guarantees n log n, but it needs only constant extra space instead of merge sort's linear buffer. Unlike quicksort, it has no quadratic worst case. The costs are elsewhere. Heapsort is not stable. The output sorts five parcels by weight, and the three eight hundred gram parcels, which arrived as two-twenty-one, five-twelve and six hundred, come out in a different order. Swapping the maximum to the end over long distances scrambles ties, as selection sort's swaps did. Heapsort also jumps around the array, reading parents and children far apart in memory, so its locality is poor and it is often slower in practice than quicksort or merge sort. It is the right choice when guaranteed time and no extra memory both matter, and stability does not.",
}
