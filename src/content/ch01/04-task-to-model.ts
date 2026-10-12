import type { Section } from '../types'

export const taskToModel: Section = {
  id: 'task-to-model',
  title: 'From a task to a model',
  scene: 'task-to-model',
  focus: 'left-out',
  slide: `## From a task to a model

A real request is informal. A **model** keeps only what the computation needs.

### What the model keeps
- **Data**: a list of \`Parcel\` records — \`pid\`, \`depot\`, \`weight\`
- **Query**: a single identifier string
- **Answer**: an index into the list, or \`None\`

### What it leaves out
- Barcode scanners, trucks, the time of day
- Leaving something out is a **decision** — write it down
- A different question may need a different model

### Checking a model
- Can every real request be written as a query in it?
- Does every answer it gives mean something to the person asking?
- Keep it as small as the question allows`,
  narration:
    "Requests arrive in everyday language. A dispatcher at the North depot asks, where is parcel P three-seventeen? Before we can compute anything, that question has to become a model, which is a deliberate simplification that keeps only what the computation needs. Our model has three parts. The data is a list of parcel records, each with an identifier, a depot and a weight in grams. The query is a single identifier string. The answer is a position in the list, or None. Just as important is what the model leaves out. There are no barcode scanners, no trucks and no clock. Those things exist, and for some questions they matter a great deal, but they do not affect this lookup, so we drop them on purpose. Writing the omissions down is part of the job, because it tells the next reader where the model stops being faithful to the world. Throughout the course the delivery planner will grow new models as the questions change, from lookup, to ordering, to routes and capacities. Each time, the first step is the same: decide what to keep. Two questions check a model. Can every real request be written as a query in it? And does every answer it produces mean something to the person who asked? Beyond that, keep it as small as the question allows.",
}
