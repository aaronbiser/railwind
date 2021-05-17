const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      // must match colors in index.css
      color1: {
        50: 'var(--color1-50)',
        100: 'var(--color1-100)',
        200: 'var(--color1-200)',
        300: 'var(--color1-300)',
        400: 'var(--color1-400)',
        500: 'var(--color1-500)',
        600: 'var(--color1-600)',
        700: 'var(--color1-700)',
        800: 'var(--color1-800)',
        900: 'var(--color1-900)'
      },
      color2: {
        50: 'var(--color2-50)',
        100: 'var(--color2-100)',
        200: 'var(--color2-200)',
        300: 'var(--color2-300)',
        400: 'var(--color2-400)',
        500: 'var(--color2-500)',
        600: 'var(--color2-600)',
        700: 'var(--color2-700)',
        800: 'var(--color2-800)',
        900: 'var(--color2-900)'
      },
      color3: {
        50: 'var(--color3-50)',
        100: 'var(--color3-100)',
        200: 'var(--color3-200)',
        300: 'var(--color3-300)',
        400: 'var(--color3-400)',
        500: 'var(--color3-500)',
        600: 'var(--color3-600)',
        700: 'var(--color3-700)',
        800: 'var(--color3-800)',
        900: 'var(--color3-900)'
      },
      color4: {
        50: 'var(--color4-50)',
        100: 'var(--color4-100)',
        200: 'var(--color4-200)',
        300: 'var(--color4-300)',
        400: 'var(--color4-400)',
        500: 'var(--color4-500)',
        600: 'var(--color4-600)',
        700: 'var(--color4-700)',
        800: 'var(--color4-800)',
        900: 'var(--color4-900)'
      },
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
