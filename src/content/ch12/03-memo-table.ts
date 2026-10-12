import type { Section } from '../types'

export const memoTable: Section = {
  id: 'memoisation-and-tabulation',
  title: 'Memoisation, tabulation, and valid dependency order',
  scene: 'memo-table',
  focus: 'compare',
  slide: `## Memoisation and tabulation

Two ways to evaluate the same recurrence.

### Top-down: memoisation
- Write the recurrence as a recursive function; cache every result
- The recursion discovers a valid order by itself
- Only the states actually needed are solved; depth can hit the recursion limit

### Bottom-up: tabulation
- Fill a table in an order where every dependency is **already** computed
- Here p(i) < i, so increasing i is a valid order
- No recursion; easy to reduce space later

### Both give 15
- The table: 0, 2, 4, 6, 10, 10, 13, 15
- Cost: n states × O(1) work each, after an O(n log n) sort`,
  narration:
    "A recurrence can be evaluated in two ways, and the code on the board does both. The first is top-down, called memoisation. Write the recurrence directly as a recursive function, and cache every result. When the function asks for a smaller state, the recursion computes it if it has not been seen, or returns the cached answer if it has. The recursion discovers a valid order of evaluation by itself, and it only ever solves the states that are actually needed for the final answer. The cost is the call stack. A deep chain of dependencies needs one frame per level, which in Python can hit the recursion limit for large inputs. The second is bottom-up, called tabulation. Allocate a table with one entry per state, and fill it in an order where every state's dependencies are already computed before it is reached. Here, each OPT of i depends on OPT of i minus one and OPT of p of i, and p of i is always less than i, so simply filling the table in increasing order of i is valid. There is no recursion at all, and because the order is explicit, it is easy to see which earlier entries are still needed, which makes space reduction possible later. The table on the board compares the two. Both produce fifteen, and the printed table shows how the best value grows as slots are added: zero, two, four, six, ten, ten, thirteen, fifteen. The running time is the number of states times the work per state. There are n states, each needing constant work once p is known, so after the n log n sort and the binary searches for p, the dynamic program itself is linear. The most common mistake with tabulation is a wrong fill order, which reads entries before they are written. Always check the dependency direction first.",
}
