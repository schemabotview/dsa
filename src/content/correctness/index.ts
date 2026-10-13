import type { Course } from '../types'
import { problemsAndContracts } from './01-problems-and-contracts'
import { modellingAndAssumptions } from './02-modelling-and-assumptions'
import { baselinesAndPseudocode } from './03-baselines-and-pseudocode'
import { stateAndExecution } from './04-state-and-execution'
import { invariantsAndTermination } from './05-invariants-and-termination'
import { counterexamplesAndTesting } from './06-counterexamples-and-testing'
import { pythonRepresentation } from './07-python-representation'

// Chapter 1 of DSA-COURSE-PLAN.md — one section per plan section, 1.1 to 1.7, in order.
export const correctness: Course = {
  id: 'correctness',
  title: 'Problems, Algorithms, and Correctness',
  sections: [
    problemsAndContracts,
    modellingAndAssumptions,
    baselinesAndPseudocode,
    stateAndExecution,
    invariantsAndTermination,
    counterexamplesAndTesting,
    pythonRepresentation,
  ],
}
