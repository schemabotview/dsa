import type { Section } from '../types'

export const topological: Section = {
  id: 'topological-order',
  title: 'Topological ordering and dependency execution',
  scene: 'topo',
  focus: 'indeg',
  slide: `## Topological order

Order the tasks so every task comes **after** all of its prerequisites.

### Kahn's algorithm
- Count each task's pending prerequisites: its **in-degree**
- Start with every task at 0: weigh, scan, inspect
- Remove a ready task; decrement its dependents; any reaching 0 become ready

### The result
- weigh, scan, inspect, label, sort, load, dispatch
- Usually many valid orders: any one respecting every edge will do

### When it fails
- Add dispatch → scan: a cycle, so no valid order exists
- Tasks never reach 0 in-degree: scan, sort, load, dispatch are reported
- The failure **names** the problem instead of looping forever`,
  narration:
    "A set of tasks with dependencies needs a schedule: an order in which every task comes after all of its prerequisites. Such an order is called a topological order, and it exists exactly when the dependency graph has no cycle. Kahn's algorithm constructs one directly. First, count each task's in-degree, the number of prerequisites it is still waiting on. The table on the board shows the starting counts. Weigh, scan and inspect have none, so they are ready immediately. Label and sort wait on one task each. Load and dispatch wait on two. The algorithm keeps a queue of ready tasks. It repeatedly takes one, appends it to the order, and then, for each task that depended on it, decreases that task's count by one. Any task whose count reaches zero has all its prerequisites done, so it joins the ready queue. Each task and each dependency is handled once, so the cost is proportional to vertices plus edges. The output gives the order weigh, scan, inspect, label, sort, load, dispatch. It is not the only valid order. Any order that respects every edge is a correct schedule, and different ready queues would produce different ones. The real value of Kahn's algorithm shows when the dependencies are wrong. The script adds a dependency from dispatch back to scan, which creates a cycle: scan before sort, before load, before dispatch, before scan. Now four tasks wait on each other forever, and their counts never reach zero. The algorithm notices that its order is shorter than the task list, and reports exactly which tasks are stuck. That is far better than a scheduler that loops forever or silently skips work. Depth-first search gives an alternative method: reversing the order in which tasks finish also produces a topological order, because every task finishes after everything it leads to.",
}
