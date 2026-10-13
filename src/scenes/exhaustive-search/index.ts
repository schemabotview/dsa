import type { Scene } from '@graphlearning/flow'
import { recursiveContract } from './recursive-contract'
import { stateSpace } from './state-space'
import { backtracking } from './backtracking'
import { enumeration } from './enumeration'
import { duplicates } from './duplicates'
import { branchBound } from './branch-bound'
import { explicitStack } from './explicit-stack'

// Chapter 8 — Recursion, Exhaustive Search, and Pruning. One scene per section, in section order.
export const exhaustiveSearchScenes: Scene[] = [recursiveContract, stateSpace, backtracking, enumeration, duplicates, branchBound, explicitStack]
