import type { Section } from '../types'

export const space: Section = {
  id: 'space-and-stack-depth',
  title: 'Auxiliary space, output space, and call-stack depth',
  scene: 'space',
  focus: 'code',
  slide: `## Space and stack depth

Memory is a resource too, and Python can spend it **silently**.

### Kinds of space
- **Input** and **output** space are given by the problem
- **Auxiliary** space is the extra an algorithm needs while it runs
- Each active call holds a **stack frame**: depth costs memory

### Two recursive sums, one answer
- \`xs[1:]\` copies the rest of the list on **every** call
- 500 items: 124,750 elements copied, Θ(n²) work and allocation
- Passing an index copies nothing

### Depth has a hard limit
- Both versions keep \`n\` frames alive at once
- CPython stops at depth 1000: \`RecursionError\`, not a slow answer`,
  narration:
    "Time is not the only resource an algorithm consumes. Memory matters too, and it helps to divide it into kinds. Input space and output space are fixed by the problem itself. What an algorithm controls is auxiliary space: the extra memory it needs while it runs, such as temporary lists, tables or a queue. One kind of auxiliary space is easy to forget. Every call that has started but not yet returned holds a stack frame with its arguments and local variables, so the depth of recursion costs memory in proportion to that depth. The script compares two recursive functions that both add up a list. The first looks elegant. It adds the first item to the sum of the rest, where the rest is the slice x s from one onwards. But a slice in Python is a new list, so every call copies everything after the first element. For five hundred items, the script counts one hundred and twenty-four thousand, seven hundred and fifty elements copied. That is about n squared over two, Theta of n squared work and allocation, for a computation that should be linear. The second version passes the same list together with an index, and copies nothing. Both versions, though, recurse once per element, so both keep n stack frames alive at the deepest point. Python bounds that depth. CPython's default recursion limit is one thousand, and the last line shows what happens at five thousand: the call raises a recursion error instead of returning a slow answer. So for long sequences, a recursive formulation needs either a loop or an explicit stack. Chapter eight returns to this. The lesson for analysis is to count the hidden costs: copies made by slicing, objects allocated per call, and the depth of the call stack.",
}
