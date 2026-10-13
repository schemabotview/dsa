import type { Section } from '../types'

export const knapsack: Section = {
  id: 'knapsack-and-subset-sum',
  title: 'Capacity constraints, subset sum, and 0/1 knapsack',
  scene: 'knapsack',
  focus: 'code',
  slide: `## Knapsack and subset sum

One van, 10 kg capacity. Choose parcels to maximise total value.

### The state must remember capacity
- **K[i][c]**: best value from the first i parcels with c kg available
- Without c, it cannot tell whether a parcel still fits
- Skip parcel i: K[i − 1][c]; take it: v + K[i − 1][c − w]

### The result
- Best value **90**: the 4 kg and 3 kg parcels
- Greedy happens to work here; no greedy rule is safe in general
- Reconstruct: where K[i][c] ≠ K[i − 1][c], parcel i was taken

### Subset sum
- Can some parcels weigh **exactly** 9 kg? Track reachable sums`,
  narration:
    "The zero-one knapsack problem is the standard example of a capacity constraint. One van can carry ten kilograms, each parcel has a weight and a value, and each parcel is either taken whole or left behind. The goal is the greatest total value that fits. The first attempt at a state is usually the first i parcels, and it fails. Knowing only which parcels have been considered says nothing about how much room is left, so the recurrence cannot tell whether the next parcel still fits. The state must carry that information too. So K of i and c is the best value obtainable from the first i parcels when c kilograms of capacity are available. Parcel i is either skipped, leaving K of i minus one and c, or taken, if its weight w fits, giving its value plus K of i minus one and c minus w, the best from the earlier parcels in the remaining capacity. The table has one row per parcel and one column per kilogram of capacity. For the four parcels in the script, the best value is ninety, taking the four kilogram parcel worth forty and the three kilogram parcel worth fifty. On this small instance, taking the most valuable parcels first, or the lightest first, happens to reach ninety as well. But neither rule is safe in general. Each can fill the van badly on other instances, which is exactly why the exchange argument from chapter eleven has no counterpart for this problem. Reconstruction follows the same pattern as before. Wherever K of i and c differs from K of i minus one and c, parcel i was taken, and capacity is reduced by its weight. Subset sum is the yes or no question underneath: can some parcels weigh exactly nine kilograms? Keeping the set of sums reachable so far, and extending it one parcel at a time, answers it, and here the answer is yes.",
}
