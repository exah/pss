// @flow

import {
  DEFAULT_KEY,
  SPACE_KEY,
  SIZES_KEY,
  COLORS_KEY,
  PALETTE_KEY
} from './constants'

type DefaultKey = DEFAULT_KEY

type ThemeKey = SPACE_KEY | SIZES_KEY | COLORS_KEY | PALETTE_KEY | string

type Theme = $Shape<{
  default: { media: string | DefaultKey | false, [ThemeKey]: string | DefaultKey },
  media: { [DefaultKey | string]: string | null },
  [ThemeKey]: {}
}>

type Props = { theme: Theme }

type StyleValue = string | number

type Style = { [string]: StyleValue }

type Styles = Style | Style[]

type PropStyleValue = string | number | boolean | Function | null

type DynamicStyle = (props: Props, mediaKey?: string) => Styles

/**
 * {@link Function} that returns style that will be applied to component when prop is used.
 *
 * @param value — this prop value
 * @param props — other component props, including `theme`
 * @param mediaKey — is prop suffix, same as key in `theme.media`, resulted style is wrapped in matched media query
 */

type PropStyle = (value: PropStyleValue, props: Props, mediaKey: string | null) => Styles

/**
 * Object with keys that represents component `prop` and
 * the value is a `style` that will be applied (or {@link PropStyle}).
 *
 * @type {Object}
 *
 * @example
 * {
 *   hide: { display: 'none' },
 *   width: (value) => ({ width: value })
 * }
 *
 * @example
 * {
 *   size: (value, props) => ({ height: props.theme.size[value] }),
 *   color: (value, props) => ({ color: props.theme.color[value] })
 * }
 */

type PropStyles = { [string]: PropStyle }

export type {
  ThemeKey,
  Theme,
  Props,
  StyleValue,
  Style,
  Styles,
  DynamicStyle,
  PropStyles,
  PropStyle,
  PropStyleValue
}
