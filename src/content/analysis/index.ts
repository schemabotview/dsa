import type { Course } from '../types'
import { costModels } from './01-cost-models'
import { countingOperations } from './02-counting-operations'
import { bounds } from './03-bounds'
import { cases } from './04-cases'
import { growth } from './05-growth'
import { recurrences } from './06-recurrences'
import { space } from './07-space'
import { empirical } from './08-empirical'

// Chapter 2 of DSA-COURSE-PLAN.md — one section per plan section, 2.1 to 2.8, in order.
export const analysis: Course = {
  id: 'analysis',
  title: 'Analysing Time, Space, and Growth',
  sections: [costModels, countingOperations, bounds, cases, growth, recurrences, space, empirical],
}
