import type { Scene } from '@graphlearning/flow'
import { graphModels } from './graph-models'
import { representations } from './representations'
import { bfs } from './bfs'
import { dfs } from './dfs'
import { cycles } from './cycles'
import { topo } from './topo'
import { scc } from './scc'
import { traversalCost } from './traversal-cost'

// Chapter 9 — Graph Representation and Traversal. One scene per section, in section order.
export const ch09Scenes: Scene[] = [graphModels, representations, bfs, dfs, cycles, topo, scc, traversalCost]
