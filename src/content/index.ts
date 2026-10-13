import { correctness } from './correctness'
import { analysis } from './analysis'
import { sequences } from './sequences'
import { sorting } from './sorting'
import { hashing } from './hashing'
import { trees } from './trees'
import { heaps } from './heaps'
import { exhaustiveSearch } from './exhaustive-search'
import { graphs } from './graphs'
import { shortestPaths } from './shortest-paths'
import { greedy } from './greedy'
import { dynamicProgramming } from './dynamic-programming'
import { strings } from './strings'
import { limits } from './limits'
import type { Course, Section } from './types'

// Course registry, in syllabus order — one course per chapter of DSA-COURSE-PLAN.md, each named for
// its subject (the id is the route prefix, the folder name and the audio folder):
//
//   correctness          1  Problems, Algorithms, and Correctness              (7)
//   analysis             2  Analysing Time, Space, and Growth                  (8)
//   sequences            3  Sequences, Links, Stacks, and Queues               (8)
//   sorting              4  Ordered Data, Searching, and Sorting               (8)
//   hashing              5  Hashing, Sets, and Maps                            (7)
//   trees                6  Trees and Ordered Indexes                          (8)
//   heaps                7  Heaps and Priority-Driven Processing               (7)
//   exhaustive-search    8  Recursion, Exhaustive Search, and Pruning          (7)
//   graphs               9  Graph Representation and Traversal                 (8)
//   shortest-paths       10 Shortest Paths and Spanning Networks               (8)
//   greedy               11 Greedy Design and Exchange Reasoning               (6)
//   dynamic-programming  12 Dynamic Programming and State Design               (8)
//   strings              13 Strings and Prefix-Based Structures                (7)
//   limits               14 Computational Limits and Integrated Algorithm Design (9)
export const COURSES: Record<string, Course> = {
  [correctness.id]: correctness,
  [analysis.id]: analysis,
  [sequences.id]: sequences,
  [sorting.id]: sorting,
  [hashing.id]: hashing,
  [trees.id]: trees,
  [heaps.id]: heaps,
  [exhaustiveSearch.id]: exhaustiveSearch,
  [graphs.id]: graphs,
  [shortestPaths.id]: shortestPaths,
  [greedy.id]: greedy,
  [dynamicProgramming.id]: dynamicProgramming,
  [strings.id]: strings,
  [limits.id]: limits,
}

export type { Course, Section }

// slugOf / allSections are the shell's — the slug rule (`<courseId>-<sectionId>`) is part of the
// route contract every recorder drives, so it cannot be a per-repo decision. Re-exported here
// because this module is what the app and the scripts import them from.
export { slugOf, allSections } from '@graphlearning/shell'

export function getCourse(id: string): Course | undefined {
  return COURSES[id]
}
