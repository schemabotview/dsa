import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/ch06/shape.py?raw'
import out from '../../../examples/ch06/shape.out?raw'

// §6.1 — the chapter's depot index tree, labelled with the vocabulary (root, depth, leaf), then the
// recursive measures that define height and size.
export const treeAnatomy: Scene = {
  id: 'tree-anatomy',
  title: 'Tree vocabulary',
  flow: 'TB',
  nodes: [
    {
      id: 'tree',
      label: 'An ordered index of depot numbers: height 2',
      pattern: 'group',
      flow: 'TB',
      children: [
        { id: 't317', label: '317', sub: 'root · depth 0', pattern: 'service', icon: 'tree' },
        { id: 't104', label: '104', sub: 'internal · depth 1', pattern: 'network', icon: 'box' },
        { id: 't458', label: '458', sub: 'internal · depth 1', pattern: 'network', icon: 'box' },
        { id: 't50', label: '50', sub: 'leaf · depth 2', pattern: 'storage', icon: 'box' },
        { id: 't221', label: '221', sub: 'leaf · depth 2', pattern: 'storage', icon: 'box' },
        { id: 't400', label: '400', sub: 'leaf · depth 2', pattern: 'storage', icon: 'box' },
        { id: 't600', label: '600', sub: 'leaf · depth 2', pattern: 'storage', icon: 'box' },
      ],
      edges: [
        { source: 't317', target: 't104', label: 'left' },
        { source: 't317', target: 't458', label: 'right' },
        { source: 't104', target: 't50' },
        { source: 't104', target: 't221' },
        { source: 't458', target: 't400' },
        { source: 't458', target: 't600' },
      ],
    },
    { id: 'code', kind: 'code', filename: 'shape.py', label: code.trimEnd() },
    { id: 'out', kind: 'code', filename: 'output · CPython 3.14.6', label: out.trimEnd(), hug: true },
  ],
  edges: [
    { source: 'tree', target: 'code' },
    { source: 'code', target: 'out', label: 'run' },
  ],
}
