import type { Section } from '../types'

export const units: Section = {
  id: 'symbols-and-encoding',
  title: 'Symbols, encoding, Unicode, and units of comparison',
  scene: 'units',
  focus: 'levels',
  slide: `## Symbols and encoding

Before searching text, decide what one **symbol** is.

### Three different units
- **Bytes**: what is stored; UTF-8 uses 1 to 4 bytes per code point
- **Code points**: what a Python \`str\` holds; \`len\` counts them
- **Graphemes**: what a reader sees as one character

### The same word, two ways
- "Café" with a precomposed é, or e plus a combining accent
- They display identically, but compare **unequal**: lengths 4 and 5
- Normalising both to NFC makes them equal

### Put it in the contract
- Which normalisation? Case-sensitive, \`lower\`, or \`casefold\`?
- Every algorithm in this chapter compares **code points**`,
  narration:
    "Every algorithm in this chapter compares symbols, so the first question is what a symbol actually is. Text has at least three different units, and they do not line up. At the bottom are bytes, which is what is stored and transmitted. The common UTF-8 encoding uses between one and four bytes for each code point. A code point is the next level up: one numbered entry in the Unicode standard, and it is what a Python string holds. The len function counts code points. At the top are graphemes, what a reader perceives as a single character. The script shows how far apart these can be. The word café can be written with a single precomposed e acute, or with a plain e followed by a combining accent mark. On screen the two look identical. But they are different sequences of code points, so Python reports that they are not equal, and their lengths are four and five. A search for one will not find the other, which is exactly the kind of silent failure chapter one warned about. Unicode defines normalisation forms to deal with this. Converting both strings to the composed form, called NFC, makes them equal, as the output shows. Case is another decision. Lowercasing is enough for depot names in plain English, but casefold is the more thorough comparison, and it correctly matches the German sharp s against a double s. None of these choices is universally right, so they belong in the contract of any text search: which normalisation is applied, and whether comparison ignores case. The algorithms in this chapter compare code points exactly as stored. Any normalisation is the caller's job, done once, before searching.",
}
