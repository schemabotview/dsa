import type { Section } from '../types'

export const stacks: Section = {
  id: 'stacks',
  title: 'Stacks and last-in-first-out applications',
  scene: 'stack',
  focus: 'state',
  slide: `## Stacks

A **stack** allows only two changes: **push** on top, **pop** from the top.

### Last in, first out
- The most recently opened item must be closed first
- With a Python list: \`append\` and \`pop()\` at the end, both Θ(1)

### Checking balanced delimiters
- Push each opener with its position
- A closer must match the **top**, then pop it
- \`"([)]"\`: \`)\` arrives while \`[\` is on top, mismatch at 2
- Leftovers at the end are unclosed openers: \`"(()"\`

### Where stacks appear
- Undo history, expression parsing, the **call stack** itself
- Every recursion can be rewritten with an explicit stack`,
  narration:
    "A stack is a sequence that allows only two changes: push an item on top, and pop the item from the top. The most recently added item is always the first to leave, which is why stacks are called last in, first out. In Python, a list makes a good stack, as long as both operations happen at the end. Append and pop with no argument are both constant time. Stacks fit any problem where the most recently opened thing must be closed first. The classic example is checking that brackets are balanced, as in a template for parcel labels or a piece of code. The checker on the board reads the text one character at a time. Each opening bracket is pushed, together with its position. Each closing bracket must match the opener on top of the stack, and if it does, that opener is popped. The memory card shows the stack after reading the first three characters of the first test: the parenthesis on top, opened last, is the first that must close. The output shows the possible outcomes. Properly nested text is balanced. In the second test, a closing parenthesis arrives while a square bracket is still on top, so the checker reports a mismatch at position two. In the third, the text ends with an opener still on the stack, which means it was never closed. The empty string is balanced, and ordinary letters are simply skipped. Stacks appear throughout computing. Undo history is a stack of previous states. Parsers use stacks to handle nested expressions. And the call stack from the last chapter is exactly this structure: each function call pushes a frame, and each return pops one. That is why every recursive algorithm can be rewritten as a loop with an explicit stack, a technique chapter eight uses to escape Python's recursion limit.",
}
