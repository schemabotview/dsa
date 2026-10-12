import type { Section } from '../types'

export const costModels: Section = {
  id: 'cost-models',
  title: 'Input size, encoded size, and cost models',
  scene: 'cost-model',
  focus: 'out',
  slide: `## Cost models

Analysis counts **steps** as the **input size** grows, under stated rules.

### A cost model fixes three things
- **Input size**: number of items, or the digits or bits that encode a value
- **One step**: an operation charged a constant cost, such as one comparison
- **What is counted**: steps, memory, or both, as a function of size

### When size is a value, not a length
- Trial division takes about \`√n\` steps for the **value** \`n\`
- Two more digits multiply \`n\` by 100 and the steps by 10
- Polynomial in the value, **exponential** in the number of digits

### Unit cost is an assumption
- Fair for short keys and machine-size numbers, not for huge ones`,
  narration:
    "Chapter one ended with a correct lookup. This chapter asks how much it costs, and the first step is to agree on what we are counting. That agreement is called a cost model, and it fixes three things. First, the input size. For a list of parcels it is usually the number of items, n. For a single number it should be the number of digits or bits needed to write it down. Second, what counts as one step: an operation we charge a constant cost, such as comparing two identifiers or adding two machine-size numbers. Third, what we count: steps, memory, or both, as a function of the input size. These choices matter most when the input is a single value rather than a collection. The script on the board finds the smallest factor of a number by trial division. It tries divisors up to the square root of n, so it takes about root n steps. Measured against the value n, that sounds modest. But look at the output. Each time the number gains two digits, n is a hundred times larger, and the step count is ten times larger. Two digits, eight steps. Eight digits, nearly ten thousand. Against the true input size, the number of digits, the cost is exponential. A two hundred digit number would need more steps than any computer could ever take. The same algorithm is polynomial in the value and exponential in the encoding, and only the second description is honest about how hard the problem is. This distinction returns in the dynamic programming chapter. Finally, charging one unit per operation is itself an assumption. It is fair for short identifiers and numbers that fit in a machine word. It is not fair for very long strings or for Python's arbitrary-size integers, where the work grows with the length. Every cost claim in this course states which kind of operation it treats as one step.",
}
