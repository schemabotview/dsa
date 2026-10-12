import type { Section } from '../types'

export const online: Section = {
  id: 'online-decisions',
  title: 'Online decisions, competitive reasoning, and information limits',
  scene: 'online',
  focus: 'ratio',
  slide: `## Online decisions

Some decisions must be made **before** the input is fully known.

### Rent or buy a van
- Renting costs 1 a day; buying costs B = 10, once
- How many days the van is needed is revealed one day at a time
- The offline optimum, knowing the future, pays min(days, B)

### The online rule
- Rent until the total would reach B, then buy
- Never worse than 2 − 1/B = **1.9** times the offline optimum
- No deterministic rule can do better in the worst case

### Competitive analysis
- Compare against an opponent who **knows the future**
- A limit of **information**, not of computing time`,
  narration:
    "Every algorithm so far could see its whole input before deciding anything. Many real decisions cannot wait. They must be made now, with the future unknown. Such problems are called online, and they have a limit of their own, which no amount of computing power removes. The classic example is renting or buying. The depot needs an extra van for an unknown number of days. Renting costs one per day, and buying costs ten, once. Each morning, the planner learns only whether the van is needed again today. With hindsight, the decision is easy. An offline algorithm that knows the total number of days simply rents if it is fewer than ten, and buys on the first day otherwise, paying the smaller of the days and ten. The online rule cannot know. A good rule is to rent until the rental total would reach the purchase price, and then buy. The output and the plot compare the two. For short needs, both pay the same. For ten days or more, the online rule pays nineteen, nine days of rent and then the purchase, while the offline optimum pays ten. The ratio never exceeds one point nine, which is two minus one over B. It can also be shown that no deterministic online rule has a better worst-case ratio for this problem. This style of analysis is called competitive analysis. An online algorithm is compared, in the worst case, with an opponent who knows the future, and its competitive ratio is the factor it might lose. The limit here is different in kind from NP-hardness. The online rule runs instantly. What it lacks is information. Even with unlimited time, no rule could match the offline optimum on every sequence, because the information needed to do so has not arrived yet.",
}
