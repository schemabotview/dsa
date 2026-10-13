import type { Section } from '../types'

export const baselinesAndPseudocode: Section = {
  id: 'baselines-and-pseudocode',
  title: 'Baselines and readable pseudocode',
  scene: 'baseline',
  focus: 'code',
  slide: `## Baselines and pseudocode

A **baseline** is the simplest solution you can convince yourself is correct.

### What it is for
- A **test oracle**, a **specification check**, and a **yardstick** to beat
- For lookup: inspect each parcel in turn, stop at the first match

### Pseudocode, then Python
- Indices from 0; \`←\` assigns, \`=\` compares; \`0 to n − 1\` includes both ends
- No library to hide work: every line is a step of the algorithm
- Python translates it line for line; the docstring is the postcondition

### Reading the output
- \`P-317\` is at index 2; \`P-999\` and the empty list give \`None\`
- \`None\`, not \`-1\`: \`parcels[-1]\` is a **valid** index`,
  narration:
    "Before reaching for anything clever, write a baseline: the simplest solution you can convince yourself is correct. It earns its place through what it does afterwards. It is a test oracle, because any faster version can be checked against it on many inputs. It is a specification check, because writing even a simple solution forces unclear cases, like the empty list, into the open. And it is a yardstick, the cost a cleverer idea has to beat on real inputs before it is worth its complexity. For lookup, the baseline is the obvious one: look at each parcel in turn, and stop at the first match. The top card states it in pseudocode, a way of writing an algorithm without committing to one language. This course keeps a few conventions. Indices start at zero, as in Python. A left arrow means assignment and a single equals sign means comparison, so the two cannot be confused. A loop from zero to n minus one includes both ends. And the contract sits on top as comments. Pseudocode matters even though Python reads almost like it, because Python hides work. A slice or an in test can copy or scan a whole list without saying so, while in pseudocode every line on the page is a step the algorithm actually takes. The middle card is the Python translation, line for line, with the postcondition kept as the docstring. Because the indices are visited in increasing order, the first match is also the least. The bottom card is what the file actually printed under CPython three point one four. Looking up P three-seventeen gives two. An absent identifier gives None, and so does the empty list, whose loop body never runs. One design choice deserves a word. Many languages signal not found with minus one. In Python that is dangerous, because minus one is a valid index meaning the last element. None cannot be used as an index by mistake.",
}
