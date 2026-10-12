import type { Scene } from '@graphlearning/flow'

// §1.3 — a baseline earns its place by what it is used for afterwards, not by being fast.
export const baselineRoles: Scene = {
  id: 'baseline-roles',
  title: 'What a baseline is for',
  flow: 'LR',
  nodes: [
    { id: 'baseline', label: 'Baseline', sub: 'simplest correct answer', pattern: 'service', icon: 'wrench' },
    {
      id: 'roles',
      label: 'Used afterwards as',
      pattern: 'group',
      cols: 1,
      children: [
        { id: 'oracle', label: 'Test oracle', sub: 'expected answers for faster code', pattern: 'external', icon: 'circlecheck' },
        { id: 'spec-check', label: 'Spec check', sub: 'exposes gaps in the contract', pattern: 'user', icon: 'scroll' },
        { id: 'yardstick', label: 'Yardstick', sub: 'the cost a new idea must beat', pattern: 'network', icon: 'ruler' },
      ],
    },
  ],
  edges: [{ source: 'baseline', target: 'roles' }],
}
