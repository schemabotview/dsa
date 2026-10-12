import type { Section } from '../types'

export const readablePseudocode: Section = {
  id: 'readable-pseudocode',
  title: 'Readable pseudocode',
  scene: 'pseudocode',
  focus: 'pseudo',
  slide: `## Readable pseudocode

Pseudocode states an algorithm without committing to one language.

### Conventions in this course
- Indices start at **0**, as in Python
- \`←\` is assignment, \`=\` is comparison
- \`for i ← 0 to n − 1\` includes **both** ends
- The contract sits on top as \`pre\` and \`post\` comments

### Why bother when Python is so close
- The idea is separated from library behaviour
- No hidden work: every step on the page is a step of the algorithm
- It translates to any language you meet later

### A habit worth keeping
- Write the contract comment **before** the loop
- Translate line by line, then compare the two`,
  narration:
    "Pseudocode is a way of writing an algorithm down without committing to the rules of one programming language. This course keeps a few conventions. Indices start at zero, as they do in Python. A left arrow means assignment, and a single equals sign means comparison, so the two can never be confused. A for loop from zero to n minus one includes both ends. And the contract sits at the top as comments, with the precondition and the postcondition written out. You might reasonably ask why we bother, when Python already reads almost like pseudocode. The answer is that Python hides work. A short expression such as a slice or an in test can copy or scan a whole list without saying so. Pseudocode has no library to lean on, so every step written on the page is a step the algorithm actually takes. That makes it the right place to reason about correctness and cost. It also carries over to any other language you meet later. Python then comes next, as one faithful translation of the same idea. A habit worth keeping is to write the contract comment before writing the loop, and then to translate line by line, so the two versions can be compared directly.",
}
