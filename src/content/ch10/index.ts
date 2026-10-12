import type { Course } from '../types'
import { relaxation } from './01-relaxation'
import { dagPaths } from './02-dag-paths'
import { dijkstra } from './03-dijkstra'
import { bellmanFord } from './04-bellman-ford'
import { floyd } from './05-floyd'
import { spanning } from './06-spanning'
import { unionFind } from './07-union-find'
import { kruskalPrim } from './08-kruskal-prim'

// Chapter 10 of DSA-COURSE-PLAN.md — one section per plan section, 10.1 to 10.8, in order.
export const ch10: Course = {
  id: 'ch10',
  title: 'Shortest Paths and Spanning Networks',
  sections: [relaxation, dagPaths, dijkstra, bellmanFord, floyd, spanning, unionFind, kruskalPrim],
}
