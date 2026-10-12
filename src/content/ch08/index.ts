import type { Course } from '../types'
import { recursiveContracts } from './01-recursive-contracts'
import { stateSpace } from './02-state-space'
import { backtracking } from './03-backtracking'
import { enumeration } from './04-enumeration'
import { duplicates } from './05-duplicates'
import { pruning } from './06-pruning'
import { limits } from './07-limits'

// Chapter 8 of DSA-COURSE-PLAN.md — one section per plan section, 8.1 to 8.7, in order.
export const ch08: Course = {
  id: 'ch08',
  title: 'Recursion, Exhaustive Search, and Pruning',
  sections: [recursiveContracts, stateSpace, backtracking, enumeration, duplicates, pruning, limits],
}
