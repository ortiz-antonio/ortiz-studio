#!/usr/bin/env node

import token from '../../generated/w3c/breakpoints.json' with { type: 'json' }

export const spaceConfig = {
  minWidth: Number.parseInt(token.breakpoints.sm.$value),
  maxWidth: Number.parseInt(token.breakpoints.lg.$value),
  minSize: 16,
  maxSize: 20,
  positiveSteps: [1.5, 2, 3, 4, 6],
  negativeSteps: [0.75, 0.5, 0.25],
  customSizes: ['s-l', '2xl-4xl'],
}
