import type { Section } from '../types'

export const selection: Section = {
  id: 'order-statistics',
  title: 'Selection, partition-based order statistics, and expected cost',
  scene: 'quickselect',
  focus: 'out',
  slide: `## Order statistics

The **k-th smallest** item, such as the median, without sorting everything.

### Quickselect
- Partition around a random pivot, as in quicksort
- The answer lies in **one** side: recurse on that side only
- Ties are handled by a separate "equal" group

### Expected linear time
- Each round keeps, on average, at most 3/4 of the items
- Work: n + 3n/4 + 9n/16 + … ≤ **4n**, a geometric sum
- This run scans about 3.5 n elements; sorting would be Θ(n log n)

### Guarantees
- Worst case Θ(n²) with unlucky pivots, though very improbable
- Median-of-medians pivots give Θ(n) worst case, with larger constants`,
  narration:
    "Sometimes we need one particular rank, not the whole sorted order. The median weight, the tenth heaviest parcel, the ninety-fifth percentile of delivery times. The item that would sit at position k in sorted order is called the k-th order statistic. Sorting and indexing finds it in n log n time, but that does more work than needed. Quickselect borrows quicksort's partition. Choose a random pivot and split the items into those smaller than the pivot, those equal to it, and those larger. Now compare k with the sizes of the groups. If k falls among the smaller items, the answer is in that group. If it falls in the equal group, the pivot itself is the answer. Otherwise, it is in the larger group, at a shifted rank. Unlike quicksort, only one side needs further work. The script finds the median of ten thousand and one random weights and checks it against sorting: both give four thousand five hundred and ninety-six. The expected cost is linear, and the argument is the geometric sum again. A random pivot falls in the middle half of the values with probability one half, and then the side we keep has at most three quarters of the items. So on average each round shrinks the problem by a constant fraction, and the total work is n plus three quarters of n plus nine sixteenths of n, and so on, which is at most four n. This seeded run scanned about three and a half n elements. As with quicksort, unlucky pivots can make it quadratic in the worst case, although that is extremely improbable with random choices. If a worst-case guarantee is required, a method called median of medians chooses the pivot deterministically and achieves linear time in the worst case, at the price of much larger constant factors.",
}
