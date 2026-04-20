// src/adapters/astro/eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  ignores: [
    'dist',
    '.astro',
    'node_modules',
    '.git',
  ],
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: false,
  },
  typescript: true,
  astro: true,
  rules: {
    'antfu/if-newline': 'error',
    'style/array-bracket-spacing': ['error', 'never'],
  },
})
