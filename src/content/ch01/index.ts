import type { Course } from '../types'
import { problemsAndInstances } from './01-problems-and-instances'
import { preconditionsAndPostconditions } from './02-preconditions-and-postconditions'
import { missingAndDuplicateIds } from './03-missing-and-duplicate-ids'
import { taskToModel } from './04-task-to-model'
import { constraintsAndObjectives } from './05-constraints-and-objectives'
import { statingAssumptions } from './06-stating-assumptions'
import { whyABaseline } from './07-why-a-baseline'
import { readablePseudocode } from './08-readable-pseudocode'
import { pythonBaseline } from './09-python-baseline'
import { programState } from './10-program-state'
import { tracingASearch } from './11-tracing-a-search'
import { tracingMisses } from './12-tracing-misses'
import { loopInvariant } from './13-loop-invariant'
import { invariantProof } from './14-invariant-proof'
import { termination } from './15-termination'
import { counterexamples } from './16-counterexamples'
import { boundaryCases } from './17-boundary-cases'
import { testsAndProofs } from './18-tests-and-proofs'
import { namesAndReferences } from './19-names-and-references'
import { shallowAndDeepCopies } from './20-shallow-and-deep-copies'
import { arithmeticAssumptions } from './21-arithmetic-assumptions'

// Chapter 1 of DSA-COURSE-PLAN.md. Plan section → on-screen sections:
//   1.1 contracts      01–03    1.2 modelling   04–06    1.3 baselines   07–09
//   1.4 state/traces   10–12    1.5 invariants  13–15    1.6 evidence    16–18
//   1.7 Python repr.   19–21
export const ch01: Course = {
  id: 'ch01',
  title: 'Problems, Algorithms, and Correctness',
  sections: [
    problemsAndInstances,
    preconditionsAndPostconditions,
    missingAndDuplicateIds,
    taskToModel,
    constraintsAndObjectives,
    statingAssumptions,
    whyABaseline,
    readablePseudocode,
    pythonBaseline,
    programState,
    tracingASearch,
    tracingMisses,
    loopInvariant,
    invariantProof,
    termination,
    counterexamples,
    boundaryCases,
    testsAndProofs,
    namesAndReferences,
    shallowAndDeepCopies,
    arithmeticAssumptions,
  ],
}
