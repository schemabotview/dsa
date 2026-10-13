import type { Section } from '../types'

export const cases: Section = {
  id: 'worst-average-expected',
  title: 'Worst-case, average-case, and expected analysis',
  scene: 'cases',
  focus: 'kinds',
  slide: `## Worst, average and expected

Three ways to turn many possible costs into one number.

### Lookup over 100 parcels
- **Worst case**: an absent target costs 100 comparisons
- **Average**, all targets equally likely: (n + 1)/2, here **50.5**
- A seeded sample of 1000 targets estimates it: \`51.906\`

### What each one assumes
- **Worst case**: nothing about the input; a guarantee
- **Average case**: a stated **distribution** of inputs
- **Expected**: the algorithm's own random choices, on **any** input

### Watch for
- Real inputs may not follow the assumed distribution
- An adversary can choose inputs; it cannot choose your coin flips`,
  narration:
    "An algorithm does not have one cost. It has a cost for every input, and analysis needs a principled way to turn all of those into a single number. There are three common ways, and each rests on a different assumption. The worst case takes the maximum over all inputs of a given size. For lookup over one hundred parcels, an absent target costs one hundred comparisons, and no input of that size costs more. The worst case assumes nothing about the input, which is why it is a guarantee. The average case takes a weighted mean over a stated distribution of inputs. If every present target is equally likely, the cost of finding the parcel at position k is k, and the mean over all positions is n plus one over two, which is fifty point five, exactly what the script computes. The average is only as good as the distribution behind it. If dispatchers mostly ask about recent parcels, stored at the end, the real average is close to the worst case. The script also estimates the average with a random sample of a thousand targets, using a fixed seed so the run is repeatable. The estimate, fifty-one point nine, is close but not equal. A sample estimates an expectation. It does not compute it. The third kind is expected cost in the stronger sense: averaged over random choices the algorithm makes itself, such as a random pivot in quicksort later on. That expectation holds for every input, because the randomness belongs to the algorithm, not to the data. The difference matters when inputs might be chosen against you. An adversary can pick the input that triggers your worst case. It cannot pick your coin flips.",
}
