import type { Section } from '../types'

export const reconstruct: Section = {
  id: 'reconstruction-and-ties',
  title: 'Reconstructing a solution and handling ties',
  scene: 'reconstruct',
  focus: 'table',
  slide: `## Reconstructing the plan

The table holds the best **value**. Recover **which** slots achieve it.

### Walk back through the table
- At each i, ask which side of the max produced OPT(i)
- "In": record slot i, jump to p(i); "out": move to i − 1
- No extra storage: the table already holds the evidence

### Ties
- At i = 5, both sides give 10: two optimal continuations
- Prefer "in": five short slots, total 15
- Prefer "out": slots (2, 9) and (12, 15), also 15
- The contract must say whether **any** optimum is acceptable

### Check the result
- Recompute the plan's value from the slots: it must equal OPT(n)`,
  narration:
    "A filled table gives the best value, fifteen, but a dispatcher needs the actual plan: which slots to accept. Reconstruction recovers it by walking back through the table. Start at the last state, OPT of seven, and ask which side of the max produced it. Here, taking slot seven gives five plus OPT of five, which is fifteen, while leaving it out gives OPT of six, thirteen. So slot seven is in the plan, and the walk jumps to p of seven, the slots compatible with it. If the other side had produced the value, slot i would be left out, and the walk would move to i minus one. The table already contains everything needed, so no extra storage is required, although some programs store the choice made at each state to make this step trivial. Ties need attention. At i equals five, both sides of the max give ten: including slot five gives four plus six, and leaving it out gives OPT of four, also ten. Both continuations lead to optimal plans, and the tie rule decides which one is returned. The output shows both. Preferring to include slots on ties returns five short slots. Preferring to leave them out returns the long slot from two to nine plus the slot from twelve to fifteen. Both total fifteen. Neither is wrong, but they are different, and that matters if the caller expects a particular one, or compares results across runs. As chapter one insisted, the contract should say whether any optimal plan is acceptable, or which one is required. Finally, reconstruction is easy to get subtly wrong, so it deserves a check. Recompute the value of the returned plan directly from its slots, and confirm it equals OPT of n. The script prints that sum next to each plan.",
}
