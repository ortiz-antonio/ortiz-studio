import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  ignores: [
    'dist',
    'node_modules',
    '.git',
    'adapters/**', // Los adapters se lintan con sus propias configuraciones
  ],
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: false,
  },
  typescript: true,
})
