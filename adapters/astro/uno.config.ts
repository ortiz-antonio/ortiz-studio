import { defineConfig, presetIcons, presetWind3, transformerVariantGroup } from 'unocss'

import theme from '../../core/generated/theme'
import compositions from '../../core/src/design-system/compositions'

import ui from '../../core/src/design-system/ui'

export default defineConfig({
  content: {
    pipeline: {
      include: [
        /\.(astro|html)($|\?)/,
        '../../core/design-system/*.{js,ts}',
      ],
    },
  },
  presets: [presetWind3({ preflight: true }), presetIcons({})],
  transformers: [transformerVariantGroup()],
  extendTheme: (themeDefault) => {
    return {
      ...themeDefault,
      colors: theme.colors,
      fontWeight: theme.fontWeight,
      lineHeight: theme.lineHeight,
      fontFamily: theme.fontFamily,
      fontSize: theme.fontSize,
      spacing: theme.spacing,
    }
  },
  shortcuts: [compositions, ui],
})
