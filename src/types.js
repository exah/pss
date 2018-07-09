// @flow

//
// Styles
//

type CSSProp = string
type CSSVal = string | number
type StyleObj = { [CSSProp]: CSSVal }
type Styles = Array<StyleObj>

//
// Prop Styles
//

type CompPropName = string
type PropStyleVal = string | number | boolean | Function | null
type Props = { [theme: CompPropName]: PropStyleVal }
type DynamicStyleFn = (props: Props, mediaKey?: string) => StyleObj | Styles
type PropStyleFn = (value: PropStyleVal, props?: Props, mediaKey?: string) => StyleObj

/**
 * Object with keys that represents component `prop` and
 * the value is a `style` that will be applied (can be functions, see {@link PropStyleFn}).
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
type ThemeKey = 'media' | 'space' | 'size' | 'color' | 'palette' | 'textStyle'

type ThemeObj = $Shape<{
  default: {| [ThemeKey]: string | ThemeDefaultKey |},
  media: {| [ThemeDefaultKey | string]: string | null |},
  space: {| [ThemeDefaultKey | string]: Array<number> |},
  size: {| [string]: string | number |},
  color: {| [string]: string |},
  palette: {| [ThemeDefaultKey | string]: {} |},
  textStyle: {| [ThemeDefaultKey | string]: {} |}
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
