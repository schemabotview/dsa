import type { Scene } from '@graphlearning/flow'
import code from '../../../examples/greedy/huffman.py?raw'
import out from '../../../examples/greedy/huffman.out?raw'

// §11.4 — the Huffman tree for six depot codes, built by repeatedly merging the two rarest weights;
// a symbol's code is its path (left 0, right 1), so frequent symbols get short codes.
export const huffman: Scene = {
  id: 'huffman',
  title: 'Huffman coding',
  flow: 'TB',
  nodes: [
    {
      id: 'tree',
      label: 'The code tree: left 0, right 1',
      pattern: 'group',
      flow: 'TB',
      children: [
        { id: 'h100', label: '100', sub: 'root', pattern: 'service', icon: 'merge' },
        { id: 'hN', label: 'N  45', sub: 'code 0', pattern: 'external', icon: 'warehouse' },
        { id: 'h55', label: '55', pattern: 'network', icon: 'merge' },
        { id: 'h25', label: '25', pattern: 'network', icon: 'merge' },
        { id: 'h30', label: '30', pattern: 'network', icon: 'merge' },
        { id: 'hW', label: 'W  12', sub: 'code 100', pattern: 'storage', icon: 'warehouse' },
        { id: 'hE', label: 'E  13', sub: 'code 101', pattern: 'storage', icon: 'warehouse' },
        { id: 'h14', label: '14', sub: 'first merge', pattern: 'warn', icon: 'merge' },
        { id: 'hS', label: 'S  16', sub: 'code 111', pattern: 'storage', icon: 'warehouse' },
        { id: 'hP', label: 'P  5', sub: 'code 1100', pattern: 'storage', icon: 'warehouse' },
        { id: 'hH', label: 'H  9', sub: 'code 1101', pattern: 'storage', icon: 'warehouse' },
      ],
      edges: [
        { source: 'h100', target: 'hN', label: '0' },
        { source: 'h100', target: 'h55', label: '1' },
        { source: 'h55', target: 'h25', label: '0' },
        { source: 'h55', target: 'h30', label: '1' },
        { source: 'h25', target: 'hW', label: '0' },
        { source: 'h25', target: 'hE', label: '1' },
        { source: 'h30', target: 'h14', label: '0' },
        { source: 'h30', target: 'hS', label: '1' },
        { source: 'h14', target: 'hP', label: '0' },
        { source: 'h14', target: 'hH', label: '1' },
      ],
    },
    {
      id: 'run',
      label: 'Merge the two rarest, repeatedly',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'code', kind: 'code', filename: 'huffman.py', label: code.trimEnd(), hug: true },
        { id: 'out', kind: 'code', filename: 'output', label: out.trimEnd(), hug: true, pattern: 'external' },
      ],
    },
  ],
  edges: [{ source: 'tree', target: 'run' }],
}
