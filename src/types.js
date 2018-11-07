// @flow

//
// Styles
//

type CSSProp = string
type CSSVal = string | number
type StyleObj = { [CSSProp]: CSSVal }
type EmptyArray = Array<*>
type Styles = EmptyArray | StyleObj | StyleObj[]

//
// Prop Styles
//

type CompPropName = string
type PropStyleVal = string | number | boolean | Function | null
type Props = { [theme: CompPropName]: PropStyleVal }
type DynamicStyleFn = (props: Props, mediaKey?: string) => StyleObj | Styles

/**
 * {@link Function} that returns style that will be applied to component when prop is used.
 *
 * @param value — this prop value
 * @param props — other component props, including `theme`
 * @param mediaKey — is prop suffix, same as key in `theme.media`, resulted style is wrapped in matched media query
 */

type PropStyleFn = (value: PropStyleVal, props: Props, mediaKey: string | null) => StyleObj

/**
 * Object with keys that represents component `prop` and
 * the value is a `style` that will be applied (or {@link PropStyleFn}).
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
type PropStylesObj = { [CompPropName]: PropStyleFn }

//
// Themes
//

type ThemeDefaultKey = 'default'
type ThemeKey = 'media' | 'space' | 'size' | 'color' | 'palette'

type ThemeObj = $Shape<{
  default: { [ThemeKey]: string | ThemeDefaultKey },
  media: { [ThemeDefaultKey | string]: string | null },
  space: { [ThemeDefaultKey | string]: Array<number> },
  size: { [string]: string | number },
  color: { [string]: string },
  palette: { [ThemeDefaultKey | string]: {} }
}>

export type {
  ThemeKey,
  ThemeObj,
  CompPropName,
  Props,
  CSSProp,
  CSSVal,
  StyleObj,
  Styles,
  DynamicStyleFn,
  PropStylesObj,
  PropStyleFn,
  PropStyleVal
}
