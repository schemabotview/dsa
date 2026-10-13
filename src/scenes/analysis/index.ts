import type { Scene } from '@graphlearning/flow'
import { costModel } from './cost-model'
import { counting } from './counting'
import { bounds } from './bounds'
import { cases } from './cases'
import { growth } from './growth'
import { recursionTree } from './recursion-tree'
import { space } from './space'
import { timing } from './timing'

// Chapter 2 — Analysing Time, Space, and Growth. One scene per section, in section order.
export const analysisScenes: Scene[] = [costModel, counting, bounds, cases, growth, recursionTree, space, timing]
