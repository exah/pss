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

/**
 * {@link Function} that returns style that will be applied to component when prop is used.
 *
 * @param value — this prop value
 * @param props — other component props, including `theme`
 * @param mediaKey — is prop suffix, same as key in `theme.media`, resulted style is wrapped in matched media query
 */

export type PropStyle = (value: PropStyleValue, props: Props, mediaKey: string | null) => Styles

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

export type PropStyles = { [string]: PropStyle }
