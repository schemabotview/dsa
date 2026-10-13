import type { Course } from '../types'
import { graphModels } from './01-graph-models'
import { representations } from './02-representations'
import { bfs } from './03-bfs'
import { dfs } from './04-dfs'
import { componentsCycles } from './05-components-cycles'
import { topological } from './06-topological'
import { scc } from './07-scc'
import { costs } from './08-costs'

// Chapter 9 of DSA-COURSE-PLAN.md — one section per plan section, 9.1 to 9.8, in order.
export const graphs: Course = {
  id: 'graphs',
  title: 'Graph Representation and Traversal',
  sections: [graphModels, representations, bfs, dfs, componentsCycles, topological, scc, costs],
}
