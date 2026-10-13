import type { Scene } from '@graphlearning/flow'
import { correctnessScenes } from './correctness'
import { analysisScenes } from './analysis'
import { sequencesScenes } from './sequences'
import { sortingScenes } from './sorting'
import { hashingScenes } from './hashing'
import { treesScenes } from './trees'
import { heapsScenes } from './heaps'
import { exhaustiveSearchScenes } from './exhaustive-search'
import { graphsScenes } from './graphs'
import { shortestPathsScenes } from './shortest-paths'
import { greedyScenes } from './greedy'
import { dynamicProgrammingScenes } from './dynamic-programming'
import { stringsScenes } from './strings'
import { limitsScenes } from './limits'

// Scene registry. Sections reference scenes by id; scenes are grouped by course (one folder each,
// mirroring src/content). Ids are globally unique across courses, so the flat lookup below is
// unambiguous. Courses are added here as each is authored.
const ALL: Scene[] = [
  ...correctnessScenes,
  ...analysisScenes,
  ...sequencesScenes,
  ...sortingScenes,
  ...hashingScenes,
  ...treesScenes,
  ...heapsScenes,
  ...exhaustiveSearchScenes,
  ...graphsScenes,
  ...shortestPathsScenes,
  ...greedyScenes,
  ...dynamicProgrammingScenes,
  ...stringsScenes,
  ...limitsScenes,
]

export const SCENES: Record<string, Scene> = Object.fromEntries(ALL.map((s) => [s.id, s]))

export function getScene(id: string): Scene | undefined {
  return SCENES[id]
}
