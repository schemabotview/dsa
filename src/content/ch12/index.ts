import type { Course } from '../types'
import { overlap } from './01-overlap'
import { recurrence } from './02-recurrence'
import { memoTable } from './03-memo-table'
import { reconstruct } from './04-reconstruct'
import { sequences } from './05-sequences'
import { knapsack } from './06-knapsack'
import { intervalDp } from './07-interval-dp'
import { costs } from './08-costs'

// Chapter 12 of DSA-COURSE-PLAN.md — one section per plan section, 12.1 to 12.8, in order.
export const ch12: Course = {
  id: 'ch12',
  title: 'Dynamic Programming and State Design',
  sections: [overlap, recurrence, memoTable, reconstruct, sequences, knapsack, intervalDp, costs],
}
