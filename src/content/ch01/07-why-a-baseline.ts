import type { Section } from '../types'

export const whyABaseline: Section = {
  id: 'why-a-baseline',
  title: 'Why start with a baseline',
  scene: 'baseline-roles',
  focus: 'oracle',
  slide: `## Why start with a baseline

A **baseline** is the simplest solution you can convince yourself is correct.

### What it is used for
- A **test oracle**: faster versions must agree with it
- A **specification check**: writing it exposes unclear cases
- A **yardstick**: the cost any cleverer idea has to beat

### What it is not
- Not a draft to be ashamed of
- Not necessarily slow — sometimes it is already good enough
- For lookup: inspect each parcel in turn, stop at the first match

### When to move on
- Measure first: is the baseline actually too slow for the real input?
- Keep it in the test suite after it has been replaced`,
  narration:
    "Before reaching for anything clever, write a baseline. A baseline is the simplest solution you can convince yourself is correct, and it earns its place through what it does for you afterwards. First, it is a test oracle. When you later write a faster version, you can run both on many inputs and check that they agree. Second, it checks the specification. The act of writing even a simple solution forces every unclear case into the open, such as what to return for an empty list. Third, it is a yardstick. Any new idea has to beat the baseline's cost, and has to do so on the inputs that actually occur, or it is not worth its complexity. A baseline is not a rough draft to be embarrassed about. Sometimes it is already the right answer, because the input is small, or because the cleverer method needs preparation that never pays off. For our lookup the baseline is the obvious one. Look at each parcel in turn, and stop at the first one whose identifier matches. Move past it only when it is measured to be too slow for the real input, and even then keep it in the test suite, where it goes on checking whatever replaced it.",
}
