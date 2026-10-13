import type { Section } from '../types'

export const bounds: Section = {
  id: 'bounds-and-cases',
  title: 'O, Omega, and Theta: bounds versus case selection',
  scene: 'bounds',
  focus: 'squeeze',
  slide: `## O, Ω and Θ

Asymptotic notation compares **functions** for large \`n\`, ignoring constant factors.

### The three bounds
- \`f\` is **O(g)**: \`f(n) ≤ c·g(n)\` for all \`n ≥ n₀\`, an upper bound
- \`f\` is **Ω(g)**: \`f(n) ≥ c·g(n)\` from some \`n₀\` on, a lower bound
- \`f\` is **Θ(g)**: both, so \`g\` is the growth rate
- \`3n + 5\` lies between \`3n\` and \`4n\` once \`n ≥ 5\`: it is Θ(n)

### A bound is not a case
- First choose **which function**: worst, best or average steps
- Then bound **that** function
- An upper bound on the worst case covers **every** input
- Lookup: worst case Θ(n), best case Θ(1); "O means worst case" is a myth`,
  narration:
    "Exact counts are precise but awkward to compare. Asymptotic notation keeps what matters for large inputs, the growth rate, and drops constant factors and small terms. There are three bounds. A function f is big O of g if, from some point n nought onwards, f is at most a constant times g. That is an upper bound. f is big Omega of g if, from some point on, f is at least a constant times g. That is a lower bound. And f is big Theta of g if both hold, so that g describes the growth rate exactly, up to constants. The plot shows this for a cost function of three n plus five. From n equals five onwards, it stays between the line three n below and the line four n above. Squeezed between two constant multiples of n, it is Theta of n. Notice that the constants and the starting point are part of the claim. Choosing them is how you prove a bound. One distinction causes more confusion than any other in this topic. A bound is not a case. Before applying any notation, you must decide which function you are describing. For lookup there are several. The worst-case cost, the most steps over all inputs of size n, is n, so the worst case is Theta of n. The best-case cost, with the target at the front, is one step, so the best case is Theta of one. Both are perfectly precise statements. The popular phrase, big O means the worst case, mixes the two ideas together. Big O is an upper bound on whatever function you chose, and the worst case is one choice of function. You can give an upper bound on the best case, or a lower bound on the worst case, and both are sometimes exactly what an argument needs. The most useful single statement is usually an upper bound on the worst case, because it covers every input.",
}
