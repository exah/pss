import { Global, css } from '@emotion/react'
import {
  combine,
  colorScheme,
  ColorSchemeProps,
  pss,
  PSS,
  variant,
  VariantProps,
} from 'pss'

export interface RootProps
  extends VariantProps<'root'>,
    PSS,
    ColorSchemeProps {}

const base = combine(colorScheme, variant('root', 'default'), pss)

export const Root = (props: RootProps) => (
  <Global
    styles={(theme) => css`
      :root {
        ${base({ theme, ...props })}
      }
    `}
  />
)
