#!/usr/bin/env node

import token from '../../generated/w3c/breakpoints.json' with { type: 'json' }

export const fontConfig = {
  minWidth: Number.parseInt(token.breakpoints.sm.$value),
  maxWidth: Number.parseInt(token.breakpoints.lg.$value),
  minFontSize: 16,
  maxFontSize: 24,
  minTypeScale: 1.2,
  maxTypeScale: 1.25,
  positiveSteps: 4,
  negativeSteps: 0,
}
