import type { Scene } from '@graphlearning/flow'
import { overlap } from './overlap'
import { recurrence } from './recurrence'
import { memoTable } from './memo-table'
import { reconstruct } from './reconstruct'
import { sequences } from './sequences'
import { knapsack } from './knapsack'
import { intervalDp } from './interval-dp'
import { dpCosts } from './dp-costs'

// Chapter 12 — Dynamic Programming and State Design. One scene per section, in section order.
export const ch12Scenes: Scene[] = [overlap, recurrence, memoTable, reconstruct, sequences, knapsack, intervalDp, dpCosts]
