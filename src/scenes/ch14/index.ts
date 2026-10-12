import type { Scene } from '@graphlearning/flow'
import { formulations } from './formulations'
import { reduction } from './reduction'
import { classes } from './classes'
import { approximation } from './approximation'
import { randomised } from './randomised'
import { online } from './online'
import { rangeQueries } from './range-queries'
import { boundaries } from './boundaries'
import { decisionRecord } from './decision-record'

// Chapter 14 — Computational Limits and Integrated Algorithm Design. One scene per section, in order.
export const ch14Scenes: Scene[] = [
  formulations,
  reduction,
  classes,
  approximation,
  randomised,
  online,
  rangeQueries,
  boundaries,
  decisionRecord,
]
