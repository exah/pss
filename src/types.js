// @flow

import {
  DEFAULT_KEY,
  SPACE_KEY,
  SIZES_KEY,
  COLORS_KEY,
  PALETTE_KEY
} from './constants'

export type DefaultKey = DEFAULT_KEY

export type ThemeKey = SPACE_KEY | SIZES_KEY | COLORS_KEY | PALETTE_KEY | string

export type Theme = $Shape<{
  default: { media: string | DefaultKey | false, [ThemeKey]: string | DefaultKey },
  media: { [DefaultKey | string]: string | null },
  [ThemeKey]: {}
}>

export type Props = { theme: Theme }

export type StyleValue = string | number

export type Style = { [string]: StyleValue }

export type Styles = Style | Style[]

export type Mixin = (props: Props, mediaKey?: string) => Styles

export type PropStyleValue = string | number | boolean | Function | null

export type PropStyle = (value: PropStyleValue, props: Props, mediaKey: string | null) => Styles

export type PropStyles = { [string]: PropStyle }
