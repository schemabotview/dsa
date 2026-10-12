import type { Section } from '../types'

export const recursiveContracts: Section = {
  id: 'recursive-contracts',
  title: 'Recursive contracts, progress, base cases, and call state',
  scene: 'recursive-contract',
  focus: 'code',
  slide: `## Recursive contracts

A recursive function is correct for the same reasons as a loop.

### Three obligations
- **Contract**: what each call receives and returns, stated once
- **Base case**: inputs answered directly, here a single parcel id
- **Progress**: every recursive call is on a strictly smaller input

### Trust the contract
- Assume the recursive calls meet the contract; check this call does
- That assumption is induction on the input's size

### Call state
- Each active call has its own \`route\` and \`depth\`: its stack frame
- The indentation is the depth: three nested lists, four frames
- The empty list is a valid input too: total 0`,
  narration:
    "This chapter is about searching through choices, and its main tool is recursion. Before using recursion to explore, it is worth being precise about why a recursive function is correct, because the reasons are the same ones that made loops correct in chapter one. A recursive function carries three obligations. First, a contract: what every call receives and what it returns, stated once for all calls. The function on the board takes a route, which is either a single parcel identifier or a list of routes, and returns the total weight. Second, a base case: inputs small enough to answer directly, here a single identifier, whose weight is looked up. Third, progress: every recursive call is on an input strictly smaller than the current one, here one element of the list. Because the input cannot shrink forever, the recursion must reach base cases and stop. With those three in place, the reasoning is simple. Assume the recursive calls meet the contract, and check that this call then meets it too. If each part's total is right, adding them gives the right total for the whole list. That assumption is not circular. It is induction on the size of the input, the same argument as the loop invariant's maintenance step. It helps to picture the call state. Every call that has started but not yet returned has its own frame, with its own route and depth. The output is indented by depth, so the nesting is visible. The route holds lists three deep, and at the deepest point four frames are active at once. Finally, check the boundary. An empty list is a valid route under the contract. Its sum has no terms, so its total is zero, and the code handles it without any special case.",
}
