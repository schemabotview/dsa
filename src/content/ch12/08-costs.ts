import type { Section } from '../types'

export const costs: Section = {
  id: 'dp-space-and-limits',
  title: 'Space reduction, state count, transition cost, and pseudopolynomial limits',
  scene: 'dp-costs',
  focus: 'space',
  slide: `## Space, state count, and limits

### Cost = states × transitions
- Knapsack: n × C states, O(1) each; intervals: n² states, O(n) each
- Not every DP is quadratic: count, don't guess

### Keeping one row
- Knapsack row i needs only row i − 1: one array of C + 1 cells
- Loop capacities **downward**: each cell still reads the old row
- Upward reuses a parcel already taken: 150, three copies of one parcel
- Keep the full table if you need to reconstruct the plan

### Pseudopolynomial time
- The table grows with the capacity's **value**, not its digits
- Capacity × 1000: 4 → 14 bits, but 55 → 50,005 cells
- Polynomial in C, **exponential** in the input's length`,
  narration:
    "The cost of a dynamic program can be read straight from its design: the number of states, times the work done per state. The knapsack table has n times C states with constant work each. The interval DP has about n squared states with up to n choices each, so it is cubic. Not every dynamic program is quadratic, and the only reliable way to know is to count. Space can often be reduced. Each row of the knapsack table depends only on the row before it, so a single array of C plus one cells is enough, overwritten as each parcel is processed. But the direction of the loop over capacities now matters a great deal, and the script shows why. Looping downward, from high capacity to low, each cell reads entries that still hold the previous row's values, and the answer is the correct ninety. Looping upward, a cell can read an entry already updated for the current parcel, which means the same parcel is taken again. The result is one hundred and fifty, three copies of the three kilogram parcel, which is the answer to a different problem, the unbounded knapsack. Space reduction also has a cost. Once old rows are overwritten, the plan can no longer be reconstructed, so keep the full table when the plan itself is needed. One limit remains, and it connects back to chapter two. The knapsack table has a column for every unit of capacity, so its size grows with the capacity's numeric value, not with the number of digits needed to write it. The script scales the capacity by a thousand. Its length grows from four bits to fourteen, a modest increase, but the table grows from fifty-five cells to over fifty thousand. Such an algorithm is called pseudopolynomial. It is polynomial in the value C, but exponential in the length of the input, which matters in the final chapter.",
}
