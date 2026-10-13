import type { Course } from '../types'
import { formulations } from './01-formulations'
import { reductions } from './02-reductions'
import { classes } from './03-classes'
import { approximation } from './04-approximation'
import { randomised } from './05-randomised'
import { online } from './06-online'
import { rangeQueries } from './07-range-queries'
import { boundaries } from './08-boundaries'
import { decisionRecord } from './09-decision-record'

// Chapter 14 of DSA-COURSE-PLAN.md — one section per plan section, 14.1 to 14.9, in order.
export const limits: Course = {
  id: 'limits',
  title: 'Computational Limits and Integrated Algorithm Design',
  sections: [formulations, reductions, classes, approximation, randomised, online, rangeQueries, boundaries, decisionRecord],
}
