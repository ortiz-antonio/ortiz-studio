// src/design-system/ui.js

const STATE_HOVER_ACCENT = `
    hover:(bg-accent/80 cursor-pointer text-color-base)
    `
const STATE_FOCUS_ACCENT = `
    focus:(outline-none ring-2 ring-accent ring-offset-2 ring-offset-base)
`

const STATE_HOVER_BASE = `
    hover:(bg-foreground cursor-pointer text-color-base)
`
const STATE_FOCUS_BASE = `
    focus:(outline-none ring-2 ring-foreground ring-offset-2 ring-offset-base)
`

const INTERACTION_BASE = `${STATE_HOVER_BASE} ${STATE_FOCUS_BASE}`
const INTERACTION_FOCUS = `${STATE_HOVER_ACCENT} ${STATE_FOCUS_ACCENT}`

const STATE_BASE = 'bg-accent-soft'

// --- base

export default {
  'ui-section': `
  w-full
  `,

  'ui-section-odd': `
  bg-surface
  `,

  'ui-section-container': `
    max-w-7xl mx-auto p-m
    `,

  'ui-button': `
    p-s
    rounded-md border-0 font-bold text-color-foreground decoration-none
    ${STATE_BASE}
    ${INTERACTION_BASE}
  `,

  'ui-button-accent': `
    bg-accent
    ${INTERACTION_FOCUS}
  `,

  'ui-text': `
    break-words
    text-color-foreground font-base font-regular line-height-standard
  `,

  'ui-text-body': `
    text-step-1
  `,

  'ui-text-sm': `
    text-step-0
  `,

  'ui-text-title': `
    font-bold text-color-accent
  `,

  'ui-text-title-1': `
    text-step-4
  `,

  'ui-text-title-2': `
    text-step-3
  `,

  'ui-text-title-3': `
    text-step-2
  `,

  'ui-text-title-4': `
    text-step-1
  `,
}
