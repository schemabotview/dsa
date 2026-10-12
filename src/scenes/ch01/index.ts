import type { Scene } from '@graphlearning/flow'
import { problemInstances } from './problem-instances'
import { contract } from './contract'
import { duplicatePolicies } from './duplicate-policies'
import { taskToModel } from './task-to-model'
import { constraintObjective } from './constraint-objective'
import { assumptions } from './assumptions'
import { baselineRoles } from './baseline-roles'
import { pseudocode } from './pseudocode'
import { pythonBaseline } from './python-baseline'
import { programState } from './program-state'
import { traceHit } from './trace-hit'
import { traceMiss } from './trace-miss'
import { invariant } from './invariant'
import { invariantProof } from './invariant-proof'
import { termination } from './termination'
import { counterexample } from './counterexample'
import { boundaryCases } from './boundary-cases'
import { evidence } from './evidence'
import { aliasing } from './aliasing'
import { copies } from './copies'
import { arithmetic } from './arithmetic'

// Chapter 1 — Problems, Algorithms, and Correctness. In section order.
export const ch01Scenes: Scene[] = [
  problemInstances,
  contract,
  duplicatePolicies,
  taskToModel,
  constraintObjective,
  assumptions,
  baselineRoles,
  pseudocode,
  pythonBaseline,
  programState,
  traceHit,
  traceMiss,
  invariant,
  invariantProof,
  termination,
  counterexample,
  boundaryCases,
  evidence,
  aliasing,
  copies,
  arithmetic,
]
