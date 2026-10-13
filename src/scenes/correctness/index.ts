import type { Scene } from '@graphlearning/flow'
import { problemContract } from './problem-contract'
import { modelling } from './modelling'
import { baseline } from './baseline'
import { execution } from './execution'
import { invariant } from './invariant'
import { evidence } from './evidence'
import { representation } from './representation'

// Chapter 1 — Problems, Algorithms, and Correctness. One scene per section, in section order.
export const correctnessScenes: Scene[] = [problemContract, modelling, baseline, execution, invariant, evidence, representation]
