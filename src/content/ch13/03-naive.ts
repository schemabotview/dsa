import type { Section } from '../types'

export const naive: Section = {
  id: 'naive-matching',
  title: 'Naive substring matching and overlapping candidates',
  scene: 'naive',
  focus: 'slide',
  slide: `## Naive substring matching

Find **every** position where a pattern of length m occurs in a text of length n.

### The algorithm
- Try each start position in turn; compare until a mismatch
- Report a start when all m characters match
- Occurrences may **overlap**: ABA occurs at 0, 2 and 4 in ABABABA

### Cost
- Usually a mismatch comes quickly, so it is often fast
- Worst case: the text is all A, the pattern 99 A's then a B
- Every start compares 100 characters before failing: **90,100** comparisons
- Θ(nm) in the worst case

### What it wastes
- After a partial match, it forgets what it just read`,
  narration:
    "The basic text search problem is to find every position where a pattern of length m occurs in a text of length n, such as every occurrence of port in a list of route codes. The naive algorithm does exactly what the problem says. It tries each starting position in the text in turn, compares the pattern character by character, and stops at the first mismatch. If all m characters match, it reports that start. One detail in the specification deserves attention: occurrences can overlap. In the text A B A B A B A, the pattern A B A occurs at positions zero, two and four, and the occurrences at zero and two share a letter. The table on the board traces each window. The naive algorithm finds overlapping occurrences naturally, because it tries every start independently. In practice the naive algorithm is often fast, because on ordinary text most windows fail on the first or second character. But its worst case is poor, and it is easy to trigger. Let the text be a thousand A's, and the pattern ninety-nine A's followed by a B. At every one of the nine hundred and one starting positions, the first ninety-nine characters match, and only the hundredth fails. The script counts ninety thousand one hundred comparisons. In general, the worst case is n times m. The waste has a clear cause. After matching ninety-nine characters at one position, the algorithm moves one place to the right and starts comparing from scratch, even though it has just read almost all of the characters it is about to read again. It forgets what the partial match told it. The next section shows how to remember.",
}
