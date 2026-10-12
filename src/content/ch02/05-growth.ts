import type { Section } from '../types'

export const growth: Section = {
  id: 'growth-rates',
  title: 'Logarithms, summations, and common growth rates',
  scene: 'growth',
  focus: 'curves',
  slide: `## Growth rates

A few functions describe almost every algorithm in this course.

### From slowest to fastest
- \`log n\`: halving until one is left; \`log₂ 64 = 6\`
- \`n\` and \`n log n\`: one pass, and good sorting
- \`n²\`: all pairs; \`2ⁿ\`: all subsets, \`2⁶⁴\` has 20 digits

### Logarithms
- \`log₂ n\` counts halvings; the base only changes a constant factor
- \`log(ab) = log a + log b\`, so \`log(n²) = 2 log n\`: still Θ(log n)
- A million items need only about 20 halvings

### Two sums to know
- \`1 + 2 + … + n = n(n + 1)/2\`: Θ(n²)
- \`1 + 2 + 4 + … + 2ᵏ = 2ᵏ⁺¹ − 1\`: the last term dominates
- Both checked at \`n = 100\` and \`k = 9\` in the output`,
  narration:
    "A small family of functions describes almost every algorithm in this course, and it pays to know them by shape. The plot shows them on one pair of axes, and the printed table gives exact values. The logarithm grows slowest. Log base two of n counts how many times n can be halved before one is left, so log two of sixty-four is six. Any algorithm that throws away half of its remaining work at each step, such as binary search, costs a logarithm. Next come n, one pass over the input, and n log n, the cost of good sorting algorithms, which in practice behaves almost like n. Then n squared, the cost of looking at every pair, which we met in the duplicate check. And finally two to the n, the number of subsets of n items, which is the cost of trying every combination. At sixty-four items, two to the n already has twenty digits. On the plot it leaves the chart before n reaches eight. A note on logarithms. Changing the base, say from two to ten, only multiplies the value by a constant. That is why asymptotic statements usually write log n without a base. The logarithm of a product is the sum of the logarithms, so the log of n squared is just twice log n, still Theta of log n. And it grows very slowly indeed: a million items need only about twenty halvings. Two sums appear again and again. The sum of one up to n is n times n plus one over two, which is Theta of n squared. The script checks it at a hundred: five thousand and fifty both ways. The geometric sum one plus two plus four, up to two to the k, equals two to the k plus one, minus one. Here the last term alone is more than half of the total. That fact will explain why doubling a dynamic array costs only constant time per append on average, and why a heap can be built in linear time.",
}
