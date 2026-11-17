import type { CSSObject, CSSProperties, StyleValue, ThemeValue } from 'pss'
import { Box, Provider, Root } from 'pss-react'
import { expectTypeOf, test } from 'vitest'

export const theme = {
  breakpoints: { $: null, $md: '(min-width: 600px)' },
  colors: {
    primary: 'var(--c-primary, #1769aa)',
    foreground: 'var(--c-foreground, #ffffff)',
  },
  colorSchemes: {
    light: { '--c-primary': '#1769aa', '--c-foreground': '#ffffff' },
    dark: { '--c-primary': '#8ab4ff', '--c-foreground': '#171717' },
  },
  space: { small: 8, medium: 16 },
} as const

type AppTheme = typeof theme

declare module 'pss' {
  interface SystemTheme extends AppTheme {}
}

declare module '@emotion/react' {
  interface Theme extends AppTheme {}
}

test('theme tokens are accepted by CSS style properties', () => {
  expectTypeOf<ThemeValue<'colors'>>().toEqualTypeOf<keyof AppTheme['colors']>()
  expectTypeOf<NonNullable<StyleValue<'color'>>>().toEqualTypeOf<
    NonNullable<CSSProperties['color']> | ThemeValue<'colors'>
  >()
  expectTypeOf<NonNullable<CSSObject['color']>>().toEqualTypeOf<
    NonNullable<CSSProperties['color']> | ThemeValue<'colors'>
  >()
  expectTypeOf<NonNullable<CSSObject['padding']>>().toEqualTypeOf<
    NonNullable<CSSProperties['padding']> | ThemeValue<'space'>
  >()
  expectTypeOf<NonNullable<CSSObject['marginX']>>().toEqualTypeOf<
    NonNullable<CSSProperties['margin']> | ThemeValue<'space'>
  >()
})

export const example = (
  <Provider theme={theme}>
    <Root colorScheme="light" />
    <Box
      bg="primary"
      pss={{
        color: 'foreground',
        padding: 'medium',
        marginX: 'small',
        $md: { color: 'primary' },
        ':hover': { color: 'foreground' },
      }}
    >
      Theme-aware styles
    </Box>
  </Provider>
)

const rawCssValues: CSSObject = {
  color: 'var(--color, currentColor)',
  padding: 'calc(1rem + 2px)',
  '--custom-token': 'var(--custom-token, blue)',
}

void [example, rawCssValues]
